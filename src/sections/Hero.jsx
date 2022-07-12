import { LineTerminal } from '../components';

export const Hero = () => {
  return (
    <section className="bg-slate-600 bg-[url('/assets/hero2.jpg')]">
        
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className=" mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl text-slate-200 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Hi, I'm Alberto García</h1>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-100 lg:mb-8 md:text-lg dark:text-gray-400">I am an enthusiastic student who is about to finish his university career, where I have carried out some projects. I am excited about this industry, its world and the knowledge that underpins it, I love to continually learn and put new knowledge into practice. I am currently learning and React JS and Angular. I am interested in web development, machine learning, and computer simulations.</p>
                <a href="#" className="bg-gradient-to-r from-purple-500 to-blue-500 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
                
            </div>
            <div className="mt-4 lg:mt-0 lg:col-span-5 lg:flex">
                
                <div className="w-full coding inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                    <div className="top mb-2 flex">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div>
                        <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div>
                    </div>
                    <LineTerminal message={ 'apt-get Autodidact'}/>
                    <LineTerminal message={ 'apt-get Teamwork'}/>
                    <LineTerminal message={ 'apt-get Communication'}/>
                    <LineTerminal message={ 'apt-get Time management'}/>
                    <LineTerminal message={ 'apt-get Flexibility'}/>
                    <LineTerminal message={ 'apt-get Orientation to results'}/>
                    <LineTerminal message={ 'apt-get hire me!!!'}/>
                </div>
            </div>                
        </div>
    </section>
  )
}
