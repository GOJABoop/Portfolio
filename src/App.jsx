import React from 'react'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'
import { TechnologiesSection } from './components/TechnologiesSection'

export const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ProjectsSection/>
      <TechnologiesSection/>
      <ContactSection/>
      <Footer/>
    </>
  )
}