import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white/0 to-secondary/20 dark:from-primary/10 dark:via-slate-950 dark:to-secondary/10" />
      <div className="relative container mx-auto grid gap-10 lg:grid-cols-2 items-center">
        <div className="flex justify-center">
          <div className="relative rounded-3xl bg-white/80 dark:bg-slate-900/70 shadow-xl p-6">
            <img
              src="/weblab1.png"
              alt="Profil"
              className="h-44 w-44 rounded-2xl object-cover border-4 border-white shadow-lg"
            />
            <div className="mt-4 text-center">
              <h2 className="text-3xl font-bold">Hüseyin Üzüm</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Front-end geliştirici & UI/UX meraklısı</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Hakkımda</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Modern, hızlı ve erişilebilir web uygulamaları geliştirmeyi seviyorum. Amacım kullanıcı deneyimini ön planda tutan, anlaşılır ve estetik arayüzler üretmek.
          </p>
          <div className="flex flex-wrap gap-3">
            {['JavaScript', 'React', 'Tailwind CSS', 'TypeScript', 'Vite', 'Erişilebilirlik'].map((tech) => (
              <span key={tech} className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-white shadow">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;