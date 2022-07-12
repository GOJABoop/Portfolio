
export const ContactSection = () => {
  return (
    <>
         {/*<span className=" bg-[url('/assets/footer.jpg')]  text-sm text-gray-100 sm:text-center dark:text-gray-100">© 2022. Desing and Development by GOJA.
        </span>
        <div className='bg-slate-700 mx-2 px-5 py-2 rounded'>

            <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-100 dark:text-gray-400 sm:mt-0">
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
                    <a href="#" className="hover:underline">Gmail</a>
                </li>
            </ul>
        </div>*/}
        <div className=" p-6 flex flex-wrap items-center  bg-slate-900">
            <div className="grid md:grid-cols-2 gap-4 bg-slate-800 mx-2 px-5 py-2 rounded">
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-100 dark:text-gray-400 sm:mt-0">
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
                        <a href="#" className="hover:underline">Gmail</a>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}
