const Header = ({ onMenuToggle }) => {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-700 flex-shrink-0">
      <div className="px-6 py-4 flex items-center gap-4">
        {/* Mobile hamburger */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-1 rounded text-slate-400 hover:text-white transition-colors"
          aria-label="Open navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 rounded-full bg-blue-500" />
          <h1 className="text-lg font-semibold tracking-wide text-white">
            Michael Wolfgang
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
