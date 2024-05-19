import React, {useState, useEffect, useRef} from "react";


import heroImg from '../../public/images/banner/heroImg.png'
import cv from '../../public/docs/Ridwan_Amokun_CV.pdf'


import Header from "./Header";




export default function Banner() {

    let role = useRef(false);
    let color;

    
    const [highlightColor, setHighlightColor] = useState('#FF8C92');

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
        // This functionn allows the typing animation on the homepage
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
          

        
    },[])

    return (
        <div id="banner" className="banner flex flex-col w-full min-h-screen max-h-[900px] bg-cover">
            
            <Header root={true} />

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

                        <a 
                        href="#hireMe"
                        >
                            <button 
                            type="button"
                            className="bg-darkGreen text-white inter-medium text-base leading-[160%] rounded-full px-7 py-2 shadow-sm shadow-darkGreen transition-all duration-150 ease-linear hover:bg-white hover:text-darkGreen"
                            >
                                Hire me
                            </button>
                        </a>

                        <a href={cv} download>
                            <button 
                            type="button"
                            className="bg-white text-darkGreen inter-medium text-base leading-[160%] rounded-full px-7 py-2 shadow-sm shadow-darkGreen transition-all duration-150 ease-linear hover:bg-darkGreen hover:text-white"
                            >
                                Download Resume
                            </button>
                        </a>
                    </div>
                </section>

                {/* Section for the hero image */}
                <section className="flex justify-center w-full lg:w-1/2 mt-12 sm:mt-0">
                    <img 
                    src={heroImg} 
                    alt="Hero Image" 
                    className="sm:w-1/2 lg:w-3/4" />
                </section>
            </main>
        </div>
    )
}