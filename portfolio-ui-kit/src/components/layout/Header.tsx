import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinkItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/70 ${
        isActive
          ? 'text-primary dark:text-primary/80'
          : 'text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary/80'
      }`}
    >
      {children}
    </Link>
  );
};

const Header: React.FC = () => {
  const toggleDarkMode = () => {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {}
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-slate-950/60 backdrop-blur shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow">
            W
          </div>
          <div>
            <Link to="/" className="text-lg font-semibold text-slate-900 dark:text-white">
              Web Lab
            </Link>
            <p className="text-xs text-gray-500 dark:text-gray-400">Portföy & UI Kit</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <LinkItem to="/">Hakkımda</LinkItem>
          <LinkItem to="/">Projeler</LinkItem>
          <LinkItem to="/">İletişim</LinkItem>
          <LinkItem to="/ui-kit">UI Kit</LinkItem>

          <button
            onClick={toggleDarkMode}
            aria-label="Tema değiştir"
            className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/70"
          >
            <span className="sr-only">Tema değiştir</span>
            <span aria-hidden="true">🌙</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;