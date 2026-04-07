import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-1/3">
            <img 
              src="/images/clouds.jpeg" 
              alt="Michael Wolfgang" 
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/275x275?text=Michael+Wolfgang';
              }}
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-slate-800 border-l-4 border-blue-600 pl-3">Software Engineer and Architect</h2>
            <p className="text-slate-600 mb-4">
              I spend my days having fun building enterprise applications and APIs using cloud technologies at{' '}
              <a 
                href="https://www.carmax.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                CarMax
              </a>
              . Today's cloud technologies make it really fun & easy to apply my experience and deliver quick value 
              to customers and clients. Part of the fun is that there's always room to continue improving and learning 
              (like life).
            </p>
            <div className="space-y-2 text-slate-600">
              <div>
                Helpful resources about Azure, .NET, software:{' '}
                <Link to="/developer/resources" className="text-blue-600 hover:text-blue-800 hover:underline">Resources</Link>
              </div>
              <div>
                I enjoy keeping current with podcasts and videos:{' '}
                <Link to="/developer/podcasts" className="text-blue-600 hover:text-blue-800 hover:underline">Favorites</Link>
              </div>
              <div>
                Contact me on:{' '}
                <a 
                  href="https://www.linkedin.com/in/michael-wolfgang/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Finance Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-1/3">
            <img 
              src="/images/coins_investing.png" 
              alt="Investing" 
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/275x275?text=Investing';
              }}
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-slate-800 border-l-4 border-blue-600 pl-3">Personal Finance and Investing</h2>
            <p className="text-slate-600 mb-4">
              Personal finance is an important aspect of any adult's life, especially for those of us that have kids 
              and families depending on us. The basics are really pretty simple, but are not very well understood by 
              the vast population. We spend more time researching our next TV than we do our investment options. 
              I've started to put some of my knowledge out on the web on my own website.
            </p>
            <h3 className="text-base font-semibold mb-2 text-slate-700">
              3 major keys to individual investing success:
            </h3>
            <ol className="list-decimal list-inside space-y-1 mb-4 text-slate-600">
              <li>Minimize Costs (Taxes and Fees)</li>
              <li>Minimize Risk Through Diversification</li>
              <li>Eliminate Emotion by Automating Investing and Rebalancing</li>
            </ol>
            <div className="text-slate-600">
              Check out my little investing site running in the cloud:{' '}
              <a 
                href="https://investing.prudentheed.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                https://prudentheed.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Runner Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-1/3">
            <img 
              src="/images/running_silhouette.png" 
              alt="Running" 
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/275x275?text=Runner';
              }}
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-slate-800 border-l-4 border-blue-600 pl-3">Runner</h2>
            <p className="text-slate-600 mb-4">
              I'm an avid runner. I'm proud of my running accomplishments. I have:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4 text-slate-600">
              <li>Run 20 marathons and over 17 half marathons.</li>
              <li>Met my beautiful wife through running.</li>
              <li>Run 50 miles along the Potomac with my wife.</li>
              <li>Run a marathon with Mickey Mouse in Disney.</li>
              <li>Run a 3:12 marathon to qualify for the Boston marathon (then run the Boston Marathon).</li>
              <li>Run plenty of 5Ks while pushing my kids in their stroller.</li>
              <li>Run a marathon to the top of Pikes Peak during a thunder storm.</li>
              <li>Run in the top 100 finishers of the local 42,000+ Ukrops Monument 10K</li>
            </ul>
            <div className="text-slate-600">
              Check out all of my races on{' '}
              <a 
                href="https://www.athlinks.com/athletes/109779785" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Athlinks
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Student / Learner Section */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-200 hover:shadow-md transition-shadow duration-200">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-1/3">
            <img 
              src="/images/knowledge.jpg" 
              alt="Learning" 
              className="w-full h-auto rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/275x275?text=Learning';
              }}
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-slate-800 border-l-4 border-blue-600 pl-3">Student / Learner</h2>
            <p className="text-slate-600 mb-4">
              I'm a big believer in constant improvement. I like listening to podcasts and keep current with investing 
              and software. Learning is a habit that pays exponential dividends over time. The older I get, the less 
              free time I seem to have. I'm constantly curating my sources of podcasts and articles to get the most 
              out of my time.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>
                Here are the <Link to="/booklist" className="text-blue-600 hover:text-blue-800 hover:underline">Books</Link> that 
                I've been reading or listening to as audiobooks.
              </li>
              <li>
                Here are all of my favorite{' '}
                <Link to="/developer/podcasts" className="text-blue-600 hover:text-blue-800 hover:underline">Podcasts</Link>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
