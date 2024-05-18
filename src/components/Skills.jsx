import React from "react";

import cv from '../../public/docs/Ridwan_Amokun_CV.pdf'

export default function Skills() {
    return(
        <div id="resume" className="skills w-full my-12">

            <div className="skills-container w-full relative max-w-[1400px] mx-auto rounded-[40px] bg-[url('../public/images/professionalSkills/background.png')] bg-center py-44 px-6 sm:py-16 sm:px-24">

                <div className="max-w-screen-md flex flex-col items-center mx-auto relative z-[5]">

                    <h3 className='open-sans-bold text-3xl text-darkGreen leading-[110%] mb-5 text-center'>
                        Professional Skills
                    </h3>

                    <p className="text-center text-lg mb-5">
                        I have a diverse skill set that spans both the realms of machine learning engineering and mechanical engineering. Over the years, I've honed my abilities in data preprocessing, model development, and evaluation. I've also developed a knack for designing and simulating engineering designs.
                    </p>

                    <a href={cv} download>
                        <button 
                            type="button"
                            className="bg-white hover:bg-darkGreen text-darkGreen transition-all duration-150 ease-linear hover:text-white inter-medium text-base leading-[160%] rounded-full px-7 py-3 shadow-sm shadow-darkGreen "
                            >
                                Download Resume
                        </button>
                    </a>
                </div>

            </div>
        </div>
    )
}