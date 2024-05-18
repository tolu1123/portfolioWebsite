import React, {useState, useEffect, useRef} from 'react';

import { register } from 'swiper/element/bundle';

import client1 from '../../public/images/peopleSay/client1.png'
import client2 from '../../public/images/peopleSay/client2.png'
import client3 from '../../public/images/peopleSay/client3.png'
import client4 from '../../public/images/peopleSay/client4.png'
import client5 from '../../public/images/peopleSay/client5.png'

//Initializing the swiper
register()

import quote from '../../public/images/peopleSay/quote0.5x.png'
import {Slider} from './Slider'

export default function PeopleSay() {
    // This is the swiper state that will be passed from the slide component to this component.
    const [swiper, setSwiper] = useState(null);

    // This is the slideIndex that will be set by the slide component when the slide from the swiper changes.
    const [slideIndex, setSlideIndex] = useState(null)

    const handleNextSlide = () => {
        if (swiper) {
          swiper.slideNext();
        }
    };
    
    const handlePrevSlide = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };


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
                        className="flex items-center justify-center bg-darkGreen text-white w-16 h-16 text-2xl rounded-full"
                        onClick={handlePrevSlide}
                        >
                            <i className="fa-light fa-arrow-left"></i>
                        </button>

                        {/* The next button */}
                        {/* <SlideNextButton /> */}
                        <button 
                        className="flex items-center justify-center bg-darkGreen text-white w-16 h-16 text-2xl rounded-full"
                        onClick={handleNextSlide}
                        >
                            <i className="fa-light fa-arrow-right"></i>
                        </button>
                    </div>
                </div>

                {/* The body content of the PeopleSay section */}
                <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-center lg:justify-between">
                    <Slider 
                    slideSwiper={swiper}
                    setSwiper={
                        (data) => {
                            setSwiper(data)
                        }
                    }
                    setSlideIndex = {(data) => {
                        // We are passing this function to set the slideIndex state.
                        setSlideIndex(data)
                    }
                    }
                    />
                     
                    
                    {/* This is the curvy Circle */}
                    <div className="curvyCircle relative mb-14 lg:mb-0 lg:w-5/12">
                    {/* The image highight */}

                    {/* The image of the testimony givers     */}

                    {/* Picture 1 */}
                    <div
                    className='absolute top-0 p-3 bg-white left-10 -translate-x-[6.16%] -translate-y-[35%] rounded-full z-[3]'
                    >
                        <img 
                        src={client1} 
                        alt="" 
                        className={['w-[40px]', 'h-[40px]', 'sm:w-[80px]', 'sm:h-[80px]', 'transition-all', 'duration-200', 'ease-linear', 'outline-offset-4', 'rounded-full', 'outline-2','outline-pinkBrown/75', slideIndex === 0 ?  'outline': null].join(' ')}
                        />
                    </div>
                    
                    {/* Picture 2 */}
                    <div
                    className='absolute top-0 right-0 -translate-x-[30.5%] sm:-translate-x-1/4 -translate-y-[15%] sm:translate-y-[12.5%] p-2.5 bg-white rounded-full z-[3] overflow-hidden'
                    >
                        <img 
                        src={client2} 
                        alt=""
                        className={['w-[35px]', 'h-[35px]', 'sm:w-[60px]', 'sm:h-[60px]', 'transition-all', 'duration-200', 'ease-linear', 'outline-offset-4', 'rounded-full', 'outline-2','outline-pinkBrown/75', slideIndex === 1 ?  'outline': null].join(' ')}
                        />
                    </div>
                    
                    {/* Picture 3 */}
                    <div
                    className='absolute bottom-0 right-0 translate-x-[10%] sm:-translate-x-1/4 translate-y-[25%] sm:translate-y-1/4 p-3 bg-white rounded-full z-[3] overflow-hidden'
                    >
                        <img 
                        src={client3} 
                        alt="" 
                        className={['w-[60px]', 'h-[60px]', 'sm:w-[95px]', 'sm:h-[95px]', 'transition-all', 'duration-200', 'ease-linear', 'outline-offset-4', 'rounded-full', 'outline-2','outline-pinkBrown/75', slideIndex === 2 ?  'outline': null].join(' ')}
                        />

                    </div>
                    
                    {/* Picture 4 */}
                    <div
                    className='absolute bottom-0 left-0 translate-x-[] translate-y-1/4 p-3 bg-white rounded-full z-[3] overflow-hidden'
                    >
                        <img 
                        src={client4} 
                        alt="" 
                        className={['w-[90px]', 'h-[90px]', 'sm:w-[120px]', 'sm:h-[120px]', 'transition-all', 'duration-200', 'ease-linear', 'outline-offset-4', 'rounded-full', 'outline-2','outline-pinkBrown/75', slideIndex === 3 ?  'outline': null].join(' ')}
                        />
                    </div>
                    
                    {/* Picture 5 */}
                    <div
                    className='flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-[20px] -translate-y-1/2 p-3 bg-white rounded-full z-[3] realtive overflow-hidden'
                    >
                        {/* <span class="animate-slow-ping absolute inline-flex h-full w-full rounded-full bg-pinkBrown opacity-75"></span> */}
                        <img 
                        src={client5}
                        alt="" 
                        className={['w-[55px]', 'h-[55px]', 'sm:w-[92px]', 'sm:h-[92px]', 'transition-all', 'duration-200', 'ease-linear', 'outline-offset-4', 'rounded-full', 'outline-2','outline-pinkBrown/75', slideIndex === 4 ?  'outline': null].join(' ')}
                        />
                    </div>


                    </div>
                </div>

            </div>

        </div>
    )
}