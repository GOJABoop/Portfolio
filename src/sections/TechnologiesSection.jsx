import { GridTechnologies } from '../components';
import { mainTechnologies, secondaryTechnologies, tools } from '../data/stackTechonologies';

export const TechnologiesSection = () => {
  //https://tailwindui.com/components/marketing/sections/heroes
  return (
    <section className='bg-slate-200 pb-5'>
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12">
            <h1 className="my-4 text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 md:text-5xl lg:text-5xl">Technologies</h1>
            <h1 className="pt-3 mb-1 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl">Main Lenguages and Frameworks</h1>
            <p className="text-xl font-normal text-justify text-gray-500 md:text-center lg:text-xl sm:px-16 xl:px-50">These are the lenguages, frameworks and databases with which I feel most comfortable.</p>
        </div>
        <GridTechnologies stack={ mainTechnologies }/>
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl">Tools</h1>
            <p className="mb-2 text-xl font-normal text-justify text-gray-500 md:text-center lg:text-xl sm:px-16 xl:px-50">In each project I give my best and despite being personal or school projects I try to develop them in such a way that an end user can use them in their day to day in an optimal, clear and simple way, in addition to applying the fundamentals and knowledge that I have in computer science and software development.</p>
        </div>
        <GridTechnologies stack={ tools }/>
        <div className="py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-12">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl">I don't have too much experience, but I've worked with:</h1>
        </div>
        <GridTechnologies stack={ secondaryTechnologies }/>
    </section>
  )
}
