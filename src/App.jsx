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
          setBgChange(window.scrollY > 100); // 100px scroll ke baad change
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
      return (
        <div className={`
            transition-all duration-500
            ${bgChange ? "bg-gray-100 dark:bg-gray-800" : "bg-white dark:bg-black"}
          `}>
  
          <Navbar />
          <Hero />
          <About />
          <Education/>
          <Skills /> 
          <Projects/>
          <Contact />
          <Footer/>
        </div>
      )
    }
