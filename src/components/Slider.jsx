import React, {useState, useEffect} from 'react';

import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function Slider({setSwiper, setSlideIndex, slideSwiper}) {

    const [slideIndexHolder, setSlideIndexHolder] = useState(null)


    useEffect(() => {
        // Once the slideIndexHolder has been updated, the code here will run
        // The reason this code is in a useEffect is to prevent unnecessary rerenders
        
        //The code here is to update the slideIndex on the peopleSay section of the code.
        setSlideIndex(slideIndexHolder)

    }, [slideIndexHolder])



  return (
    <Swiper
        className="swiper flex flex-col justify-center lg:justify-start w-3/4 lg:w-5/12 items-center"
      // install Swiper modules
      modules={[Pagination, A11y]}
      loop={true}
      autoplay= {{
        delay: 5000,
      }
      }
      spaceBetween={0}
      slidesPerView={1}
      pagination={{clickable: true }}
      onSwiper={(swiper) => {
    
        if(setSwiper && swiper && swiper !== slideSwiper){
            // update the setSwiper in peopleSay.jsx
            // This is the code that makes the Swiper Object Api available outside this component and inside the PeopleSay section, which is required to control navigations of the swiper
            setSwiper(swiper)
        }
    }}
      onSlideChange={(swiper) => {
        // This piece of code is to prevent unnecessary changing of state.
        (slideIndexHolder === null || slideIndexHolder !== swiper.realIndex) ? setSlideIndexHolder(swiper.realIndex) : null;
        }}
    >
        <SwiperSlide
        className="swiper-slide text-lg w-3/4 text-center lg:text-start "
        > 
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

            {/* The name and other details */}
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
        </SwiperSlide>

        <SwiperSlide
        className="swiper-slide text-lg w-3/4 text-center lg:text-start "
        > 
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

            {/* The name and other details */}
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
        </SwiperSlide>

        <SwiperSlide
      className="swiper-slide text-lg w-3/4 text-center lg:text-start "
      > 
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

            {/* The name and other details */}
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
        </SwiperSlide>
      
        <SwiperSlide
      className="swiper-slide text-lg w-3/4 text-center lg:text-start "
      > 
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

            {/* The name and other details */}
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
        </SwiperSlide>

        <SwiperSlide
      className="swiper-slide text-lg w-3/4 text-center lg:text-start "
      > 
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

            {/* The name and other details */}
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
        </SwiperSlide>

    </Swiper>
  );
};

// function SlideNextButton() {
//     const swiper = useSwiper();
  

//     return () => {
        
//     }
//   }

 
export {Slider}