import React, {useState, useEffect, useContext} from 'react';

import { useNavigate, Link } from 'react-router-dom';

// import the logo from the public folder
import logo from '../../public/images/logo/logo4x.png'
import msgIcon from '../../public/images/logo/chat3x.png'

// import the context for the link value
import {LinkContext} from '../main'

export default function Header({root}) {
    const {linkValue, updateLinkValue} = useContext(LinkContext);

    const navigate = useNavigate();

    const [navSm, setNavSm] = useState(false);

    function navChecker() {
        if(window.innerWidth >= 640) {
            // I want to reset some state that will make the navbar show normally
            // We will set the navSm state to be true when we resize to more than 640px
            setNavSm(true);
        }
    }

    useEffect(() => {
        // This will check the width of the window and set the navSm state to true if the window is greater than 640px
        if(window.innerWidth >= 640) {
            setNavSm(true)
        }

        window.addEventListener('resize', navChecker);

        return () => {
            window.removeEventListener('resize', navChecker)
        }
    }, [])

    function Anchor(id) {
        console.log('Our elementary piece of Data', id, root)
        //We are using this approch because the browser on loading frgets to scroll to the id.

        updateLinkValue(id)
        if(!root) {
            // But here we are going to move back a route to the root of the website
            navigate(`../`);
        }
    }


    return(

        <header 
        className="w-full max-w-[1400px] mx-auto px-5 py-5 flex flex-row justify-between items-center"
        
        >
            {/* The logo for he website */}
            <h1 className="logo yellowtail-regular flex items-center">
                <img src={logo} alt="Logo" width='40px' height='40' />
                <span className="text-2xl">Ridone<sup className="text-xs">TM</sup></span>
            </h1>

            {/* The nav with the nested dropdown */}
            <nav>
                {/* The container for the ham button which will be displayed on small screens */}

                <div 
                className="ham sm:hidden text-3xl"
                onClick={() => {
                    if (window.innerWidth < 640) {
                        setNavSm(prevState => !prevState)
                    }
                }}
                >
                    {/* The hamburger and close icon that gets closed depending on the state */}
                    {
                        navSm ? 
                        <i className="fa-light fa-xmark"></i> 
                        : <i className="fa-light fa-bars"></i>
                    }
                </div>

                {/* The list dropdown */}
                {navSm && <ul className="bg-white/50 sm:bg-transparent sm:backdrop-blur-none backdrop-blur-md flex flex-col absolute top-16 right-2 w-fit h-fit text-base p-5 sm:p-0  sm:static sm:flex-row items-center justify-around gap-5 inter-regular shadow-lg sm:shadow-none leading-[160%] text-darkGreen"> 
                    <li 
                    className="hover:font-medium"
                    onClick={() => {
                        Anchor('aboutme')
                        }
                    }
                    >
                        About
                    </li>

                    <li 
                    className="hover:font-medium"
                    onClick={() => {
                        Anchor('works')
                        }
                    }
                    >
                        Works
                    </li>

                     
                    <li
                    className="hover:font-medium"
                    onClick={() => {
                        Anchor('blog')
                        }
                    }
                    >
                        Blog
                    </li>

                    <li 
                    className="hover:font-medium"
                    onClick={() => {
                        Anchor('resume')
                    }
                    }
                    >
                    Resume
                    </li>

                    <a  
                    className="no-underline"
                    href="https://wa.link/kn5dyq"
                    target='_blank'>
                        <li 
                        className="sm:bg-white flex justify-between items-center gap-1 p-0 sm:py-2 sm:px-4 sm:rounded-full hover:font-medium">
                            <span className="">Let's Chat</span>
                            {/*The message icon */}
                            <img src={msgIcon} alt="Message Icon" width='20px' height='20px' />
                        </li>
                    </a>
                </ul>}
            </nav>

        </header>
    
    )
}