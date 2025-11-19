const Links = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent mb-4">Useful Links</h1>
        <p className="text-gray-600 text-lg">Quick access to my professional profiles and projects</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Professional</h2>
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

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-6">Personal Projects</h2>
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
