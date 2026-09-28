import { useState } from 'react';

const KM_PER_MILE = 1.609344;

const DISTANCES = [
  { id: '5k', label: '5K', km: 5 },
  { id: '10k', label: '10K', km: 10 },
  { id: 'half', label: 'Half Marathon', km: 21.0975 },
  { id: 'marathon', label: 'Marathon', km: 42.195 },
];

const emptyTime = { h: '', m: '', s: '' };

const toSeconds = ({ h, m, s }) =>
  (parseFloat(h) || 0) * 3600 + (parseFloat(m) || 0) * 60 + (parseFloat(s) || 0);

const formatClock = (totalSeconds) => {
  const rounded = Math.round(totalSeconds);
  const hours = Math.floor(rounded / 3600);
  const minutes = Math.floor((rounded % 3600) / 60);
  const seconds = rounded % 60;
  const mm = hours > 0 ? String(minutes).padStart(2, '0') : String(minutes);
  return `${hours > 0 ? `${hours}:` : ''}${mm}:${String(seconds).padStart(2, '0')}`;
};

const TimeField = ({ label, value, onChange, max }) => (
  <label className="flex flex-col text-xs font-medium text-slate-500 flex-1 min-w-0">
    {label}
    <input
      type="number"
      inputMode="numeric"
      min="0"
      max={max}
      placeholder="0"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full border border-slate-300 rounded-lg px-3 py-2 text-base text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </label>
);

const DistanceCard = ({ distance, time, onChange }) => {
  const miles = distance.km / KM_PER_MILE;
  const totalSeconds = toSeconds(time);
  const hasTime = totalSeconds > 0;

  const perMile = hasTime ? totalSeconds / miles : null;
  const perKm = hasTime ? totalSeconds / distance.km : null;
  const mph = hasTime ? miles / (totalSeconds / 3600) : null;

  const update = (field) => (value) => onChange({ ...time, [field]: value });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-200 p-6 flex flex-col">
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3">
          {distance.label}
        </h2>
        <span className="text-sm text-slate-500">{miles.toFixed(2)} mi</span>
      </div>

      <div className="flex gap-3 mb-5">
        <TimeField label="Hours" value={time.h} onChange={update('h')} />
        <TimeField label="Minutes" value={time.m} onChange={update('m')} max="59" />
        <TimeField label="Seconds" value={time.s} onChange={update('s')} max="59" />
      </div>

      <div className="rounded-xl bg-blue-50 px-4 py-4 text-center">
        <div className="text-xs font-semibold uppercase tracking-widest text-blue-700 mb-1">
          Pace per mile
        </div>
        <div className="text-4xl font-bold text-blue-700 tabular-nums">
          {hasTime ? formatClock(perMile) : '—'}
        </div>
      </div>

      <div className="flex justify-between text-sm text-slate-500 mt-4">
        <span>{hasTime ? `${formatClock(perKm)} / km` : '— / km'}</span>
        <span>{hasTime ? `${mph.toFixed(1)} mph` : '— mph'}</span>
      </div>
    </div>
  );
};

const PaceCalculator = () => {
  const [times, setTimes] = useState(
    Object.fromEntries(DISTANCES.map((d) => [d.id, emptyTime]))
  );

  const anyEntered = DISTANCES.some((d) => toSeconds(times[d.id]) > 0);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Running Pace Calculator</h1>
        <p className="text-slate-500">
          Enter a target finish time for a race distance to see the pace per mile you need to hold.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DISTANCES.map((distance) => (
          <DistanceCard
            key={distance.id}
            distance={distance}
            time={times[distance.id]}
            onChange={(next) => setTimes((prev) => ({ ...prev, [distance.id]: next }))}
          />
        ))}
      </div>

      {anyEntered && (
        <div className="mt-6 text-right">
          <button
            onClick={() =>
              setTimes(Object.fromEntries(DISTANCES.map((d) => [d.id, emptyTime])))
            }
            className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  );
};

export default PaceCalculator;
