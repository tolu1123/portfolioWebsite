import React from 'react';

import Header from '../components/Header'

export default function ErrorBanner() {
    return (
        <div id="error-banner" className="error-banner flex flex-col w-full h-[80vh] sm:aspect-[1920/700] bg-cover px-5">
            <Header/>

            <div className='flex flex-col grow items-center sm:justify-center sm:pt-14 justify-center'>

                <h1 className="open-sans-extrabold text-6xl sm:text-8xl mt-5">
                    <span>O</span>
                    <span>O</span>
                    <span className='text-red-500'>P</span>
                    <span>S</span>
                </h1>
                <h3
                className='open-sans-bold text-xl'>
                    An error occured
                </h3>
                <p className="inter-regular leading-[160%] text-center">
                    An error was encountered. Please check the URL and try again.
                </p>


            </div>

        </div>
    )
}