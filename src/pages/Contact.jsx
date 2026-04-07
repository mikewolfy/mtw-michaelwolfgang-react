const Contact = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Contact</h1>
        <p className="text-slate-500 text-lg">Let's connect and collaborate</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 max-w-2xl mx-auto">
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-4">Connect with me</h3>
            <p className="text-slate-600 mb-4">
              Feel free to reach out to me through any of the following channels:
            </p>
          </div>

          <div className="space-y-6">
              <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-500">
              <h4 className="font-bold text-slate-800 mb-1">LinkedIn</h4>
              <a 
                href="https://www.linkedin.com/in/michael-wolfgang/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                linkedin.com/in/michael-wolfgang
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800">GitHub</h4>
              <a 
                href="https://github.com/mikewolfy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                github.com/mikewolfy
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-slate-800">Running Profile</h4>
              <a 
                href="https://www.athlinks.com/athletes/109779785" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                Athlinks Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
