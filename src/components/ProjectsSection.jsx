import React from 'react'
import { Card } from './Card'
import { GridProjects } from './GridProjects'

export const ProjectsSection = () => {
  return (
    <section className='bg-slate-300'>
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Here my most representative projects</h1>
          <p className="mb-2 text-xl font-normal text-justify text-gray-500 md:text-center lg:text-xl sm:px-16 xl:px-50 dark:text-gray-400">In each project I give my best and despite being personal or school projects I try to develop them in such a way that an end user can use them in their day to day in an optimal, clear and simple way, in addition to applying the fundamentals and knowledge that I have in computer science and software development.</p>
        </div>
        <GridProjects/>
    </section>
  )
}
