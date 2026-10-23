import { Link } from 'react-router-dom';

const Header = ({ onMenuToggle }) => {
  return (
    <header className="sticky top-0 z-10 h-14 bg-white border-b border-slate-200 flex-shrink-0">
      <div className="h-full px-4 sm:px-6 flex items-center gap-3">
        {/* Mobile hamburger */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-1.5 -ml-1.5 rounded-lg text-slate-500 hover:text-blue-700 hover:bg-blue-50 transition-colors"
          aria-label="Open navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link
          to="/"
          className="text-xl font-extrabold text-slate-800 hover:text-blue-600 transition-colors"
        >
          Michael Wolfgang
        </Link>
      </div>
    </header>
  );
};

export default Header;
