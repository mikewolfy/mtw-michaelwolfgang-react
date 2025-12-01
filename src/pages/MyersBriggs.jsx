import { useState } from 'react';

const MyersBriggs = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    E: 0, I: 0, // Extraversion vs Introversion
    S: 0, N: 0, // Sensing vs Intuition
    T: 0, F: 0, // Thinking vs Feeling
    J: 0, P: 0  // Judging vs Perceiving
  });
  const [showResults, setShowResults] = useState(false);

  const questions = [
    // E vs I questions (1-8)
    { id: 1, question: "At a party, you...", optionA: "Interact with many, including strangers", optionB: "Interact with a few, known to you", typeA: "E", typeB: "I" },
    { id: 2, question: "You feel more energized...", optionA: "After spending time with groups", optionB: "After spending time alone", typeA: "E", typeB: "I" },
    { id: 3, question: "You prefer to...", optionA: "Think out loud and talk through ideas", optionB: "Think things through internally first", typeA: "E", typeB: "I" },
    { id: 4, question: "In social situations, you...", optionA: "Are easy to approach and talkative", optionB: "Are reserved until you know people", typeA: "E", typeB: "I" },
    { id: 5, question: "You gain energy from...", optionA: "Being around people and activity", optionB: "Quiet time for reflection", typeA: "E", typeB: "I" },
    { id: 6, question: "When making decisions, you prefer...", optionA: "Consulting with others first", optionB: "Thinking it through independently", typeA: "E", typeB: "I" },
    { id: 7, question: "Your ideal weekend involves...", optionA: "Going out and doing activities with others", optionB: "Relaxing at home or with close friends", typeA: "E", typeB: "I" },
    { id: 8, question: "You communicate best...", optionA: "Verbally and face-to-face", optionB: "In writing or after reflection", typeA: "E", typeB: "I" },
    
    // S vs N questions (9-16)
    { id: 9, question: "You focus more on...", optionA: "The present and concrete facts", optionB: "The future and possibilities", typeA: "S", typeB: "N" },
    { id: 10, question: "You prefer instructions that are...", optionA: "Detailed and step-by-step", optionB: "General and conceptual", typeA: "S", typeB: "N" },
    { id: 11, question: "You are more...", optionA: "Realistic and practical", optionB: "Imaginative and innovative", typeA: "S", typeB: "N" },
    { id: 12, question: "You trust...", optionA: "Experience and proven methods", optionB: "Intuition and gut feelings", typeA: "S", typeB: "N" },
    { id: 13, question: "You value...", optionA: "Common sense and facts", optionB: "Vision and imagination", typeA: "S", typeB: "N" },
    { id: 14, question: "You learn best through...", optionA: "Hands-on experience", optionB: "Theoretical concepts", typeA: "S", typeB: "N" },
    { id: 15, question: "When reading, you prefer...", optionA: "Literal meanings and details", optionB: "Reading between the lines", typeA: "S", typeB: "N" },
    { id: 16, question: "You describe yourself as more...", optionA: "Down-to-earth and observant", optionB: "Head-in-the-clouds and visionary", typeA: "S", typeB: "N" },
    
    // T vs F questions (17-24)
    { id: 17, question: "When making decisions, you prioritize...", optionA: "Logic and objective analysis", optionB: "People's feelings and harmony", typeA: "T", typeB: "F" },
    { id: 18, question: "You are more...", optionA: "Firm and direct", optionB: "Gentle and tactful", typeA: "T", typeB: "F" },
    { id: 19, question: "In conflicts, you focus on...", optionA: "Finding the truth", optionB: "Maintaining relationships", typeA: "T", typeB: "F" },
    { id: 20, question: "You value...", optionA: "Justice and fairness", optionB: "Compassion and empathy", typeA: "T", typeB: "F" },
    { id: 21, question: "When helping others, you prefer to...", optionA: "Solve their problems logically", optionB: "Provide emotional support", typeA: "T", typeB: "F" },
    { id: 22, question: "You are more convinced by...", optionA: "Logical arguments", optionB: "Emotional appeals", typeA: "T", typeB: "F" },
    { id: 23, question: "Your strength is...", optionA: "Analyzing situations objectively", optionB: "Understanding people's emotions", typeA: "T", typeB: "F" },
    { id: 24, question: "When giving feedback, you...", optionA: "Focus on what needs improvement", optionB: "Consider how it will make them feel", typeA: "T", typeB: "F" },
    
    // J vs P questions (25-32)
    { id: 25, question: "You prefer your life to be...", optionA: "Structured and planned", optionB: "Flexible and spontaneous", typeA: "J", typeB: "P" },
    { id: 26, question: "You work best...", optionA: "With deadlines and schedules", optionB: "At your own pace", typeA: "J", typeB: "P" },
    { id: 27, question: "You feel better when...", optionA: "Decisions are made", optionB: "Options are kept open", typeA: "J", typeB: "P" },
    { id: 28, question: "Your workspace is typically...", optionA: "Neat and organized", optionB: "Casual and flexible", typeA: "J", typeB: "P" },
    { id: 29, question: "You prefer to...", optionA: "Complete tasks early", optionB: "Work closer to deadlines", typeA: "J", typeB: "P" },
    { id: 30, question: "When planning a trip, you...", optionA: "Create detailed itineraries", optionB: "Go with the flow", typeA: "J", typeB: "P" },
    { id: 31, question: "You describe yourself as more...", optionA: "Organized and decisive", optionB: "Adaptable and easy-going", typeA: "J", typeB: "P" },
    { id: 32, question: "When starting a project, you prefer to...", optionA: "Plan everything before beginning", optionB: "Start and figure it out as you go", typeA: "J", typeB: "P" }
  ];

  const personalityTypes = {
    INTJ: { name: "The Architect", description: "Imaginative and strategic thinkers with a plan for everything." },
    INTP: { name: "The Logician", description: "Innovative inventors with an unquenchable thirst for knowledge." },
    ENTJ: { name: "The Commander", description: "Bold, imaginative, and strong-willed leaders who find a way or make one." },
    ENTP: { name: "The Debater", description: "Smart and curious thinkers who cannot resist an intellectual challenge." },
    INFJ: { name: "The Advocate", description: "Quiet and mystical, yet very inspiring and tireless idealists." },
    INFP: { name: "The Mediator", description: "Poetic, kind, and altruistic people, always eager to help a good cause." },
    ENFJ: { name: "The Protagonist", description: "Charismatic and inspiring leaders, able to mesmerize their listeners." },
    ENFP: { name: "The Campaigner", description: "Enthusiastic, creative, and sociable free spirits who can always find a reason to smile." },
    ISTJ: { name: "The Logistician", description: "Practical and fact-minded individuals whose reliability cannot be doubted." },
    ISFJ: { name: "The Defender", description: "Very dedicated and warm protectors, always ready to defend their loved ones." },
    ESTJ: { name: "The Executive", description: "Excellent administrators, unsurpassed at managing things or people." },
    ESFJ: { name: "The Consul", description: "Extraordinarily caring, social, and popular people, always eager to help." },
    ISTP: { name: "The Virtuoso", description: "Bold and practical experimenters, masters of all kinds of tools." },
    ISFP: { name: "The Adventurer", description: "Flexible and charming artists, always ready to explore and experience something new." },
    ESTP: { name: "The Entrepreneur", description: "Smart, energetic, and perceptive people who truly enjoy living on the edge." },
    ESFP: { name: "The Entertainer", description: "Spontaneous, energetic, and enthusiastic people – life is never boring around them." }
  };

  const handleAnswer = (selectedType) => {
    const newAnswers = { ...answers };
    newAnswers[selectedType]++;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculatePersonalityType = () => {
    const type = 
      (answers.E >= answers.I ? 'E' : 'I') +
      (answers.S >= answers.N ? 'S' : 'N') +
      (answers.T >= answers.F ? 'T' : 'F') +
      (answers.J >= answers.P ? 'J' : 'P');
    return type;
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    setShowResults(false);
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (showResults) {
    const personalityType = calculatePersonalityType();
    const typeInfo = personalityTypes[personalityType];

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            Your Results
          </h1>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-2xl text-4xl font-bold mb-4">
              {personalityType}
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{typeInfo.name}</h2>
            <p className="text-xl text-gray-600">{typeInfo.description}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {answers.E >= answers.I ? 'E' : 'I'}
              </div>
              <div className="text-sm text-gray-700 font-medium">
                {answers.E >= answers.I ? 'Extraversion' : 'Introversion'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {Math.max(answers.E, answers.I)} / 8
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl text-center border border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {answers.S >= answers.N ? 'S' : 'N'}
              </div>
              <div className="text-sm text-gray-700 font-medium">
                {answers.S >= answers.N ? 'Sensing' : 'Intuition'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {Math.max(answers.S, answers.N)} / 8
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {answers.T >= answers.F ? 'T' : 'F'}
              </div>
              <div className="text-sm text-gray-700 font-medium">
                {answers.T >= answers.F ? 'Thinking' : 'Feeling'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {Math.max(answers.T, answers.F)} / 8
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center border border-orange-200">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {answers.J >= answers.P ? 'J' : 'P'}
              </div>
              <div className="text-sm text-gray-700 font-medium">
                {answers.J >= answers.P ? 'Judging' : 'Perceiving'}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {Math.max(answers.J, answers.P)} / 8
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={resetTest}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Take Test Again
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">About the Myers-Briggs Type Indicator</h3>
          <p className="text-gray-700 mb-4">
            The Myers-Briggs Type Indicator (MBTI) is a personality assessment that categorizes individuals into 16 distinct 
            personality types based on four dichotomies:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Extraversion (E) vs. Introversion (I):</strong> How you gain energy</li>
            <li><strong>Sensing (S) vs. Intuition (N):</strong> How you take in information</li>
            <li><strong>Thinking (T) vs. Feeling (F):</strong> How you make decisions</li>
            <li><strong>Judging (J) vs. Perceiving (P):</strong> How you structure your life</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Understanding All 16 Personality Types
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Analysts */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200">
              <h4 className="text-xl font-bold text-purple-700 mb-3">INTJ - The Architect</h4>
              <p className="text-gray-700 text-sm mb-2">Strategic, logical, and independent thinkers who see the world as a chessboard.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Approach challenges with strategic planning and long-term vision. <strong>With people:</strong> Value competence and intellectual depth, preferring meaningful conversations over small talk.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border-2 border-blue-200">
              <h4 className="text-xl font-bold text-blue-700 mb-3">INTP - The Logician</h4>
              <p className="text-gray-700 text-sm mb-2">Innovative inventors and philosophers who love exploring theoretical concepts.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Question everything and seek to understand underlying principles. <strong>With people:</strong> Share ideas enthusiastically but may struggle with emotional expression.</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200">
              <h4 className="text-xl font-bold text-indigo-700 mb-3">ENTJ - The Commander</h4>
              <p className="text-gray-700 text-sm mb-2">Bold leaders who excel at organizing people and resources toward goals.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Take charge and drive toward efficiency and results. <strong>With people:</strong> Direct and confident, valuing competence and expecting high performance.</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 border-2 border-cyan-200">
              <h4 className="text-xl font-bold text-cyan-700 mb-3">ENTP - The Debater</h4>
              <p className="text-gray-700 text-sm mb-2">Quick-witted innovators who love intellectual challenges and debates.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Challenge conventions and explore multiple possibilities. <strong>With people:</strong> Engaging and charismatic, enjoying spirited discussions and mental sparring.</p>
            </div>

            {/* Diplomats */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <h4 className="text-xl font-bold text-green-700 mb-3">INFJ - The Advocate</h4>
              <p className="text-gray-700 text-sm mb-2">Idealistic visionaries dedicated to helping others and making the world better.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Pursue meaningful causes with determination and insight. <strong>With people:</strong> Deeply empathetic and understanding, forming authentic connections.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-6 border-2 border-teal-200">
              <h4 className="text-xl font-bold text-teal-700 mb-3">INFP - The Mediator</h4>
              <p className="text-gray-700 text-sm mb-2">Compassionate idealists guided by their values and creativity.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Seek authenticity and align actions with core values. <strong>With people:</strong> Gentle and accepting, offering deep understanding and support.</p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-2 border-emerald-200">
              <h4 className="text-xl font-bold text-emerald-700 mb-3">ENFJ - The Protagonist</h4>
              <p className="text-gray-700 text-sm mb-2">Charismatic leaders who inspire and motivate others to reach their potential.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Lead with vision and bring people together for common goals. <strong>With people:</strong> Warm and encouraging, naturally attuned to others' emotions and needs.</p>
            </div>

            <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-xl p-6 border-2 border-lime-200">
              <h4 className="text-xl font-bold text-lime-700 mb-3">ENFP - The Campaigner</h4>
              <p className="text-gray-700 text-sm mb-2">Enthusiastic free spirits who see life as full of possibilities.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Explore ideas with creativity and spontaneity. <strong>With people:</strong> Energetic and optimistic, easily connecting and inspiring others.</p>
            </div>

            {/* Sentinels */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-200">
              <h4 className="text-xl font-bold text-amber-700 mb-3">ISTJ - The Logistician</h4>
              <p className="text-gray-700 text-sm mb-2">Practical and responsible individuals who value order and reliability.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Follow established procedures and honor commitments. <strong>With people:</strong> Dependable and honest, preferring clear expectations and traditions.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200">
              <h4 className="text-xl font-bold text-orange-700 mb-3">ISFJ - The Defender</h4>
              <p className="text-gray-700 text-sm mb-2">Dedicated protectors who care deeply about others' wellbeing.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Work diligently behind the scenes to maintain stability. <strong>With people:</strong> Warm and considerate, remembering details and providing practical help.</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border-2 border-yellow-200">
              <h4 className="text-xl font-bold text-yellow-700 mb-3">ESTJ - The Executive</h4>
              <p className="text-gray-700 text-sm mb-2">Organized administrators who excel at managing tasks and people.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Create order through systems and clear rules. <strong>With people:</strong> Direct and decisive, expecting accountability and results.</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
              <h4 className="text-xl font-bold text-red-700 mb-3">ESFJ - The Consul</h4>
              <p className="text-gray-700 text-sm mb-2">Caring helpers who thrive on bringing people together and fostering harmony.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Build community through cooperation and tradition. <strong>With people:</strong> Sociable and attentive, going out of their way to help others feel included.</p>
            </div>

            {/* Explorers */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-xl p-6 border-2 border-slate-200">
              <h4 className="text-xl font-bold text-slate-700 mb-3">ISTP - The Virtuoso</h4>
              <p className="text-gray-700 text-sm mb-2">Bold experimenters who excel at understanding how things work.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Approach challenges hands-on with practical problem-solving. <strong>With people:</strong> Reserved but friendly, sharing expertise when needed.</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border-2 border-pink-200">
              <h4 className="text-xl font-bold text-pink-700 mb-3">ISFP - The Adventurer</h4>
              <p className="text-gray-700 text-sm mb-2">Flexible artists who live in the moment and express themselves creatively.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Seek beauty and new experiences with openness. <strong>With people:</strong> Gentle and sensitive, preferring harmony and personal expression.</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border-2 border-gray-300">
              <h4 className="text-xl font-bold text-gray-700 mb-3">ESTP - The Entrepreneur</h4>
              <p className="text-gray-700 text-sm mb-2">Energetic risk-takers who thrive in dynamic, action-oriented environments.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Dive into action and adapt quickly to changing situations. <strong>With people:</strong> Bold and direct, enjoying excitement and social engagement.</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 border-2 border-rose-200">
              <h4 className="text-xl font-bold text-rose-700 mb-3">ESFP - The Entertainer</h4>
              <p className="text-gray-700 text-sm mb-2">Spontaneous performers who bring joy and excitement wherever they go.</p>
              <p className="text-gray-600 text-sm"><strong>With the world:</strong> Embrace life's pleasures with enthusiasm and spontaneity. <strong>With people:</strong> Outgoing and fun-loving, naturally drawing others into the moment.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
          Myers-Briggs Personality Test
        </h1>
        <p className="text-gray-600 text-lg">Discover your personality type in 32 questions</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-semibold text-gray-700">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm font-semibold text-purple-600">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-500 ease-out"
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
            className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="text-4xl font-bold text-blue-600 mb-3 group-hover:scale-110 transition-transform">A</div>
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

export default MyersBriggs;
