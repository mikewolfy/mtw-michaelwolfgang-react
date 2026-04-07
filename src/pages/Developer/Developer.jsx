import { Link } from 'react-router-dom';

const Developer = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Developer Resources</h1>
        <p className="text-slate-500 text-lg">Explore my technical skills, certifications, and favorite learning resources</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          to="/developer/certifications" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Certifications</h3>
          <p className="text-slate-600">View my professional certifications</p>
        </Link>

        <Link 
          to="/developer/languages" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Languages</h3>
          <p className="text-slate-600">Programming languages I work with</p>
        </Link>

        <Link 
          to="/developer/devops" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">DevOps</h3>
          <p className="text-slate-600">DevOps practices and tools</p>
        </Link>

        <Link 
          to="/developer/resume" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Resume</h3>
          <p className="text-slate-600">View my professional experience</p>
        </Link>

        <Link 
          to="/developer/podcasts" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Podcasts</h3>
          <p className="text-slate-600">My favorite tech podcasts</p>
        </Link>

        <Link 
          to="/developer/resources" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Resources</h3>
          <p className="text-slate-600">Helpful learning resources</p>
        </Link>

        <Link 
          to="/developer/daily-reads" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Daily Reads</h3>
          <p className="text-slate-600">My daily reading list</p>
        </Link>

        <Link 
          to="/developer/patterns" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Patterns</h3>
          <p className="text-slate-600">Software design patterns</p>
        </Link>

        <Link 
          to="/developer/interview-questions" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">Interview Questions</h3>
          <p className="text-slate-600">Common interview questions</p>
        </Link>

        <Link 
          to="/developer/jwt-decoder" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">JWT Decoder</h3>
          <p className="text-slate-600">Decode and inspect JWT tokens</p>
        </Link>

        <Link 
          to="/developer/rsa-validator" 
          className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-200 border border-slate-200 group"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">RSA Signature Validator</h3>
          <p className="text-slate-600">Verify RSA-signed strings</p>
        </Link>
      </div>
    </div>
  );
};

export default Developer;
