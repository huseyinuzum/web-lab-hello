import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="flex justify-between items-center p-4">
        <a href="#main" className="sr-only">Skip to main content</a>
        <div className="text-xl font-bold">
          <Link to="/" className="text-gray-800 dark:text-white">My Portfolio</Link>
        </div>
        <ul className="flex items-center space-x-4">
          <li><Link to="/" className="text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2">About</Link></li>
          <li><Link to="/" className="text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2">Projects</Link></li>
          <li><Link to="/" className="text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2">Contact</Link></li>
          <li><Link to="/ui-kit" className="text-gray-700 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2">UI Kit</Link></li>
          <li>
            <button
              onClick={() => {
                const html = document.documentElement;
                const isDark = html.classList.toggle('dark');
                try {
                  localStorage.setItem('theme', isDark ? 'dark' : 'light');
                } catch {}
              }}
              aria-label="Toggle dark mode"
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2">
              <span className="sr-only">Toggle dark mode</span>
              🌙
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;