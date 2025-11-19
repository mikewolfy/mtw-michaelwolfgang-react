import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { 
  getCSharpQuestions, 
  getAzureQuestions, 
  getProblemSolvingQuestions,
  InterviewQuestionCategories 
} from '../../data/interviewQuestions';

const InterviewQuestions = () => {
  const [searchParams] = useSearchParams();
  
  const category = searchParams.get('category') || InterviewQuestionCategories.CSharp;

  const questions = useMemo(() => {
    if (category === InterviewQuestionCategories.Azure) {
      return getAzureQuestions();
    } else if (category === InterviewQuestionCategories.ProblemSolving) {
      return getProblemSolvingQuestions();
    } else {
      return getCSharpQuestions();
    }
  }, [category]);

  const handleCategoryChange = (newCategory) => {
    window.location.href = `/developer/interview-questions?category=${newCategory}`;
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-4">Interview Questions</h1>
        <p className="text-gray-600 text-lg">Practice common interview questions across different categories</p>
      </div>

      {/* Category Selector */}
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        <label htmlFor="category" className="block text-sm font-bold text-gray-700 mb-3">
          Select Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="block w-full md:w-64 px-4 py-3 border-2 border-indigo-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-gradient-to-r from-white to-indigo-50 font-medium"
        >
          <option value={InterviewQuestionCategories.CSharp}>C# Questions</option>
          <option value={InterviewQuestionCategories.Azure}>Azure Questions</option>
          <option value={InterviewQuestionCategories.ProblemSolving}>Problem Solving Questions</option>
        </select>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-start">
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                {index + 1}
              </span>
              <span className="flex-1">{q.question}</span>
            </h3>
            {q.answer && (
              <p className="text-gray-700 pl-11 p-4 border-l-4 border-indigo-400 bg-indigo-50 rounded-r-lg">
                {q.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {questions.length === 0 && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-yellow-700">No questions available for this category yet.</p>
        </div>
      )}
    </div>
  );
};

export default InterviewQuestions;
