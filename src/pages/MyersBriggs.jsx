import { useState, useEffect } from 'react';

const MyersBriggs = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    E: 0, I: 0, // Extraversion vs Introversion
    S: 0, N: 0, // Sensing vs Intuition
    T: 0, F: 0, // Thinking vs Feeling
    J: 0, P: 0  // Judging vs Perceiving
  });
  const [showResults, setShowResults] = useState(false);
  const [previousResults, setPreviousResults] = useState(null);
  const [showPreviousOption, setShowPreviousOption] = useState(false);

  // Check for previous results on component mount
  useEffect(() => {
    const savedResults = localStorage.getItem('myersBriggsResults');
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
        answers,
        personalityType: calculatePersonalityType(),
        dateTaken: new Date().toISOString()
      };
      localStorage.setItem('myersBriggsResults', JSON.stringify(resultsData));
    }
  }, [showResults]);

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
    INTJ: { 
      name: "The Architect", 
      description: "Imaginative and strategic thinkers with a plan for everything.",
      howTheyOperate: "INTJs operate with systematic precision, analyzing problems deeply and developing long-term strategic solutions. They value competence and efficiency above all else.",
      strengths: "Strategic planning, independent thinking, problem-solving, logical analysis, seeing the big picture, innovative systems design",
      idealCareers: "Software Architect, Data Scientist, Strategic Consultant, Research Scientist, Systems Engineer, Investment Strategist, Professor"
    },
    INTP: { 
      name: "The Logician", 
      description: "Innovative inventors with an unquenchable thirst for knowledge.",
      howTheyOperate: "INTPs operate by questioning everything and seeking to understand underlying principles. They thrive on theoretical exploration and building mental models of how things work.",
      strengths: "Logical analysis, theoretical thinking, pattern recognition, innovative problem-solving, technical expertise, objective reasoning",
      idealCareers: "Software Developer, Research Scientist, Mathematician, Data Analyst, Philosopher, Physicist, Technical Writer"
    },
    ENTJ: { 
      name: "The Commander", 
      description: "Bold, imaginative, and strong-willed leaders who find a way or make one.",
      howTheyOperate: "ENTJs operate by taking charge and organizing resources toward clear goals. They naturally see inefficiencies and implement systems to optimize performance.",
      strengths: "Leadership, strategic planning, decision-making, organizing people and resources, driving results, public speaking",
      idealCareers: "CEO, Business Executive, Management Consultant, Corporate Lawyer, Entrepreneur, Operations Director, Judge"
    },
    ENTP: { 
      name: "The Debater", 
      description: "Smart and curious thinkers who cannot resist an intellectual challenge.",
      howTheyOperate: "ENTPs operate by exploring multiple possibilities and challenging conventional thinking. They love debating ideas and finding innovative approaches to problems.",
      strengths: "Innovation, brainstorming, strategic thinking, persuasion, adaptability, quick thinking, entrepreneurship",
      idealCareers: "Entrepreneur, Marketing Strategist, Product Manager, Attorney, Innovation Consultant, Venture Capitalist, Inventor"
    },
    INFJ: { 
      name: "The Advocate", 
      description: "Quiet and mystical, yet very inspiring and tireless idealists.",
      howTheyOperate: "INFJs operate with a deep sense of purpose and vision for helping others. They combine insight into human nature with a drive to create meaningful change.",
      strengths: "Insight into people, counseling, writing, visionary thinking, empathy, dedication to causes, creative problem-solving",
      idealCareers: "Counselor, Psychologist, Writer, Human Resources Director, Social Worker, Life Coach, Nonprofit Director"
    },
    INFP: { 
      name: "The Mediator", 
      description: "Poetic, kind, and altruistic people, always eager to help a good cause.",
      howTheyOperate: "INFPs operate guided by their core values and seek authenticity in everything they do. They are deeply empathetic and motivated by making a positive impact.",
      strengths: "Creative writing, empathy, mediation, artistic expression, understanding values, idealistic thinking, one-on-one connections",
      idealCareers: "Writer, Therapist, Artist, Social Worker, Teacher, Graphic Designer, Musician, Nonprofit Worker"
    },
    ENFJ: { 
      name: "The Protagonist", 
      description: "Charismatic and inspiring leaders, able to mesmerize their listeners.",
      howTheyOperate: "ENFJs operate by inspiring and motivating others toward shared goals. They naturally understand people's needs and help them reach their potential.",
      strengths: "Leadership, motivating others, communication, teaching, empathy, organizational skills, public speaking",
      idealCareers: "Teacher, HR Manager, Motivational Speaker, Counselor, Sales Manager, Event Coordinator, Politician"
    },
    ENFP: { 
      name: "The Campaigner", 
      description: "Enthusiastic, creative, and sociable free spirits who can always find a reason to smile.",
      howTheyOperate: "ENFPs operate with boundless energy and enthusiasm, exploring possibilities and connecting with people. They thrive on variety and creative expression.",
      strengths: "Creativity, communication, brainstorming, energizing others, adaptability, building relationships, innovation",
      idealCareers: "Marketing Manager, Journalist, Entrepreneur, Teacher, Social Media Manager, Actor, Public Relations Specialist"
    },
    ISTJ: { 
      name: "The Logistician", 
      description: "Practical and fact-minded individuals whose reliability cannot be doubted.",
      howTheyOperate: "ISTJs operate with discipline and adherence to established procedures. They value tradition, responsibility, and completing tasks thoroughly and accurately.",
      strengths: "Organization, reliability, attention to detail, following procedures, practical problem-solving, integrity, consistency",
      idealCareers: "Accountant, Project Manager, Auditor, Military Officer, Database Administrator, Compliance Officer, Financial Analyst"
    },
    ISFJ: { 
      name: "The Defender", 
      description: "Very dedicated and warm protectors, always ready to defend their loved ones.",
      howTheyOperate: "ISFJs operate with quiet dedication, caring for others and maintaining harmony. They work behind the scenes to ensure everyone's needs are met.",
      strengths: "Caregiving, attention to detail, loyalty, practical help, remembering personal details, reliability, patience",
      idealCareers: "Nurse, Elementary Teacher, Office Manager, Librarian, Social Worker, Interior Designer, Administrator"
    },
    ESTJ: { 
      name: "The Executive", 
      description: "Excellent administrators, unsurpassed at managing things or people.",
      howTheyOperate: "ESTJs operate by creating order and structure through clear rules and systems. They excel at organizing people and resources to achieve concrete results.",
      strengths: "Management, organization, decision-making, implementing systems, direct communication, project coordination, efficiency",
      idealCareers: "Operations Manager, Business Administrator, Military Officer, Police Officer, Judge, Financial Officer, Real Estate Agent"
    },
    ESFJ: { 
      name: "The Consul", 
      description: "Extraordinarily caring, social, and popular people, always eager to help.",
      howTheyOperate: "ESFJs operate by creating harmony and caring for others' practical needs. They build community through cooperation and bring people together.",
      strengths: "Building relationships, organizing events, caregiving, communication, creating harmony, attention to others' needs, hospitality",
      idealCareers: "Event Planner, Elementary Teacher, Nurse, Office Manager, Social Worker, HR Specialist, Customer Service Manager"
    },
    ISTP: { 
      name: "The Virtuoso", 
      description: "Bold and practical experimenters, masters of all kinds of tools.",
      howTheyOperate: "ISTPs operate through hands-on problem-solving and logical troubleshooting. They stay calm under pressure and excel at understanding how things work.",
      strengths: "Mechanical skills, troubleshooting, practical problem-solving, crisis management, technical expertise, adaptability",
      idealCareers: "Mechanic, Engineer, Pilot, Computer Technician, Carpenter, Detective, Paramedic, Athletic Trainer"
    },
    ISFP: { 
      name: "The Adventurer", 
      description: "Flexible and charming artists, always ready to explore and experience something new.",
      howTheyOperate: "ISFPs operate by living in the moment and expressing themselves creatively. They value authenticity and seek beauty and harmony in their environment.",
      strengths: "Artistic expression, adaptability, hands-on work, aesthetic sense, kindness, staying present, creativity",
      idealCareers: "Artist, Designer, Photographer, Chef, Veterinarian, Physical Therapist, Fashion Designer, Musician"
    },
    ESTP: { 
      name: "The Entrepreneur", 
      description: "Smart, energetic, and perceptive people who truly enjoy living on the edge.",
      howTheyOperate: "ESTPs operate by diving into action and adapting quickly to changing situations. They thrive in dynamic environments and excel at thinking on their feet.",
      strengths: "Crisis management, negotiation, sales, hands-on problem-solving, adaptability, persuasion, risk-taking",
      idealCareers: "Entrepreneur, Sales Manager, Paramedic, Marketing Director, Real Estate Developer, Stock Trader, Athletic Coach"
    },
    ESFP: { 
      name: "The Entertainer", 
      description: "Spontaneous, energetic, and enthusiastic people – life is never boring around them.",
      howTheyOperate: "ESFPs operate by embracing life's pleasures and bringing joy to others. They live in the moment and create fun, engaging experiences for everyone around them.",
      strengths: "Entertainment, communication, adaptability, creating excitement, hands-on learning, building rapport, team building",
      idealCareers: "Actor, Event Planner, Tour Guide, Sales Representative, Teacher, Social Media Influencer, Fitness Instructor"
    }
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
    setShowPreviousOption(false);
  };

  const loadPreviousResults = () => {
    if (previousResults) {
      setAnswers(previousResults.answers);
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

    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">
            Myers-Briggs Personality Test
          </h1>
          <p className="text-gray-600 text-lg">Welcome back!</p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl text-xl font-bold mb-4">
              Previous Result Found
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              You took this test on {formattedDate}
            </h2>
            <p className="text-xl text-gray-600">
              Your result was: <span className="font-bold text-purple-600">{previousResults.personalityType}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={loadPreviousResults}
              className="group bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 p-8 rounded-2xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">View Previous Results</h3>
              <p className="text-gray-600">See your full personality breakdown from {formattedDate}</p>
            </button>

            <button
              onClick={startNewTest}
              className="group bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 p-8 rounded-2xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
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

          <div className="mb-8 space-y-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
              <h3 className="text-lg font-bold text-indigo-800 mb-3">How You Operate</h3>
              <p className="text-gray-700">{typeInfo.howTheyOperate}</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-lg font-bold text-green-800 mb-3">Your Strengths</h3>
              <p className="text-gray-700">{typeInfo.strengths}</p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Ideal Career Paths</h3>
              <p className="text-gray-700">{typeInfo.idealCareers}</p>
            </div>
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
              All 16 Personality Types - Complete Guide
            </span>
          </h3>

          <div className="space-y-6">
            {Object.entries(personalityTypes).map(([type, info]) => (
              <div key={type} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-purple-300 transition-colors duration-300">
                <div className="mb-4">
                  <h4 className="text-2xl font-bold text-purple-700 mb-2 flex items-center gap-3">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-lg text-xl">
                      {type}
                    </span>
                    {info.name}
                  </h4>
                  <p className="text-gray-700 text-lg italic">{info.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4 border border-indigo-200">
                    <h5 className="text-base font-bold text-indigo-800 mb-2">How They Operate</h5>
                    <p className="text-gray-700 text-sm">{info.howTheyOperate}</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                    <h5 className="text-base font-bold text-green-800 mb-2">Key Strengths</h5>
                    <p className="text-gray-700 text-sm">{info.strengths}</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                    <h5 className="text-base font-bold text-blue-800 mb-2">Ideal Career Paths</h5>
                    <p className="text-gray-700 text-sm">{info.idealCareers}</p>
                  </div>
                </div>
              </div>
            ))}
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
