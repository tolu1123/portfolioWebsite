import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

import squiggly from '../../public/images/hireMe/squiggly1x.png'



export default function HireMe() {

    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
        .sendForm('contact_service', 'contact_form', form.current, {
            publicKey: 'glr-5Ww6naWCJp7EJ',
        })
        .then(
            () => {
            console.log('SUCCESS!');
            },
            (error) => {
            console.log('FAILED...', error.text);
            },
        );
    };



    return (
        <div id='hireMe' className='hireMe w-full my-14'>

            <div className="hireMe-container w-full relative max-w-[1400px] mx-auto rounded-[40px] bg-highlightBrown flex flex-col lg:flex-row gap-10 px-10 pt-10 pb-32 lg:px-20 lg:pt-20 lg:pb-32 justify-center lg:items-start ">

                {/* The Title for the hireMe */}
                <div className="lg:w-1/3">
                    <h3 
                    className='open-sans-bold text-3xl text-darkGreen leading-[110%] mb-5 text-start'
                    >Hire Me</h3>

                    <p>As a Mechanical Engineer with a strong background in Machine Learning, I excel in solving complex engineering challenges. Contact me to discuss how my skills can contribute to your next project.
                    </p>
                </div>

                {/* The form for the HireMe section */}
                <div className="lg:w-2/3">

                    <form 
                    ref={form}
                    onSubmit={sendEmail}
                    className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'
                    >

                        <input 
                        type="hidden" 
                        name="contact_number" 
                        value="697483" 
                        className='hidden'
                        />
                        {/* The name of the person that wants to connect with me */}
                        <div className="col-span-1 relative flex flex-col items-center mb-4 lg:mb-5">

                            <input 
                            type="text" 
                            name="user_name" 
                            id="user_name"
                            required
                            focus="true"
                            className='peer w-full h-[40px] bg-transparent border-b-[1.5px] border-solid border-borderRose outline-0 '
                            />

                            <label 
                            htmlFor="user_name"
                            className='peer-focus:-top-1 peer-valid:-top-1 absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear'>
                                Name*
                            </label>
                        </div>

                        {/* The name of the company, organization, university the action taker is acting in behalf of */}
                        <div className="relative col-span-1 flex flex-col items-center mb-4 lg:mb-5">

                            <input 
                            type="text" 
                            name="user_organization" 
                            id="user_organization"
                            required
                            className='peer w-full h-[40px] bg-transparent border-b-[1.5px] border-solid border-borderRose outline-0 '
                            />

                            <label 
                            htmlFor="user_organization"
                            className='peer-focus:-top-1 peer-valid:-top-1 absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear'
                            >
                                Company*
                            </label>
                        </div>

                        <div className="relative col-span-1 lg:col-span-2 flex flex-col">
                        <input 
                            type="text" 
                            name="user_email" 
                            id="user_email"
                            required
                            className='peer w-full h-[40px] bg-transparent border-b-[1.5px] border-solid border-borderRose outline-0 '
                            />

                            <label 
                            htmlFor="user_email"
                            className='peer-focus:-top-1 peer-valid:-top-1 absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-100 ease-linear'
                            >
                                Email*
                            </label>
                        </div>

                        {/* The div that contains the hire me message. */}
                        <div className="col-span-1 lg:col-span-2 flex flex-col">
                            <label 
                            htmlFor="message"
                            className='mb-1 inter-regular text-base leading-[120%]'
                            >
                                How can i help you?*
                            </label>

                            <textarea 
                            name="message" 
                            id="message" 
                            className='resize-y w-full bg-transparent border-b-[1.5px] border-solid border-borderRose outline-0 py-0.5'
                            />
                        </div>


                        <button 
                        type="submit"
                        className="inline-block w-fit bg-darkGreen hover:bg-white text-white hover:text-darkGreen transition-all duration-150 ease-linear shadow-sm shadow-darkGreen hover:shadow-darkGreen inter-regular text-sm leading-[160%] rounded-full px-6 py-2.5 z-[5]"
                        >
                            Send Message
                        </button>


                    </form>

                </div>

                <img 
                src={squiggly} 
                className='absolute w-[202.66px] h-[91px] -translate-x-16 sm:w-[304px] sm:h-[136px] left-12 bottom-6 rotate-0'
                alt="" />

            </div>
            
        </div>
    )
}