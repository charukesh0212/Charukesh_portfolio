import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Clean Footer */}
      <Footer />
    </div>
  );
}
