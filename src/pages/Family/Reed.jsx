const Reed = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-slate-800 mb-6">Reed Wolfgang</h1>
      
      <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200">
        <div className="flex flex-col items-center">
          <img 
            src="/images/reed.jpg" 
            alt="Reed Wolfgang"
            className="w-64 h-64 object-cover rounded-full mb-4"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/256x256?text=Reed';
            }}
          />
          <p className="text-slate-700 text-center max-w-2xl">
            Welcome to Reed's page!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reed;
