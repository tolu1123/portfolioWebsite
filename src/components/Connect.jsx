import React from 'react';

import suitcase from '../../public/images/icons/suitcase.png';
import chat from '../../public/images/icons/chat1x.png';

export default function Connect() {
    return (
        <div id="connect" className="connect w-full my-6">

            <div className='connect-container w-full relative max-w-[1400px] mx-auto rounded-[40px] bg-darkGreen py-10 px-6 sm:py-16 sm:px-24'>
                <div className="inline-block text-white text-xl sm:text-2xl text-center open-sans-semibold leading-[140%] sm:leading-[145%] align-middle">
                    I'm Amokun Ridwan, a Machine Learning Engineer and a Mechanical Engineer with 05 <img src={suitcase} width='36px' height='36px' className='inline align-text-top' alt="" /> years experience building machine learning models and deploying them to production. I also have experience in designing and simulating engineering designs.
                </div>

                <div className="flex flex-row items-center gap-4 pt-10">
                    <hr className='flex-grow'/>
                    <p className='flex flex-row items-center gap-3'>
                        <span className='open-sans-semibold text-white text-lg'>Let's connect</span>
                        <span>
                            <img src= {chat} width='22px' height='22px' alt="A chat icon" />
                        </span>
                    </p>
                    <hr className='flex-grow' />
                </div>

                {/* Contact Information */}
                <div className="contactInformation pt-6 inter-regular text-center text-white">
                    <p className="">
                        Email: 
                        &nbsp;
                        <a href="mailto:amokunridwan@gmail.com">amokunridwan@gmail.com</a>
                    </p>
                    <p className="">
                        Linkedin: 
                        &nbsp;
                        <a href="https://www.linkedin.com/in/ridwan-amokun/" target="_blank" rel="noopener noreferrer">@ridwan-amokun</a>
                    </p>
                    <p className="">
                        Github: 
                        &nbsp;
                        <a href="https://github.com/MITXy" target="_blank" rel="noopener noreferrer">@/MITXy</a> 
                    </p>
                    <p className=''>
                        Twitter: 
                        &nbsp;
                        <a href="https://twitter.com/Markyrrh" target="_blank" rel="noopener noreferrer">@Markyrrh</a>
                    </p>
                </div>
            </div>

        </div>
    )
}