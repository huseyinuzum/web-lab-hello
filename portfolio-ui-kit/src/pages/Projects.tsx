import React from 'react';
import Card from '../components/ui/Card';

const projects = [
  {
    title: 'Web Lab 1',
    image: '/weblab1.png',
    imageAlt: 'Web Lab 1 ekran görüntüsü',
    footer: 'React + Tailwind ile modern UI',
    variant: 'elevated',
    description:
      'Basit bir portföy ve UI kütüphanesi — modern tasarım, responsive grid ve erişilebilirlik odaklı.',
  },
  {
    title: 'Web Lab 2',
    image: '/weblab2.png',
    imageAlt: 'Web Lab 2 ekran görüntüsü',
    footer: 'Bileşen tabanlı mimari ve tema desteği',
    variant: 'outlined',
    description:
      'Component kütüphanesi, karanlık mod, responsive kartlar ve erişilebilir form bileşenleri.',
  },
  {
    title: 'Web Lab 3 (Yakında)',
    image: '/weblab1.png',
    imageAlt: 'Yakında gelecek özellikler',
    footer: 'Yeni proje yakında eklenecek',
    variant: 'filled',
    description: 'Burada yakında yeni bir laboratuvar projesi göreceksiniz.',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Projeler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              image={project.image}
              imageAlt={project.imageAlt}
              footer={project.footer}
              variant={project.variant as any}
            >
              <p className="text-sm text-gray-700 dark:text-gray-200">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;