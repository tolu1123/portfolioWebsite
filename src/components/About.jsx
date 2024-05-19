import React from "react";

import engineerDesign from '../../public/images/homepage/engineerDesign.png'
import PyCode from './PyCode'
import squiggly from '../../public/images/homepage/squiggly.png' 

export default function About() {


    return (
        <div 
        id="aboutme"
        className="aboutMe w-full">

            <div 
            className="aboutMe-container w-full relative max-w-[1400px] mx-auto px-5 my-20 sm:my-28 flex flex-col gap-x-5 lg:gap-x-10  md:flex-row "
            >
                <div className="aboutMe-text mb-8 md:mb-0 md:w-1/2 xl:w-1/3 h-fit">
                    {/* The heading of the aboutme text */}
                    <div 
                    className="flex flex-col sm:flex-row items-start">
                        <h2
                        className='open-sans-extrabold text-8xl text-pinkBrown tracking-tight leading-none p-0 m-0'
                        >
                            O5 
                        </h2>
                        <div 
                        className="sm:ml-2">
                            <h4
                            className="flex items-center capitalize open-sans-bold text-3xl leading-[110%] tracking-tight relative mt-2.5">
                                Years experience <br /> in Field
                            </h4>
                            {/* This is the about me text */}
                            <p
                            className="open-sans-regular"
                            >
                                Over the past five years, I've cultivated a diverse skill set encompassing both the realms of machine learning engineering and mechanical engineering. My journey has been marked by a deep dive into the intricacies of machine learning algorithms, where I've honed my abilities in data preprocessing, model development, and evaluation.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                className="aboutMe-projects flex flex-col md:mt-4 xl:mt-0 sm:flex-row md:flex-col xl:flex-row md:w-1/2 xl:w-2/3 gap-5 h-fit mb-28 sm:mb--0"
                >
                    {/* torch_gN4x9y9gsHRBn0Ur5ypoLniKEbGxtcWQW8b19HFH */}

                    {/* This is the first project */}
                    <div
                    className="code flex flex-col justify-center bg-highlightGreen sm:w-1/2 md:w-full xl:w-1/2 rounded-2xl px-8 pt-10 pb-5"
                    >
                        <div className="flex flex-grow items-center whitespace-pre-wrap text-xs">
                            {/* This is the code */}
                            <PyCode />
                        </div>

                        <div className="text-slateBlue self-start mt-5">
                            <button
                            className="group flex flex-row items-center gap-3 open-sans-semibold text-xl leading-[110%] transition-all duration-300 ease-linear shadow-sm hover:shadow-md bg-white hover:bg-slateBlue hover:text-white shadow-slateBlue hover:shadow-white px-5 py-2 rounded-lg"
                            >
                                <span>
                                Machine <br/>
                                Learning
                                </span>

                                <span 
                                className="text-xs transition-all duration-200 ease-linear group-hover:translate-x-2 rounded-full p-2  bg-slateBlue text-white group-hover:bg-white group-hover:text-slateBlue "
                                >
                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                </span>
                            </button>
                        </div>

                    </div>

                    {/* This is the second project */}
                    <div
                    className="engineer flex flex-col justify-center bg-highlightBrown rounded-2xl sm:w-1/2 md:w-full xl:w-1/2 px-10 pt-10 pb-5"
                    >
                        <div className="mb-auto flex flex-grow items-center">
                            <img 
                            src={engineerDesign} 
                            alt="Enginnering Design" 
                            className="object-cover object-center"/>
                        </div>

                        <div className="text-dustyRose self-start mt-5">
                            <button
                            className="group flex flex-row items-center gap-3 bg-white rounded-lg px-5 py-2 transition-all duration-300 ease-linear shadow-sm hover:bg-dustyRose hover:text-white hover:shadow-white hover:shadow-md shadow-dustyRose open-sans-semibold text-xl leading-[110%]"
                            >
                                <span>
                                Engineering <br/>
                                Design
                                </span>

                                <span 
                                className="text-xs transition-all duration-200 ease-linear group-hover:translate-x-2 rounded-full p-2  bg-dustyRose text-white group-hover:bg-white group-hover:text-dustyRose "
                                >
                                    <i className="fa-sharp fa-regular fa-arrow-right"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                
                </div> 

                <div className="squiggly absolute z-[-1] left-0 bottom-0 -translate-x-[10%] translate-y-[12%] rotate-2">
                    <img 
                    src={squiggly} 
                    alt="Squiggly to aid aesthetics" 
                    className="w-1/2"/>
                </div>

            </div>
            
        </div>
    )
}