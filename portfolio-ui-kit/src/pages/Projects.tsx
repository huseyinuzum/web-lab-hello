import React from 'react';
import Card from '../components/ui/Card';

const projects = [
  {
    title: 'Project One',
    image: '/path/to/image1.jpg',
    imageAlt: 'Description of Project One',
    footer: 'Footer content for Project One',
    variant: 'elevated',
  },
  {
    title: 'Project Two',
    image: '/path/to/image2.jpg',
    imageAlt: 'Description of Project Two',
    footer: 'Footer content for Project Two',
    variant: 'outlined',
  },
  {
    title: 'Project Three',
    image: '/path/to/image3.jpg',
    imageAlt: 'Description of Project Three',
    footer: 'Footer content for Project Three',
    variant: 'filled',
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="p-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            image={project.image}
            imageAlt={project.imageAlt}
            footer={project.footer}
            variant={project.variant}
          >
            <p>Details about {project.title}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;