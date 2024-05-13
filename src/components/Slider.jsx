import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
  return (
    <Swiper
        className="swiper flex justify-center lg:justify-start w-3/4 lg:w-6/12"
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
      onSwiper={(swiper) => console.log(swiper, 'This is the index of the active slide: ',swiper.activeIndex)}
      onSlideChange={(swiper) => console.log('slide change','This is the index of the active slide: ',swiper.realIndex)}
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

export {Slider, }