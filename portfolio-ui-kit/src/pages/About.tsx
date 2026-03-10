import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <img
          src="/path/to/profile-image.jpg"
          alt="Profile"
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />
        <p className="text-lg mb-4">
          I am a passionate web developer with experience in building modern and accessible web applications. My focus is on creating user-friendly interfaces and seamless user experiences.
        </p>
        <div className="flex justify-center space-x-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded">JavaScript</span>
          <span className="bg-green-500 text-white px-3 py-1 rounded">React</span>
          <span className="bg-purple-500 text-white px-3 py-1 rounded">Tailwind CSS</span>
        </div>
      </div>
    </section>
  );
};

export default About;