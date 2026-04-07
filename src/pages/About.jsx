const About = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">About Me</h1>
        <p className="text-slate-500 text-lg">Software Engineer, Runner, Investor, and Lifelong Learner</p>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-3 mb-6">Michael Wolfgang</h2>
        <div className="space-y-4 text-slate-700">
          <p>
            I'm a Software Engineer and Architect with a passion for building enterprise applications 
            and APIs using modern cloud technologies. I work at CarMax, where I apply my experience 
            to deliver value to customers and clients.
          </p>
          <p>
            Beyond my professional work, I'm a husband and father, a Tae Kwon Do black belt 
            and an avid runner. My best days are spent with my my beautiful wife and
            wonderful kids, running outdoors, and enjoying a good movie or book.
          </p>
          <p>
            I regularly listen to podcasts, read books, and stay current with the latest in software engineering, 
            cloud computing, self improvement and personal finance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
