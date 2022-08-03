
export const ContactSection = () => {
  return (

    <section className="bg-black" id="contact">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 ">
            <div className=" mr-auto place-self-center lg:col-span-7">
                <h1 className=" mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600">Hey! Contact me</h1>
                <p className="max-w-2xl text-justify mb-6 text-xl font-light text-slate-100 lg:mb-8 md:text-lg">I leave my following sources of contact, in my linkedin you can find more information about me and in github projects in which I work and have worked, it is worth mentioning that this portfolio continues to improve 😃. You can call me by Alberto García or Beto if you prefer. Thanks for your time!!!</p>
                <div className=" p-6 flex flex-wrap items-center  bg-neutral-900">
                    <div className="grid grid-cols-1 gap-4 bg-neutral-800 mx-2 px-5 py-2 rounded">
                        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-100 sm:mt-0">
                            <li className='flex flex-wrap items-center'>
                                <img src={'/assets/icons/linkedin.svg'} className="h-6 w-6 mr-2" alt="linkedin" />
                                <a href={`https://www.linkedin.com/in/jos%C3%A9-alberto-garc%C3%ADa-ochoa-1a6276206/`} target="blank" className="mr-4 hover:underline md:mr-6">Linkedin</a>
                            </li>
                            <li className='flex flex-wrap items-center'>
                                <img src={'/assets/icons/github_2.svg'} className="h-9 w-8 mr-2" alt="GitHub" />
                                <a href={`https://github.com/GOJAx64`} target="blank" className="mr-4 hover:underline md:mr-6">GitHub</a>
                            </li>
                            {/* <li className='flex flex-wrap items-center'>
                                <img src={'/assets/icons/gmail.svg'} className="h-6 w-6 mr-2" alt="Gmail" />
                                <a href="#" className="mr-4 hover:underline">Gmail</a>
                            </li> */}
                            {/* <li className='flex flex-wrap items-center'>
                                <img src={'/assets/icons/education.svg'} className="h-6 w-6 mr-2" alt="Gmail" />
                                <a href="#" className="mr-4 hover:underline">Education</a>
                            </li>
                            <li className='flex flex-wrap items-center'>
                                <img src={'/assets/icons/education.svg'} className="h-6 w-6 mr-2" alt="Gmail" />
                                <a href="#" className="hover:underline">Download CV</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>                   
        </div>
        
    </section>
  )
}
