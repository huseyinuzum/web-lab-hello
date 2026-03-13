import React from 'react';
import { Header, Footer } from '../components/layout';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main id="main">
        <section className="relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30" />
          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-3xl rounded-3xl bg-white/80 dark:bg-slate-900/70 p-10 shadow-2xl backdrop-blur">
              <h1 className="text-4xl font-bold mb-4">Web Lab Deneyimi</h1>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
                Modern, renkli ve erişilebilir web tasarım örnekleri. UI Kit ve portföy bileşenleri ile hem kendini hem de projelerini gösterebileceğin bir altyapı.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white shadow hover:bg-primary/90"
                >
                  Projelerimi Gör
                </a>
                <a
                  href="/ui-kit"
                  className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 text-primary hover:bg-primary/10 dark:text-primary"
                >
                  UI Kit'e Bak
                </a>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;