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
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Interview Questions</h1>
        <p className="text-slate-500 text-lg">Practice common interview questions across different categories</p>
      </div>

      {/* Category Selector */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
        <label htmlFor="category" className="block text-sm font-bold text-slate-700 mb-3">
          Select Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="block w-full md:w-64 px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-medium"
        >
          <option value={InterviewQuestionCategories.CSharp}>C# Questions</option>
          <option value={InterviewQuestionCategories.Azure}>Azure Questions</option>
          <option value={InterviewQuestionCategories.ProblemSolving}>Problem Solving Questions</option>
        </select>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((q, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-start">
              <span className="inline-block bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0 text-sm">
                {index + 1}
              </span>
              <span className="flex-1">{q.question}</span>
            </h3>
            {q.answer && (
              <p className="text-slate-700 pl-11 p-4 border-l-4 border-blue-400 bg-blue-50 rounded-r-lg">
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
