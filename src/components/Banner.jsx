import React, {useState, useEffect, useRef} from "react";

// import the logo from the public folder
import logo from '../../public/images/logo/logo4x.png'
import msgIcon from '../../public/images/logo/chat3x.png'
import heroImg from '../../public/images/banner/heroImg.png'




export default function Banner() {

    let role = useRef(false);
    let color;

    const [navSm, setNavSm] = useState(false);
    const [highlightColor, setHighlightColor] = useState('#FF8C92');
    

    function navChecker() {
        if(window.innerWidth >= 640) {
            // I want to reset some state that will make the navbar show normally
            // We will set the navSm state to be true when we resize to more than 640px
            setNavSm(true);
        }
    }

    async function typeSentence(sentence, eleRef, delay = 300) {
        eleRef.textContent = '';
        const letters = sentence.split("");
        let typed = '';
        let i = 0;
        while(i < letters.length) {
          await waitForMs(delay);
            typed += letters[i];
            eleRef.textContent = typed;
            
          i++
        }
        return;
    }
        
    function waitForMs(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    async function deleteSentence(eleRef) {
        const sentence = eleRef.innerHTML;
        const letters = sentence.split("");
        let i = 0;
        while(letters.length > 0) {
          await waitForMs(300);
          letters.pop();
          eleRef.innerHTML = letters.join("");
        }
    }

    function updateFontColor(color) {
        setHighlightColor(color);
    }


    useEffect(() => {
        if(window.innerWidth >= 640) {
            setNavSm(true)
        }
        const carouselText = [
            {text: "ML Engineer", color: "red"},
            {text: "Mechanical Engr", color: "orange"},
            {text: "Pythonista", color: "#FF8C92"},
        ]

        async function carousel(carouselList, eleRef) {
            var i = 0;
            while(true) {
            updateFontColor(carouselList[i].color)
            await typeSentence(carouselList[i].text, eleRef);
            await waitForMs(1500);
            await deleteSentence(eleRef);
            await waitForMs(1500);
            i++
            if(i >= carouselList.length) {i = 0;}
            }
        }

        carousel(carouselText, role.current)
          

        window.addEventListener('resize', navChecker);

        return () => {
            window.removeEventListener('resize', navChecker)
        }
    },[])

    return (
        <div className="banner flex flex-col w-full min-h-screen max-h-[900px] bg-cover">
            {/* The header */}
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
                        <a  
                        className="no-underline"
                        href="#aboutme">
                            <li 
                            className="hover:font-medium">
                                About Me
                            </li>
                        </a>

                        <a  
                        className="no-underline"
                        href="#works">
                            <li 
                            className="hover:font-medium">
                                Works
                            </li>
                        </a>

                        <a  
                        className="no-underline"
                        href="#blog">
                            <li
                            className="hover:font-medium"
                            >
                                Blog
                            </li>
                        </a>

                        <a  
                        className="no-underline"
                        href="#resume">
                            <li 
                            className="hover:font-medium">
                            Resume
                            </li>
                        </a>

                        <a  
                        className="no-underline"
                        href="https://wa.link/fh7d89">
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

            {/* The Main contents of the Banner */}
            <main className='w-full max-w-[1400px] mx-auto px-5 flex flex-col-reverse items-center justify-center lg:flex-row grow'>
                {/* Section for the text that will displated as if it were being typed */}
                <section className="justify-self-start lg:mx-0 lg:w-1/2">
                    <h2 className="open-sans-extrabold text-lg sm:text-2xl mb-0.5">Hello world!</h2>
                    {/* The name of the portfolio holder */}
                    <h1 className="open-sans-extrabold text-4xl sm:text-7xl mb-1">I'm Ridwan</h1>
                    {/* The job role of the programmer */}
                    <div className="flex items-center text-2xl sm:text-5xl mb-2">
                        <code className="">
                            &lt;
                        </code>

                        <h3 ref={role} style={{color: highlightColor}} className="open-sans-semibold">ML Engineer</h3>
                        {/* The typing cursor */}
                        <span style={{backgroundColor:highlightColor,}} className="input-cursor inline-block ml-0.5 w-0.5 h-6 sm:h-12">&nbsp;</span>
                        
                        <code className="">
                            /&gt;
                        </code>

                    </div>
                    <p className="text-dullDark text-base leading-[160%] inter-regular mb-5">
                        <span>
                        Dive into my portfolio where machine learning and mechanical engineering converge. 
                        </span>
                        <span className="hidden sm:inline"> Join me on this journey of passion and expertise, crafting a world where algorithms and designs unite.</span> 
                    </p>
                    <div className="buttons flex flex-row gap-6 mb-4">

                        <button 
                        type="button"
                        className="bg-darkGreen text-white inter-medium text-base leading-[160%] rounded-full px-7 py-2 my-2"
                        >
                            Hire me
                        </button>
                        <button 
                        type="button"
                        className="bg-white text-darkGreen inter-medium text-base leading-[160%] rounded-full px-7 py-2"
                        >
                            Download Resume
                        </button>
                    </div>
                </section>

                {/* Section for the hero image */}
                <section className="flex justify-center w-full lg:w-1/2">
                    <img 
                    src={heroImg} 
                    alt="Hero Image" 
                    className="sm:w-1/2 lg:w-3/4" />
                </section>
            </main>
        </div>
    )
}