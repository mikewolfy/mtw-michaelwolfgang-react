import { useState, useEffect } from 'react';

const LoveLanguages = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    wordsOfAffirmation: 0,
    qualityTime: 0,
    receivingGifts: 0,
    actsOfService: 0,
    physicalTouch: 0
  });
  const [showResults, setShowResults] = useState(false);
  const [previousResults, setPreviousResults] = useState(null);
  const [showPreviousOption, setShowPreviousOption] = useState(false);

  // Check for previous results on component mount
  useEffect(() => {
    const savedResults = localStorage.getItem('loveLanguagesResults');
    if (savedResults) {
      const parsed = JSON.parse(savedResults);
      setPreviousResults(parsed);
      setShowPreviousOption(true);
    }
  }, []);

  // Save results to localStorage when showing results
  useEffect(() => {
    if (showResults) {
      const resultsData = {
        scores,
        rankedLanguages: getRankedLanguages(),
        dateTaken: new Date().toISOString()
      };
      localStorage.setItem('loveLanguagesResults', JSON.stringify(resultsData));
    }
  }, [showResults]);

  const questions = [
    // Mixed order with varied wording
    { id: 1, question: "I feel most loved when my partner...", optionA: "Gives me a heartfelt compliment", optionB: "Surprises me with a small gift", typeA: "wordsOfAffirmation", typeB: "receivingGifts" },
    { id: 2, question: "What makes me feel closest to my partner?", optionA: "Sitting together having deep conversations", optionB: "Cuddling on the couch", typeA: "qualityTime", typeB: "physicalTouch" },
    { id: 3, question: "I appreciate it when...", optionA: "My partner remembers special occasions with a present", optionB: "My partner takes care of chores without being asked", typeA: "receivingGifts", typeB: "actsOfService" },
    { id: 4, question: "The gesture that touches my heart most is...", optionA: "A warm embrace after a long day", optionB: "Hearing 'I'm proud of you'", typeA: "physicalTouch", typeB: "wordsOfAffirmation" },
    { id: 5, question: "I feel valued when my partner...", optionA: "Helps me tackle my to-do list", optionB: "Plans a special date night just for us", typeA: "actsOfService", typeB: "qualityTime" },
    { id: 6, question: "Which means more to me?", optionA: "Receiving a thoughtful token of affection", optionB: "Getting a gentle back rub", typeA: "receivingGifts", typeB: "physicalTouch" },
    { id: 7, question: "I feel most connected when...", optionA: "We're doing activities side by side", optionB: "I hear encouraging and supportive words", typeA: "qualityTime", typeB: "wordsOfAffirmation" },
    { id: 8, question: "What shows love best to me?", optionA: "My partner fixing things around the house", optionB: "Holding hands while we walk", typeA: "actsOfService", typeB: "physicalTouch" },
    { id: 9, question: "I appreciate when my partner...", optionA: "Tells me what they love about me", optionB: "Brings home my favorite treat", typeA: "wordsOfAffirmation", typeB: "receivingGifts" },
    { id: 10, question: "I feel happiest when...", optionA: "We spend uninterrupted hours together", optionB: "My partner pitches in with household tasks", typeA: "qualityTime", typeB: "actsOfService" },
    { id: 11, question: "The most meaningful gesture is...", optionA: "A loving kiss or hug", optionB: "Being told 'You matter to me'", typeA: "physicalTouch", typeB: "wordsOfAffirmation" },
    { id: 12, question: "I feel cared for when...", optionA: "I receive a gift that shows they know me", optionB: "My partner helps me when I'm overwhelmed", typeA: "receivingGifts", typeB: "actsOfService" },
    { id: 13, question: "What makes me feel secure in a relationship?", optionA: "Physical closeness and affection", optionB: "Having my partner's full attention", typeA: "physicalTouch", typeB: "qualityTime" },
    { id: 14, question: "I value most when my partner...", optionA: "Offers genuine praise for my efforts", optionB: "Does the dishes or runs errands for me", typeA: "wordsOfAffirmation", typeB: "actsOfService" },
    { id: 15, question: "The best way to show you care is...", optionA: "Spending quality time doing something I enjoy", optionB: "Picking out a perfect gift for me", typeA: "qualityTime", typeB: "receivingGifts" },
    { id: 16, question: "I feel most appreciated when...", optionA: "My partner touches my arm or shoulder lovingly", optionB: "I receive a surprise present", typeA: "physicalTouch", typeB: "receivingGifts" },
    { id: 17, question: "Which would make my day?", optionA: "Hearing 'I appreciate everything you do'", optionB: "Coming home to a clean house", typeA: "wordsOfAffirmation", typeB: "actsOfService" },
    { id: 18, question: "I feel loved when my partner...", optionA: "Puts away their phone to really listen to me", optionB: "Greets me with a warm hug", typeA: "qualityTime", typeB: "physicalTouch" },
    { id: 19, question: "What matters most in showing affection?", optionA: "Thoughtful presents on special days", optionB: "Helping with projects or responsibilities", typeA: "receivingGifts", typeB: "actsOfService" },
    { id: 20, question: "I appreciate it more when...", optionA: "I'm told I look great or did a good job", optionB: "We go on adventures together", typeA: "wordsOfAffirmation", typeB: "qualityTime" },
    { id: 21, question: "I feel closest when my partner...", optionA: "Gives me a massage or holds me close", optionB: "Brings me flowers or a gift just because", typeA: "physicalTouch", typeB: "receivingGifts" },
    { id: 22, question: "The best surprise would be...", optionA: "Help completing a task I've been dreading", optionB: "A thoughtful card or present", typeA: "actsOfService", typeB: "receivingGifts" },
    { id: 23, question: "I value when my partner...", optionA: "Sits close to me on the couch", optionB: "Makes time for just the two of us", typeA: "physicalTouch", typeB: "qualityTime" },
    { id: 24, question: "What makes me feel special?", optionA: "Verbal expressions of love and admiration", optionB: "Physical affection throughout the day", typeA: "wordsOfAffirmation", typeB: "physicalTouch" },
    { id: 25, question: "I feel supported when...", optionA: "My partner makes dinner or handles errands", optionB: "We have meaningful conversations together", typeA: "actsOfService", typeB: "qualityTime" },
    { id: 26, question: "Which gesture means more?", optionA: "A carefully chosen gift", optionB: "Words of encouragement when I'm struggling", typeA: "receivingGifts", typeB: "wordsOfAffirmation" },
    { id: 27, question: "I feel most cherished when...", optionA: "We take a walk together and just talk", optionB: "My partner takes care of something I needed done", typeA: "qualityTime", typeB: "actsOfService" },
    { id: 28, question: "What fills my heart?", optionA: "A tender touch or kiss", optionB: "A souvenir or memento from a trip", typeA: "physicalTouch", typeB: "receivingGifts" },
    { id: 29, question: "I appreciate most when my partner...", optionA: "Handles responsibilities so I can relax", optionB: "Snuggles with me while watching a movie", typeA: "actsOfService", typeB: "physicalTouch" },
    { id: 30, question: "I feel most understood when...", optionA: "I hear affirming words about who I am", optionB: "We dedicate time to be fully present together", typeA: "wordsOfAffirmation", typeB: "qualityTime" }
  ];

  const loveLanguageInfo = {
    wordsOfAffirmation: {
      name: "Words of Affirmation",
      description: "You feel most loved through verbal compliments, words of appreciation, and frequent expressions of affection. Encouragement and kind words mean the world to you.",
      icon: "💬",
      color: "from-blue-500 to-indigo-500"
    },
    qualityTime: {
      name: "Quality Time",
      description: "You feel most loved when you receive someone's undivided attention. Quality conversations and shared activities make you feel valued and connected.",
      icon: "⏰",
      color: "from-green-500 to-emerald-500"
    },
    receivingGifts: {
      name: "Receiving Gifts",
      description: "You feel most loved through tangible symbols of love. Thoughtful gifts, whether big or small, show that you were on someone's mind.",
      icon: "🎁",
      color: "from-purple-500 to-pink-500"
    },
    actsOfService: {
      name: "Acts of Service",
      description: "You feel most loved when someone does helpful things for you. Actions speak louder than words, and you appreciate when people ease your burdens.",
      icon: "🤝",
      color: "from-orange-500 to-red-500"
    },
    physicalTouch: {
      name: "Physical Touch",
      description: "You feel most loved through physical connection. Hugs, kisses, holding hands, and other forms of physical affection make you feel secure and loved.",
      icon: "🤗",
      color: "from-rose-500 to-pink-500"
    }
  };

  const handleAnswer = (selectedLanguage) => {
    const newScores = { ...scores };
    newScores[selectedLanguage]++;
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRankedLanguages = () => {
    const languageArray = Object.entries(scores).map(([key, value]) => ({
      key,
      score: value,
      ...loveLanguageInfo[key]
    }));
    
    return languageArray.sort((a, b) => b.score - a.score);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setScores({
      wordsOfAffirmation: 0,
      qualityTime: 0,
      receivingGifts: 0,
      actsOfService: 0,
      physicalTouch: 0
    });
    setShowResults(false);
    setShowPreviousOption(false);
  };

  const loadPreviousResults = () => {
    if (previousResults) {
      setScores(previousResults.scores);
      setShowResults(true);
      setShowPreviousOption(false);
    }
  };

  const startNewTest = () => {
    setShowPreviousOption(false);
  };

  // Show previous results option screen
  if (showPreviousOption && previousResults) {
    const dateTaken = new Date(previousResults.dateTaken);
    const formattedDate = dateTaken.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const topLanguage = previousResults.rankedLanguages[0];

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            The 5 Love Languages Test
          </h1>
          <p className="text-gray-600 text-lg">Welcome back!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-rose-500 to-purple-500 text-white px-6 py-3 rounded-xl text-xl font-bold mb-4">
              Previous Result Found
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              You took this test on {formattedDate}
            </h2>
            <p className="text-xl text-gray-600">
              Your top love language was: <span className="font-bold text-rose-600">{topLanguage.name}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={loadPreviousResults}
              className="group bg-gradient-to-br from-rose-50 to-rose-100 hover:from-rose-100 hover:to-rose-200 p-8 rounded-2xl border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">View Previous Results</h3>
              <p className="text-gray-600">See your full love language rankings from {formattedDate}</p>
            </button>

            <button
              onClick={startNewTest}
              className="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Take Test Again</h3>
              <p className="text-gray-600">Start a new test and update your results</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const rankedLanguages = getRankedLanguages();

    return (
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Your Love Languages
          </h1>
          <p className="text-gray-600 text-lg">Ranked from strongest to weakest</p>
        </div>

        <div className="space-y-6">
          {rankedLanguages.map((language, index) => (
            <div 
              key={language.key}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${language.color} flex items-center justify-center text-3xl shadow-lg`}>
                    {language.icon}
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-3">
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br ${language.color} text-white font-bold text-sm`}>
                      #{index + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-800">{language.name}</h2>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{language.description}</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-grow bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`h-3 rounded-full bg-gradient-to-r ${language.color} transition-all duration-1000`}
                        style={{ width: `${(language.score / 30) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-lg font-bold text-gray-700 min-w-[4rem] text-right">
                      {language.score}/30
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-2xl p-8 border border-rose-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">About the 5 Love Languages</h3>
          <p className="text-gray-700 mb-4">
            The 5 Love Languages, developed by Dr. Gary Chapman, describes five ways people express and experience love:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li><strong>Words of Affirmation:</strong> Verbal expressions of love and appreciation</li>
            <li><strong>Quality Time:</strong> Undivided attention and meaningful connection</li>
            <li><strong>Receiving Gifts:</strong> Tangible symbols of love and thoughtfulness</li>
            <li><strong>Acts of Service:</strong> Helpful actions that ease burdens</li>
            <li><strong>Physical Touch:</strong> Physical expressions of affection</li>
          </ul>
          <p className="text-gray-700">
            Understanding your love languages helps you communicate your needs and better understand how others express their love.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
              Ways to Communicate with Each Love Language
            </span>
          </h3>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">💬</span> Words of Affirmation
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Say "I love you" and "I appreciate you" often</li>
                <li>• Give genuine compliments about their appearance, achievements, or character</li>
                <li>• Write love notes, texts, or cards expressing your feelings</li>
                <li>• Offer encouragement during challenging times</li>
                <li>• Verbally acknowledge their efforts and contributions</li>
                <li>• Express gratitude for the things they do</li>
                <li>• Praise them in front of others</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-6 py-2">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">⏰</span> Quality Time
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Put away your phone and give undivided attention</li>
                <li>• Plan regular date nights or special outings together</li>
                <li>• Have meaningful conversations without distractions</li>
                <li>• Take walks together and talk about your day</li>
                <li>• Cook or eat meals together without TV or devices</li>
                <li>• Do activities you both enjoy (games, hobbies, sports)</li>
                <li>• Travel together and create shared experiences</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-6 py-2">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎁</span> Receiving Gifts
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Give thoughtful gifts that show you were thinking of them</li>
                <li>• Remember special occasions (birthdays, anniversaries, holidays)</li>
                <li>• Bring back souvenirs when you travel</li>
                <li>• Surprise them with their favorite treat or item</li>
                <li>• Create handmade gifts or personalized items</li>
                <li>• Give flowers, chocolates, or small tokens "just because"</li>
                <li>• Pay attention to things they mention wanting</li>
              </ul>
            </div>

            <div className="border-l-4 border-orange-500 pl-6 py-2">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">🤝</span> Acts of Service
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Help with household chores (dishes, laundry, cleaning)</li>
                <li>• Cook their favorite meal or pack their lunch</li>
                <li>• Run errands for them when they're busy</li>
                <li>• Fill up their gas tank or wash their car</li>
                <li>• Fix things around the house without being asked</li>
                <li>• Help with projects or tasks they're working on</li>
                <li>• Take care of responsibilities to lighten their load</li>
              </ul>
            </div>

            <div className="border-l-4 border-rose-500 pl-6 py-2">
              <h4 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">🤗</span> Physical Touch
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Hold hands while walking or sitting together</li>
                <li>• Give hugs, kisses, and physical affection regularly</li>
                <li>• Offer back rubs, massages, or gentle touches</li>
                <li>• Sit close together on the couch while relaxing</li>
                <li>• Put your arm around them or hold them close</li>
                <li>• Greet them with a warm embrace when reuniting</li>
                <li>• Show physical comfort during difficult moments</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={resetTest}
            className="bg-gradient-to-r from-rose-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:from-rose-700 hover:to-purple-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            Take Test Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          The 5 Love Languages Test
        </h1>
        <p className="text-gray-600 text-lg">Discover how you prefer to give and receive love</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-gray-700">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-semibold text-rose-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-rose-500 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          {currentQ.question}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => handleAnswer(currentQ.typeA)}
            className="group bg-gradient-to-br from-rose-50 to-rose-100 hover:from-rose-100 hover:to-rose-200 p-8 rounded-2xl border-2 border-rose-200 hover:border-rose-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-4xl font-bold text-rose-600 mb-3 group-hover:scale-110 transition-transform">A</div>
            <p className="text-lg text-gray-700 font-medium">{currentQ.optionA}</p>
          </button>

          <button
            onClick={() => handleAnswer(currentQ.typeB)}
            className="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-4xl font-bold text-purple-600 mb-3 group-hover:scale-110 transition-transform">B</div>
            <p className="text-lg text-gray-700 font-medium">{currentQ.optionB}</p>
          </button>
        </div>
      </div>

      {currentQuestion > 0 && (
        <div className="text-center">
          <button
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            className="text-gray-600 hover:text-gray-800 font-medium underline"
          >
            ← Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default LoveLanguages;
