import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import Footer from './components/Footer'
import Education from './components/Education'
import { useState, useEffect } from 'react'

export default function App () {
  const [bgChange, setBgChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setBgChange(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        min-h-screen
        text-gray-100
        bg-gradient-to-b
        from-[#0a0a12]
        via-[#13131f]
        to-[#1a102b]
        transition-all
      "
    >
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills /> 
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
