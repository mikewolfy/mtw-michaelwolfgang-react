import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white shadow-xl">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex flex-wrap justify-between items-center">
          <Link to="/" className="text-3xl font-extrabold hover:scale-105 transform transition-all duration-300 tracking-tight">
            Michael Wolfgang
          </Link>
          <ul className="flex flex-wrap gap-8 font-medium">
            <li><Link to="/" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">Home</Link></li>
            <li><Link to="/developer" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">Developer</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">Contact</Link></li>
            <li><Link to="/links" className="hover:text-yellow-300 transition-colors duration-200 border-b-2 border-transparent hover:border-yellow-300 pb-1">Links</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
