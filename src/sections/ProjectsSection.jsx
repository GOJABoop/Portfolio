import { GridProjects } from '../components';

export const ProjectsSection = () => {
  return (
    <section className='bg-slate-300' id="projects">
      <div className='py-5 bg-neutral-900 text-center'>
        <h1 className=" text-2xl font-extrabold tracking-tight md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-700">Most Representative Projects</h1>
      </div>
        <div className="pt-4 px-4 mx-auto max-w-screen-xl text-center lg:pb-7 lg:px-12">
          <p className="mb-2 text-xl font-normal text-justify text-gray-800 md:text-center lg:text-xl sm:px-10 xl:px-50">In each project I give my best and despite being personal or school projects I try to develop them in such a way that an end user can use them in their day to day in an optimal, clear and simple way, in addition to applying the fundamentals and knowledge that I have in computer science and software development.</p>
        </div>
        <GridProjects/>
    </section>
  )
}
