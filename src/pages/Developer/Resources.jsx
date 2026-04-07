const Resources = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Developer Resources</h1>
        <p className="text-slate-500 text-lg">Essential learning resources for Azure, .NET, and software engineering</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-6">Azure Resources</h2>
        <ul className="space-y-3 text-slate-700">
          <li>
            <a 
              href="https://docs.microsoft.com/en-us/azure/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-all"
            >
              Microsoft Azure Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://azure.microsoft.com/en-us/blog/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Azure Blog
            </a>
          </li>
          <li>
            <a 
              href="https://learn.microsoft.com/en-us/training/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Microsoft Learn
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-6">.NET Resources</h2>
        <ul className="space-y-2 text-slate-700">
          <li>
            <a 
              href="https://docs.microsoft.com/en-us/dotnet/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              .NET Documentation
            </a>
          </li>
          <li>
            <a 
              href="https://dotnet.microsoft.com/en-us/learn" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Learn .NET
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/dotnet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              .NET on GitHub
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-6">Software Engineering</h2>
        <ul className="space-y-2 text-slate-700">
          <li>
            <a 
              href="https://martinfowler.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Martin Fowler's Blog
            </a>
          </li>
          <li>
            <a 
              href="https://stackoverflow.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Stack Overflow
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
