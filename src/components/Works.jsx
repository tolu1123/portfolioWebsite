import React from "react";

import SvgComponent from "./SvgComponent";

export default function Works() {
  return (
    <div id="works" className="works w-full">

        <div className="aboutMe-container w-full relative max-w-[1400px] mx-auto px-5 bg-cloudRed rounded-[40px] py-16">

            {/* The heading for my works section */}
            <div className="flex flex-col justify-center items-center">
                <h3 className="flex items-center justify-center text-center capitalize open-sans-bold text-3xl leading-[110%] tracking-tight mb-2">
                    My Creative Works
                </h3>

                <p className="w-3/4 sm:w-1/2 text-center">
                    This are my projetcs. They showcase my innovative ideas and artistic
                    expression, blending passion with purpose to inspire and renew the
                    world.
                </p>
            </div>

            {/* The works */}
            <div className="my-10">
            {/* The first work */}
                <div className="flex flex-col-reverse sm:flex-row justify-center items-center gap-y-3 sm:gap-x-5 work-1 rounded-[30px] px-10 py-2">
                    <section className="">
                        {/* The project details */}
                        <div className="">
                            <h4
                            className="open-sans-bold text-2xl leading-[130%] mb-2"
                            >
                                Breast Cancer Detection
                            </h4>

                            <p>
                            Empowering healthcare with AI: My breast cancer detection project combines deep learning and medical expertise for accurate diagnoses, revolutionizing patient care.
                            </p>
                        </div>

                        <button 
                        className="flex justify-center items-center inter-regular text-base leading-[160%] bg-white px-5 py-2 rounded-full mt-5 shadow-sm text-blushPetal shadow-blushPetal hover:bg-blushPetal transition-all duration-200 ease-linear hover:text-white hover:shadow-md hover:shadow-white  mb-8 sm:mb-0"
                        type="button">
                            Read Case Study
                        </button>
                    </section>

                    <section className="">
                    <SvgComponent/>
                    </section>

                </div>

                {/* The other works.... */}
            </div>

            {/* The Contact me button */}
            <div className="flex justify-center">
                <a
                className="inline-block rounded-full bg-darkGreen text-white shadow-sm transition-all duration-200 ease-linear hover:shadow-white px-10 py-4 hover:bg-white hover:text-darkGreen sm:hover:hover:shadow-darkGreen/70 inter-medium text-base" 
                href="https://wa.link/x7bv5p"
                target="_blank"
                >
                    Contact Me
                </a>
            </div>
        </div>

        
    </div>
  );
}
