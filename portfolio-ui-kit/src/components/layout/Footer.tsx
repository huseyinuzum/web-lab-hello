import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/60 dark:bg-slate-950/70 dark:border-slate-800 py-8">
      <div className="container mx-auto flex flex-col items-center gap-3 px-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Hüseyin Üzüm. Tüm hakları saklıdır.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="/privacy-policy" className="text-primary hover:underline">
            Gizlilik Politikası
          </a>
          <span className="text-slate-300">•</span>
          <a href="/terms-of-service" className="text-primary hover:underline">
            Kullanım Şartları
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;