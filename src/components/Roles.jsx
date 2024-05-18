import React from 'react'

import squiggly from '../../public/images/roles/squiggly1x.png'

export default function Roles() {
    return (
        <div className='roles w-full'>

            <div className='roles-container w-full relative max-w-[1400px] mx-auto py-10 px-6 sm:py-20 sm:px-40 grid grid-cols-1 lg:grid-cols-2 gap-y-8 place-items-start overflow-hidden'>

                {/* The squiggly on the left */}
                <div className="absolute left-0 bottom-10 sm:top-1/2 sm:translate-y-1/4 sm:-translate-x-[16%] z-[5]">
                    <img 
                    src={squiggly} 
                    className='w-[200px] h-[91px]'
                    alt="Squiggly" />
                </div>

                {/* The squiggly on the right */}
                <div className="absolute right-0 top-10 sm:top-1/2 sm:-translate-y-1/4 sm:translate-x-1/4 z-[5]">
                    <img 
                    src={squiggly} 
                    className='w-[200px] h-[91px]'
                    alt="" />
                </div>

                {/* The Machine Learning Role */}
                <div className="relative ml-role pt-5 pl-20 pb-6 w-fit">

                    <span className="absolute top-4 left-10 text-purple-900 text-2xl">
                        <i className="fa-light fa-microchip"></i>
                    </span>

                    <h4 
                    className='inline-block open-sans-semibold text-xl leading-[130%] mb-3'
                    >
                        Machine Learning
                    </h4>

                    <p
                    className='inter-regular leading-[160%] text-charcoalGray'
                    >
                        I create Models that scales well and work well with the predefined set of data.
                    </p>
                </div>

                {/* The Enginnering Role */}
                <div className="relative engr-role pt-5 pl-20 pb-6">

                    <span className="absolute top-4 left-10 text-orange-700 text-2xl">
                        <i className="fa-sharp fa-light fa-gear"></i>
                    </span>                

                    <h4 className='open-sans-semibold text-xl leading-[130%] mb-3'>
                        Mechanical Engineering
                    </h4>

                    <p
                    className='inter-regular leading-[160%] text-charcoalGray'
                    >
                        I am available for all sorts of mechanical engineering roles. I have experience in designing and simulating engineering designs.
                    </p>
                </div>


            </div>

        </div>
    )
}