import { GridTechnologies } from '../components';
import { mainTechnologies, tools, currentLearnign } from '../data/stackTechonologies';

export const TechnologiesSection = () => {
  return (
    <section className='bg-slate-300 pb-5' id="technologies">
        <div className='py-6 bg-neutral-900 text-center'>
          <h1 className=" text-2xl font-extrabold tracking-tight md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-700">Technologies</h1>
        </div>
        <div className="py-6 px-4 mx-auto max-w-screen-xl text-center lg:pb-6 lg:px-12">
            <h1 className=" mb-1 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl">Main Lenguages and Frameworks</h1>
            <p className="text-xl font-normal text-justify text-gray-500 md:text-center lg:text-xl sm:px-16 xl:px-50">These are the lenguages, frameworks and databases with which I feel most comfortable.</p>
        </div>
        <GridTechnologies stack={ mainTechnologies } length={ mainTechnologies.length } mx={ 24 }/>
        <div className='mx-1 py-4 mt-2 lg:mt-6 text-center lg:mx-24 '>
            <div className={`grid grid-cols-1 sm:grid-cols-2 sm:mx-4 lg:grid-cols-2 gap-5 lg:mx-1 place-items-center`}>
              <div className="py-1 px-2 mx-auto max-w-screen-xl text-center">
                <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl">Current Learning</h1>
                <p className="mb-2 text-xl font-normal text-justify text-gray-500 md:text-center lg:text-xl sm:px-16 xl:px-50">Currently I'm learnig this technologies or tools yo can see projects in my GitHub.</p>
                <GridTechnologies stack={ currentLearnign } length={ 6 } mx={ 7 }/>
              </div>
              <div className='py-1 px-2 mx-auto max-w-screen-xl text-center'>
                <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl">Tools</h1>
                <p className="mb-2 text-xl font-normal text-justify text-gray-500 md:text-center lg:text-xl sm:px-16 xl:px-50">Currently I'm learnig this technologies or tools yo can see projects in my GitHub.</p>
                <GridTechnologies stack={ tools } length={ 6 } mx={ 7 }/>
              </div>
            </div>
        </div>
    </section>
  )
}