const Links = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Useful Links</h1>
        <p className="text-slate-500 text-lg">Quick access to my professional profiles and projects</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
          <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-6">Professional</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.linkedin.com/in/michael-wolfgang/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                LinkedIn Profile
              </a>
            </li>
            <li>
              <a 
                href="https://github.com/mikewolfy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                GitHub Profile
              </a>
            </li>
            <li>
              <a 
                href="https://www.carmax.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                CarMax
              </a>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
          <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-6">Personal Projects</h2>
          <ul className="space-y-2">
            <li>
              <a 
                href="https://investing.prudentheed.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Prudent Heed - Investing Site
              </a>
            </li>
            <li>
              <a 
                href="https://www.athlinks.com/athletes/109779785" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Running Profile (Athlinks)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Links;
