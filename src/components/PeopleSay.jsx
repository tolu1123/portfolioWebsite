import React, {useEffect, useRef} from 'react';

import { register } from 'swiper/element/bundle';

//Initializing the swiper
register()

import quote from '../../public/images/peopleSay/quote0.5x.png'
import {Slider} from './Slider'

export default function PeopleSay() {
    // const swiperElRef = useRef(null);

    // useEffect(() => {
    //     // listen for Swiper events using addEventListener
    //     swiperElRef.current.addEventListener('swiperprogress', (e) => {
    //       const [swiper, progress] = e.detail;
    //       console.log(progress);
    //     });
    
    //     swiperElRef.current.addEventListener('swiperslidechange', (e) => {
    //       console.log('slide changed');
    //     });
    // }, []);

    return (
        <div className="peopleSay w-full">

            {/* The container for the People Say section */}
            <div className="peopleSay-container w-full max-w-[1400px] mx-auto px-5 my-10">

                {/* The heading for the PeopleSay and the controls */}
                <div className="flex sm:flex-row justify-between items-center mb-16">
                    {/* The heading */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-y-2 sm:gap-x-3 ">

                        {/* The Aesthetic quote */}
                        <div className="flex items-center justify-center w-24 h-24 bg-pinkBrown rounded-full mb-1 sm:mb-0">
                            <img 
                            src={quote} 
                            alt="Quote"
                            className="w-1/2"
                            />
                        </div>

                        {/* The title */}
                        <h3 className='open-sans-bold text-3xl leading-[110%]'>
                        What People Are Saying
                        <br />
                        About My Work
                        </h3>
                    

                    </div>

                    {/* The controls */}
                    <div className="hidden sm:flex flex-row gap-x-5">
                        {/* The previous button */}
                        <button
                        className="flex items-center justify-center bg-darkGreen text-white w-16 h-16 text-2xl rounded-full">
                            <i className="fa-light fa-arrow-left"></i>
                        </button>

                        {/* The next button */}
                        <button 
                        className="flex items-center justify-center bg-darkGreen text-white w-16 h-16 text-2xl rounded-full">
                            <i className="fa-light fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                {/* The body content of the PeopleSay section */}
                <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
                    <Slider />
                    {/* The swiper
                    <swiper-container
                    ref={swiperElRef}
                    className="swiper flex justify-center lg:justify-start lg:w-3/5"
                    speed="3000" 
                    loop="true"
                    slides-per-view="1"
                    >

                        {/* Swiper slide 1 *
                        <swiper-slide className="swiper-slide text-lg w-3/4 text-center lg:text-start ">

                            <div className="leading-[160%] italic">
                                <span className="inter-light-italic">
                                    As CEO, I'm thrilled with the impact of our recent machine learning project. It's revolutionized our operations, boosting efficiency and driving unprecedented growth.
                                </span> 

                                <span 
                                className="text-pinkBrown inter-medium-italic">
                                &nbsp;Kudos
                                </span>

                                <span className="inter-light-italic"> to the team for their 
                                <span className="inter-medium-italic"> innovative solutions and dedication.</span>
                                </span>
                            </div>

                            {/* The name and other details *
                            <div className="testifier leading-[130%]">
                                <h6
                                className='open-sans-bold text-xl mt-5 mb-2'
                                >
                                    Nancy Ubban
                                </h6>
                                <p className="text-sm inter-light">
                                    CEO, Tech Solutions
                                </p>
                            </div>
                        </swiper-slide>

                        {/* Swiper slide 2 *
                        <swiper-slide className="swiper-slide text-lg w-3/4 text-center lg:text-start ">

                            <div className="leading-[160%] italic">
                                <span className="inter-light-italic">
                                    As CEO, I'm thrilled with the impact of our recent machine learning project. It's revolutionized our operations, boosting efficiency and driving unprecedented growth.
                                </span> 

                                <span 
                                className="text-pinkBrown inter-medium-italic">
                                &nbsp;Kudos
                                </span>

                                <span className="inter-light-italic"> to the team for their 
                                <span className="inter-medium-italic"> innovative solutions and dedication.</span>
                                </span>
                            </div>

                            {/* The name and other details *
                            <div className="testifier leading-[130%]">
                                <h6
                                className='open-sans-bold text-xl mt-5 mb-2'
                                >
                                    Adedamola Ubong
                                </h6>
                                <p className="text-sm inter-light">
                                    CEO, Tech Solutions
                                </p>
                            </div>
                        </swiper-slide>

                        {/* Swiper slide 3 *
                        <swiper-slide className="swiper-slide text-lg w-3/4 text-center lg:text-start ">

                            <div className="leading-[160%] italic">
                                <span className="inter-light-italic">
                                    As CEO, I'm thrilled with the impact of our recent machine learning project. It's revolutionized our operations, boosting efficiency and driving unprecedented growth.
                                </span> 

                                <span 
                                className="text-pinkBrown inter-medium-italic">
                                &nbsp;Kudos
                                </span>

                                <span className="inter-light-italic"> to the team for their 
                                <span className="inter-medium-italic"> innovative solutions and dedication.</span>
                                </span>
                            </div>

                            {/* The name and other details *
                            <div className="testifier leading-[130%]">
                                <h6
                                className='open-sans-bold text-xl mt-5 mb-2'
                                >
                                    Lacie Anastasia
                                </h6>
                                <p className="text-sm inter-light">
                                    CEO, Tech Solutions
                                </p>
                            </div>
                        </swiper-slide>

                        {/* Swiper slide 1 *
                        <swiper-slide className="swiper-slide text-lg w-3/4 text-center lg:text-start ">

                            <div className="leading-[160%] italic">
                                <span className="inter-light-italic">
                                    As CEO, I'm thrilled with the impact of our recent machine learning project. It's revolutionized our operations, boosting efficiency and driving unprecedented growth.
                                </span> 

                                <span 
                                className="text-pinkBrown inter-medium-italic">
                                &nbsp;Kudos
                                </span>

                                <span className="inter-light-italic"> to the team for their 
                                <span className="inter-medium-italic"> innovative solutions and dedication.</span>
                                </span>
                            </div>

                            {/* The name and other details *
                            <div className="testifier leading-[130%]">
                                <h6
                                className='open-sans-bold text-xl mt-5 mb-2'
                                >
                                    Nancy Ubban
                                </h6>
                                <p className="text-sm inter-light">
                                    CEO, Tech Solutions
                                </p>
                            </div>
                        </swiper-slide>

                        {/* Swiper slide 1 *
                        <swiper-slide className="swiper-slide text-lg w-3/4 text-center lg:text-start ">

                            <div className="leading-[160%] italic">
                                <span className="inter-light-italic">
                                    As CEO, I'm thrilled with the impact of our recent machine learning project. It's revolutionized our operations, boosting efficiency and driving unprecedented growth.
                                </span> 

                                <span 
                                className="text-pinkBrown inter-medium-italic">
                                &nbsp;Kudos
                                </span>

                                <span className="inter-light-italic"> to the team for their 
                                <span className="inter-medium-italic"> innovative solutions and dedication.</span>
                                </span>
                            </div>

                            {/* The name and other details *
                            <div className="testifier leading-[130%]">
                                <h6
                                className='open-sans-bold text-xl mt-5 mb-2'
                                >
                                    Nancy Ubban
                                </h6>
                                <p className="text-sm inter-light">
                                    CEO, Tech Solutions
                                </p>
                            </div>
                        </swiper-slide>

                        {/* Swiper slide 1 *
                        <swiper-slide className="swiper-slide text-lg w-3/4 text-center lg:text-start ">

                            <div className="leading-[160%] italic">
                                <span className="inter-light-italic">
                                    As CEO, I'm thrilled with the impact of our recent machine learning project. It's revolutionized our operations, boosting efficiency and driving unprecedented growth.
                                </span> 

                                <span 
                                className="text-pinkBrown inter-medium-italic">
                                &nbsp;Kudos
                                </span>

                                <span className="inter-light-italic"> to the team for their 
                                <span className="inter-medium-italic"> innovative solutions and dedication.</span>
                                </span>
                            </div>

                            {/* The name and other details *
                            <div className="testifier leading-[130%]">
                                <h6
                                className='open-sans-bold text-xl mt-5 mb-2'
                                >
                                    Nancy Ubban
                                </h6>
                                <p className="text-sm inter-light">
                                    CEO, Tech Solutions
                                </p>
                            </div>
                        </swiper-slide>

                    </swiper-container> */}
                    
                    {/* The image highight */}
                    <div className="curvyCircle mb-4 lg:mb-0 lg:w-5/12">
                        {/* This is the curvy Circle */}
                    </div>
                </div>

            </div>

        </div>
    )
}