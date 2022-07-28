import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(true);

    const onClickButton = ({ reference }) => {
        setToggleMenu(!toggleMenu);
        transition
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-neutral-900 p-6 fixed top-0 w-full">
            <div className="flex items-center flex-shrink-0 mr-6">
                <img src={logo} className="fill-white h-8 w-9 mr-2" alt="logo" />
                <span className="text-2xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">GOJAx64</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={ onClickButton } className="flex items-center px-3 py-2 border border-blue-500 rounded text-white hover:text-white hover:border-blue-500">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div id='menuNavbar' className={ `w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center lg:text-right ${ toggleMenu ? 'hidden' : '' }`}>
                <div className="text-base lg:flex-grow">
                    <a onClick={ onClickButton } to="/#about" className="block mt-4 lg:inline-block lg:mt-0 text-purple-500 hover:text-purple-200 mr-4">
                        About me
                    </a>
                    <a onClick={ onClickButton } href="/#projects" className="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-purple-200 mr-4">
                        Projects
                    </a>
                    <a onClick={ onClickButton } href="/#technologies" className="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-purple-200 mr-4">
                        Technologies
                    </a>
                    <a onClick={ onClickButton } href="/#contact" className="block mt-4 lg:inline-block lg:mt-0 text-slate-100 hover:text-purple-200 mr-4">
                        Contact
                    </a>
                </div>
                <div>
                    <button href="#" className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-md inline-block text-sm px-3 py-2 leading-none border rounded border-black hover:border-transparent hover:text-slate-300 mt-4 lg:mt-0">Download CV</button>
                </div>
            </div>
        </nav>
    )
}
