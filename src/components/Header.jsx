import { Link } from 'react-router-dom';

const Header = () => {
  // Get current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = new Date().getDay();
  
  // Define gradients for each day
  const gradients = {
    0: 'bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600', // Sunday - orange
    1: 'bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600', // Monday - current/default
    2: 'bg-gradient-to-r from-red-500 via-rose-600 to-red-700',        // Tuesday - reddish
    3: 'bg-gradient-to-r from-teal-500 via-cyan-600 to-teal-700',      // Wednesday - teal
    4: 'bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700',    // Thursday - blue
    5: 'bg-gradient-to-r from-green-500 via-emerald-600 to-green-700', // Friday - green
    6: 'bg-gradient-to-r from-pink-500 via-pink-600 to-rose-600'       // Saturday - pink
  };
  
  const gradientClass = gradients[dayOfWeek];
  
  return (
    <header className={`${gradientClass} text-white shadow-xl`}>
      <nav className="container mx-auto px-6 py-5">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="text-3xl font-extrabold hover:scale-105 transform transition-all duration-300 tracking-tight">
            Michael Wolfgang
          </Link>
          <ul className="flex flex-wrap gap-8 font-medium">
            <li><Link to="/" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">Home</Link></li>
            <li><Link to="/developer" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">Developer</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">About</Link></li>
            <li><Link to="/myers-briggs" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">Personality</Link></li>
            <li><Link to="/love-languages" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">Love Languages</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">Contact</Link></li>
            <li><Link to="/links" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">Links</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
