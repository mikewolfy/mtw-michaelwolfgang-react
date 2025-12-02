const About = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">About Me</h1>
        <p className="text-gray-600 text-lg">Software Engineer, Runner, Investor, and Lifelong Learner</p>
      </div>
      
      <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">Michael Wolfgang</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            I'm a Software Engineer and Architect with a passion for building enterprise applications 
            and APIs using modern cloud technologies. I work at CarMax, where I apply my experience 
            to deliver value to customers and clients.
          </p>
          <p>
            Beyond my professional work, I'm a husband and father, a Tae Kwon Do black belt,
            an avid runner with over 20 marathons completed, including 
            the Boston Marathon. I'm also enjoy learning about personal finance and investing.
          </p>
          <p>
            I regularly listen to podcasts, read books, 
            and stay current with the latest in software engineering, cloud computing, and personal finance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
