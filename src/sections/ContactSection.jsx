
export const ContactSection = () => {
  return (

    <section className="  bg-slate-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className=" mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl text-slate-200 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Hey! Contact me</h1>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-100 lg:mb-8 md:text-lg">I am an enthusiastic student who is about to finish his university career, where I have carried out some projects. I am excited about this industry, its world and the knowledge that underpins it, I love to continually learn and put new knowledge into practice. I am currently learning and React JS and Angular. I am interested in web development, machine learning, and computer simulations.</p>
                <div className=" p-6 flex flex-wrap items-center  bg-slate-900">
                    <div className="grid grid-cols-1 gap-4 bg-slate-800 mx-2 px-5 py-2 rounded">
                        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-100 sm:mt-0">
                            <li className='flex flex-wrap items-center'>
                                <img src={'/assets/icons/linkedin.svg'} className="h-6 w-6 mr-2" alt="linkedin" />
                                <a href="#" className="mr-4 hover:underline md:mr-6">Linkedin</a>
                            </li>
                            <li className='flex flex-wrap items-center'>
                                <img src={'/assets/icons/github_2.svg'} className="h-9 w-8 mr-2" alt="GitHub" />
                                <a href="#" className="mr-4 hover:underline md:mr-6">GitHub</a>
                            </li>
                            <li className='flex flex-wrap items-center'>
                                <img src={'/assets/icons/gmail.svg'} className="h-6 w-6 mr-2" alt="Gmail" />
                                <a href="#" className="mr-4 hover:underline">Gmail</a>
                            </li>
                            <li className='flex flex-wrap items-center'>
                                <img src={'/assets/icons/education.svg'} className="h-6 w-6 mr-2" alt="Gmail" />
                                <a href="#" className="mr-4 hover:underline">Education</a>
                            </li>
                            <li className='flex flex-wrap items-center'>
                                <img src={'/assets/icons/education.svg'} className="h-6 w-6 mr-2" alt="Gmail" />
                                <a href="#" className="hover:underline">Download CV</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>                   
            <div className="mt-4 lg:mt-0 lg:col-span-5 lg:flex bg-slate-800 rounded rounded-xl">
                <form className='mt-4 mx-4 text-slate-100'>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Your email</label>
                        <input type="email" id="email" className="bg-slate-600 border border-gray-600  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@mail.com" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium">Your message</label>
                        <input type="password" id="password" className="w-full bg-slate-600 py-8 border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                    </div>
                    <button type="submit" className="bg-gradient-to-r from-purple-600 to-blue-800 inline-flex items-center justify-center px-7 py-2 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">Submit</button>
                </form>
                
            </div> 
        </div>
        
    </section>
  )
}
