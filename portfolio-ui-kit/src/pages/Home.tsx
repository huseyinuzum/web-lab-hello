import React from 'react';
import { Header, Footer } from '../components/layout';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main id="main">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;