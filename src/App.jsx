import React from 'react'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { ProjectsSection } from './components/ProjectsSection'

export const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ProjectsSection/>
    </>
  )
}