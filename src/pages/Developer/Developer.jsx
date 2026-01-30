import { Link } from 'react-router-dom';

const Developer = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">Developer Resources</h1>
        <p className="text-gray-600 text-lg">Explore my technical skills, certifications, and favorite learning resources</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          to="/developer/certifications" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-indigo-600 mb-2 group-hover:text-purple-600 transition-colors">Certifications</h3>
          <p className="text-gray-600">View my professional certifications</p>
        </Link>

        <Link 
          to="/developer/languages" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-purple-600 mb-2 group-hover:text-pink-600 transition-colors">Languages</h3>
          <p className="text-gray-600">Programming languages I work with</p>
        </Link>

        <Link 
          to="/developer/devops" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-2 group-hover:text-indigo-600 transition-colors">DevOps</h3>
          <p className="text-gray-600">DevOps practices and tools</p>
        </Link>

        <Link 
          to="/developer/resume" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-green-600 mb-2 group-hover:text-emerald-600 transition-colors">Resume</h3>
          <p className="text-gray-600">View my professional experience</p>
        </Link>

        <Link 
          to="/developer/podcasts" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-orange-600 mb-2 group-hover:text-red-600 transition-colors">Podcasts</h3>
          <p className="text-gray-600">My favorite tech podcasts</p>
        </Link>

        <Link 
          to="/developer/resources" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-teal-600 mb-2 group-hover:text-cyan-600 transition-colors">Resources</h3>
          <p className="text-gray-600">Helpful learning resources</p>
        </Link>

        <Link 
          to="/developer/daily-reads" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-pink-600 mb-2 group-hover:text-rose-600 transition-colors">Daily Reads</h3>
          <p className="text-gray-600">My daily reading list</p>
        </Link>

        <Link 
          to="/developer/patterns" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-violet-600 mb-2 group-hover:text-purple-600 transition-colors">Patterns</h3>
          <p className="text-gray-600">Software design patterns</p>
        </Link>

        <Link 
          to="/developer/interview-questions" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-amber-600 mb-2 group-hover:text-yellow-600 transition-colors">Interview Questions</h3>
          <p className="text-gray-600">Common interview questions</p>
        </Link>

        <Link 
          to="/developer/jwt-decoder" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-cyan-600 mb-2 group-hover:text-blue-600 transition-colors">JWT Decoder</h3>
          <p className="text-gray-600">Decode and inspect JWT tokens</p>
        </Link>

        <Link 
          to="/developer/rsa-validator" 
          className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
        >
          <h3 className="text-xl font-bold text-emerald-600 mb-2 group-hover:text-green-600 transition-colors">RSA Signature Validator</h3>
          <p className="text-gray-600">Verify RSA-signed strings</p>
        </Link>
      </div>
    </div>
  );
};

export default Developer;
