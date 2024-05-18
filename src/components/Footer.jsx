import React from "react";

import logo from '../../public/images/logo/logo4x.png'
import msgIcon from '../../public/images/logo/chat3x.png'
import handShake from '../../public/images/icons/handShake.png'

export default function Footer() {
    return(
        <footer className="w-full">

            <div className="w-full relative max-w-[1400px] mx-auto px-5 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 content-center justify-center">
            
                <div className="footerLogo sm:col-span-2 lg:col-span-1 mx-auto mb-5 lg:mb-0">

                    <h4 className="logo yellowtail-regular flex items-center mx-auto text-center">
                        <img src={logo} alt="Logo" width='80px' height='80px' />
                        <span className="text-3xl">Ridone
                        <sup className="text-xs">TM</sup>
                        </span>
                    </h4>

                </div>

                <div className="footerAddress sm:col-span-1 lg:col-span-1 text-center lg:text-start mb-5 lg:mb-0">
                    <h5
                    className="open-sans-semibold text-lg text-darkGreen mt-2"
                    >Stay Connect
                    </h5>
                    <p className="inter-regular text-base text-lightGray leading-[160%]">Cement, Ikeja, Lagos, Nigeria</p>
                    <p className="inter-regular text-base leading-[160%]">amokunridwan@gmail.com</p>
                    <p className="inter-regular text-base leading-[160%]">+234 903 368 0210</p>

                    {/* social media links */}
                    <div className="w-full flex flex-row justify-center lg:justify-start flex-wrap gap-3 text-[16px] mt-1">

                        <span className="text-hotPink inline-block">
                            <i className="fa-brands fa-instagram"></i>
                        </span>

                        <span className="text-hotPink inline-block">
                            <i className="fa-brands fa-facebook-f"></i>
                        </span>

                        <span className="text-hotPink inline-block">
                            <i className="fa-brands fa-x-twitter"></i>
                        </span>

                        <span className="text-hotPink inline-block">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </span>

                        <span className="text-hotPink inline-block">
                            <i className="fa-brands fa-youtube"></i>
                        </span>

                         
                    </div>
                </div>

                <div className="appreciation sm:col-span-1 lg:col-span-1 text-center mb-10 lg:mb-0">

                    <div className="text-center">
                        <div className="">
                            <img 
                            src={handShake} 
                            width='40px'
                            height='40px'
                            className="inline-block "
                            alt="A handShake icon" />
                            <h5
                            className="inline-block open-sans-semibold text-lg text-darkGreen mt-2 ml-2 text-center"
                            >
                                Thanks For Scrolling
                            </h5>
                        </div>
                        <p className="text-center">
                            &copy; 2022 By Ojo Tolulope
                        </p>
                    </div>

                    <a  
                    className="inline-block no-underline text-center mt-2 mx-auto"
                    href="https://wa.link/fh7d89">
                        <button
                        className="flex justify-between items-center gap-1 p-0 py-2 px-7 rounded-full hover:font-medium border border-solid ">
                            <span className="">Let's Chat</span>
                            {/*The message icon */}
                            <img src={msgIcon} alt="Message Icon" width='20px' height='20px' />
                        </button>
                    </a>

                </div>

            </div>

        </footer>
    )
}