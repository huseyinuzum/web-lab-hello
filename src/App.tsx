import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';

function App() {
  const [dark, setDark] = useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="antialiased text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-900">
      {/* skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>
      {/* header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">Ahmet Yilmaz</h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="#uikit"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  UI Kit
                </a>
              </li>
            </ul>
          </nav>
          <Button variant="secondary" size="sm" onClick={() => setDark(!dark)}>
            {dark ? 'Light' : 'Dark'}
          </Button>
        </div>
      </header>

      <main id="main-content">
        {/* Hakkımda */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="https://via.placeholder.com/160"
                alt="Ahmet Yilmaz vesikalik fotografi"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Frontend geliştirici olarak modern web teknolojileriyle kullanıcı dostu
                arayüzler oluşturuyorum.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">React</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">TypeScript</li>
                <li className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm">Tailwind</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="elevated" title="E-Ticaret" image="https://via.placeholder.com/400x200" imageAlt="E-Ticaret anasayfa gorunumu">
                React ve Node.js ile tam kapsamlı uygulama.
              </Card>
              {/* Diğer kartları ekleyebilirsiniz */}
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4">
              <Input id="name" label="Ad Soyad" required />
              <Input id="email" label="E-posta" type="email" required />
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                />
              </div>
              <Button variant="primary" size="lg" type="submit">
                Gönder
              </Button>
            </form>
          </div>
        </section>

        {/* UI Kit Section */}
        <section id="uikit" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              UI Kit
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-2">Buttons</h3>
                <div className="flex gap-4 flex-wrap">
                  <Button>Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button size="lg">Large</Button>
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Inputs</h3>
                <div className="space-y-4 max-w-md">
                  <Input id="sample1" label="Name" required />
                  <Input id="sample2" label="Email" type="email" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cards</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card title="Elevated card" variant="elevated">
                    Some content.
                  </Card>
                  <Card title="Flat card" variant="flat">
                    Another variation.
                  </Card>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Alerts</h3>
                <div className="space-y-2">
                  <Alert variant="info">Information message.</Alert>
                  <Alert variant="success">Success message.</Alert>
                  <Alert variant="error">Error message.</Alert>
                  <Alert variant="warning">Warning message.</Alert>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Ahmet Yilmaz. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
