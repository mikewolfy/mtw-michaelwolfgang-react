import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const navSections = [
  {
    items: [
      { to: '/', label: 'Home', end: true },
      { to: '/about', label: 'About' },
    ],
  },
  {
    title: 'Developer',
    items: [
      { to: '/developer', label: 'Overview', end: true },
      { to: '/developer/interview-questions', label: 'Interview Questions' },
      { to: '/developer/podcasts', label: 'Podcasts' },
      { to: '/developer/resources', label: 'Resources' },
      { to: '/developer/jwt-decoder', label: 'JWT Decoder' },
      { to: '/developer/rsa-validator', label: 'RSA Validator' },
    ],
  },
  {
    title: 'Technical Docs',
    items: [
      { to: '/tech-docs/scopes-and-claims', label: 'Scopes & Claims' },
    ],
  },
  {
    title: 'Family',
    items: [
      { to: '/reed', label: 'Reed' },
      { to: '/emma', label: 'Emma' },
      { to: '/mom-dad', label: 'Mom & Dad' },
    ],
  },
  {
    title: 'Quizzes & Timers',
    items: [
      { to: '/myers-briggs', label: 'Myers-Briggs Personality' },
      { to: '/love-languages', label: 'Love Languages' },
      { to: '/life-timers', label: 'Life Timers' },
    ],
  },
  {
    items: [
      { to: '/booklist', label: 'Book List' },
      { to: '/contact', label: 'Contact' },
      { to: '/links', label: 'Links' },
    ],
  },
];

const CollapsibleSection = ({ title, items, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-400 hover:text-slate-200 transition-colors duration-150"
      >
        <span>{title}</span>
        <span className="text-slate-500 text-xs">{isOpen ? '▾' : '▸'}</span>
      </button>
      {isOpen && (
        <ul>
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `block px-6 py-2 text-sm transition-colors duration-150 rounded mx-2 ${
                    isActive
                      ? 'bg-blue-600 text-white font-medium'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:relative lg:translate-x-0 lg:flex-shrink-0
        `}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-slate-700 flex-shrink-0">
          <NavLink
            to="/"
            onClick={onClose}
            className="text-slate-100 font-semibold text-sm leading-tight hover:text-blue-400 transition-colors"
          >
            Michael Wolfgang
          </NavLink>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white lg:hidden transition-colors"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="py-4 overflow-y-auto flex-1">
          {navSections.map((section, idx) =>
            section.title ? (
              <CollapsibleSection
                key={idx}
                title={section.title}
                items={section.items}
                onNavigate={onClose}
              />
            ) : (
              <ul key={idx} className="mb-1">
                {section.items.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm transition-colors duration-150 rounded mx-2 ${
                          isActive
                            ? 'bg-blue-600 text-white font-medium'
                            : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )
          )}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
