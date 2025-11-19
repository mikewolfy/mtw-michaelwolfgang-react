const Resources = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mb-4">Developer Resources</h1>
        <p className="text-gray-600 text-lg">Essential learning resources for Azure, .NET, and software engineering</p>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">Azure Resources</h2>
        <ul className="space-y-3 text-gray-700">
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

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">.NET Resources</h2>
        <ul className="space-y-2 text-gray-700">
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

      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">Software Engineering</h2>
        <ul className="space-y-2 text-gray-700">
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
