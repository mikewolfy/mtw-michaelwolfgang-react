import { useEffect, useMemo, useState } from 'react';

const DOB_COOKIE = 'lifeTimersDob';
const RETIREMENT_COOKIE = 'lifeTimersRetirementAge';
const COOKIE_MAX_AGE_DAYS = 365 * 20;
const ASSUMED_END_OF_LIFE_AGE = 85;

const setCookie = (name, value, maxAgeDays) => {
  const expires = new Date(Date.now() + maxAgeDays * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
};

const getCookie = (name) => {
  const cookieName = `${name}=`;
  const match = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(cookieName));

  if (!match) {
    return '';
  }

  return decodeURIComponent(match.substring(cookieName.length));
};

const addMonths = (date, months) => {
  const next = new Date(date.getTime());
  next.setMonth(next.getMonth() + months);
  return next;
};

const addYears = (date, years) => {
  const next = new Date(date.getTime());
  next.setFullYear(next.getFullYear() + years);
  return next;
};

const countWorkdays = (start, end) => {
  if (!(end > start)) {
    return 0;
  }

  const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1);
  const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  if (startDate > endDate) {
    return 0;
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.floor((endDate - startDate) / msPerDay) + 1;
  const fullWeeks = Math.floor(totalDays / 7);
  let weekdays = fullWeeks * 5;
  const remainingDays = totalDays % 7;

  for (let dayOffset = 0; dayOffset < remainingDays; dayOffset += 1) {
    const day = (startDate.getDay() + dayOffset) % 7;
    if (day >= 1 && day <= 5) {
      weekdays += 1;
    }
  }

  return weekdays;
};

const countTotalMonths = (startDate, targetDate) => {
  let cursor = new Date(startDate.getTime());
  let months = 0;

  while (true) {
    const next = addMonths(cursor, 1);
    if (next <= targetDate) {
      months += 1;
      cursor = next;
    } else {
      break;
    }
  }

  return months;
};

const countTotalYears = (startDate, targetDate) => {
  let cursor = new Date(startDate.getTime());
  let years = 0;

  while (true) {
    const next = addYears(cursor, 1);
    if (next <= targetDate) {
      years += 1;
      cursor = next;
    } else {
      break;
    }
  }

  return years;
};

const getTotalTimers = (targetDate, now) => {
  if (!(targetDate > now)) {
    return {
      totalYears: 0,
      totalMonths: 0,
      totalDays: 0,
      totalWorkdays: 0,
      totalHours: 0,
      totalMinutes: 0,
      totalSeconds: 0,
    };
  }

  const msPerDay = 24 * 60 * 60 * 1000;
  const msPerHour = 60 * 60 * 1000;
  const msPerMinute = 60 * 1000;
  const msPerSecond = 1000;
  const diffMs = targetDate - now;

  return {
    totalYears: countTotalYears(now, targetDate),
    totalMonths: countTotalMonths(now, targetDate),
    totalDays: Math.floor(diffMs / msPerDay),
    totalWorkdays: countWorkdays(now, targetDate),
    totalHours: Math.floor(diffMs / msPerHour),
    totalMinutes: Math.floor(diffMs / msPerMinute),
    totalSeconds: Math.floor(diffMs / msPerSecond),
  };
};

const TimerCard = ({ title, items }) => (
  <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-base md:text-xl">
      {items.map((item) => (
        <div key={item.label} className="bg-gray-50 rounded-lg p-4">
          <span className="font-semibold">{item.label}:</span>{' '}
          <span className="text-lg md:text-2xl font-bold">{item.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  </div>
);

const LifeTimers = () => {
  const [dob, setDob] = useState('');
  const [retirementAge, setRetirementAge] = useState('67');
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const savedDob = getCookie(DOB_COOKIE);
    const savedRetirementAge = getCookie(RETIREMENT_COOKIE);

    if (savedDob) {
      setDob(savedDob);
    }

    if (savedRetirementAge) {
      setRetirementAge(savedRetirementAge);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (dob) {
      setCookie(DOB_COOKIE, dob, COOKIE_MAX_AGE_DAYS);
    }
  }, [dob]);

  useEffect(() => {
    if (retirementAge) {
      setCookie(RETIREMENT_COOKIE, retirementAge, COOKIE_MAX_AGE_DAYS);
    }
  }, [retirementAge]);

  const parsedDob = useMemo(() => {
    if (!dob) {
      return null;
    }

    const parsed = new Date(`${dob}T00:00:00`);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }, [dob]);

  const parsedRetirementAge = useMemo(() => {
    const value = Number.parseInt(retirementAge, 10);
    if (Number.isNaN(value) || value <= 0) {
      return null;
    }
    return value;
  }, [retirementAge]);

  const endOfYear = useMemo(() => new Date(now.getFullYear(), 11, 31, 23, 59, 59), [now]);

  const retirementDate = useMemo(() => {
    if (!parsedDob || !parsedRetirementAge) {
      return null;
    }

    return new Date(
      parsedDob.getFullYear() + parsedRetirementAge,
      parsedDob.getMonth(),
      parsedDob.getDate(),
      23,
      59,
      59,
    );
  }, [parsedDob, parsedRetirementAge]);

  const endOfLifeDate = useMemo(() => {
    if (!parsedDob) {
      return null;
    }

    return new Date(
      parsedDob.getFullYear() + ASSUMED_END_OF_LIFE_AGE,
      parsedDob.getMonth(),
      parsedDob.getDate(),
      23,
      59,
      59,
    );
  }, [parsedDob]);

  const endOfYearBreakdown = useMemo(() => getTotalTimers(endOfYear, now), [endOfYear, now]);

  const retirementBreakdown = useMemo(
    () => getTotalTimers(retirementDate, now),
    [retirementDate, now],
  );

  const endOfLifeBreakdown = useMemo(
    () => getTotalTimers(endOfLifeDate, now),
    [endOfLifeDate, now],
  );

  const isReadyForRetirement = Boolean(parsedDob && parsedRetirementAge);
  const isReadyForLife = Boolean(parsedDob);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Life Timers
        </h1>

        <div className="grid md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-2 text-gray-700 font-semibold text-lg">
            Date of Birth
            <input
              type="date"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>

          <label className="flex flex-col gap-2 text-gray-700 font-semibold text-lg">
            Retirement Age
            <input
              type="number"
              min="1"
              max="120"
              value={retirementAge}
              onChange={(event) => setRetirementAge(event.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </label>
        </div>

        <p className="text-sm text-gray-500 mt-4">
          Your values are saved in browser cookies for about 20 years so they persist between visits.
        </p>
        <p className="text-sm text-gray-500">
          End-of-life timer uses an assumed life expectancy of {ASSUMED_END_OF_LIFE_AGE} years.
        </p>
      </div>

      <TimerCard
        title="Until End of Year"
        items={[
          { label: 'Total Months', value: endOfYearBreakdown.totalMonths },
          { label: 'Total Days', value: endOfYearBreakdown.totalDays },
          { label: 'Total Workdays', value: endOfYearBreakdown.totalWorkdays },
          { label: 'Total Hours', value: endOfYearBreakdown.totalHours },
          { label: 'Total Minutes', value: endOfYearBreakdown.totalMinutes },
          { label: 'Total Seconds', value: endOfYearBreakdown.totalSeconds },
        ]}
      />

      {isReadyForRetirement ? (
        <TimerCard
          title="Until Retirement"
          items={[
            { label: 'Total Years', value: retirementBreakdown.totalYears },
            { label: 'Total Months', value: retirementBreakdown.totalMonths },
            { label: 'Total Days', value: retirementBreakdown.totalDays },
            { label: 'Total Workdays', value: retirementBreakdown.totalWorkdays },
            { label: 'Total Hours', value: retirementBreakdown.totalHours },
            { label: 'Total Minutes', value: retirementBreakdown.totalMinutes },
            { label: 'Total Seconds', value: retirementBreakdown.totalSeconds },
          ]}
        />
      ) : (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 text-gray-600">
          Enter a valid DOB and retirement age to see retirement timers.
        </div>
      )}

      {isReadyForLife ? (
        <TimerCard
          title="Until End of Life"
          items={[
            { label: 'Total Years', value: endOfLifeBreakdown.totalYears },
            { label: 'Total Months', value: endOfLifeBreakdown.totalMonths },
            { label: 'Total Days', value: endOfLifeBreakdown.totalDays },
            { label: 'Total Minutes', value: endOfLifeBreakdown.totalMinutes },
            { label: 'Total Hours', value: endOfLifeBreakdown.totalHours },
            { label: 'Total Seconds', value: endOfLifeBreakdown.totalSeconds },
          ]}
        />
      ) : (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 text-gray-600">
          Enter a valid DOB to see end-of-life timers.
        </div>
      )}
    </div>
  );
};

export default LifeTimers;
