import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import Footer from './components/Footer'

export default function App () {
  return (
    <div className="bg-gradient-to-b from-white via-blue-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen">
      {/* <ParticlesBackground /> */}
      <Navbar />
      <Hero />
      <About />
      <Skills /> 
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  )
}
