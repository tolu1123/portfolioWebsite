import React from 'react';
import {useNavigate} from 'react-router-dom'

import blogButtonBG from '../../public/images/blog/blogButtonBG.png'
import pin from '../../public/images/blog/pin-icon.svg'

export default function Blog() {
    const navigate = useNavigate();

    return (
        <div className='blog w-full'>
        
            <div id='blog' className="blog-container w-full relative max-w-[1400px] mx-auto bg-highlightGreen flex flex-col items-center justify-content py-16 px-5">

                {/* The heading */}
                <div className="mb-10">
                    <h3
                    className='open-sans-bold text-3xl text-darkGreen leading-[110%] mb-5 text-center'
                    >
                        My Blog
                    </h3>

                    <p
                    className='text-center max-w-lg'
                    >
                        Here my deep understanding on my skillset can be found. It also helps to contribute to the total society at large
                    </p>
                </div>

                {/* The block of blogs */}
                <div className="blogBlock w-full flex flex-col sm:flex-row gap-6 sm:gap-10 sm:px-4 lg:px-20">

                    <div className="sm:w-1/2 bg-white pt-8 pb-12 px-8 rounded-3xl">
                        {/* The div for the image */}
                        <div className="overflow-hidden rounded-2xl mb-4">

                            {/* This element is used for the image */}
                            <img 
                            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*gQxsmXuyEbaNbtP-.jpg" 
                            alt="A picture on Genetic mutation"
                            className='w-full aspect-[1100/619] object-cover'
                            />

                        </div>

                        {/* The data for the blog */}
                        <div className="">
                            {/* div for the tag */}
                            <div className="tag flex flex-row gap-3 mb-4">

                                {/* The date tag */}
                                <span className="date bg-blushPink text-coralPink inline-block text-xs inter-medium px-4 py-2 rounded-full">
                                    October 5, 2022
                                </span>

                                {/* The blog category */}
                                <span className="bg-frostedWhite text-seaFoamBlue inline-block text-xs inter-medium px-4 py-2 rounded-full">
                                    Machine Learning
                                </span>
                            </div>

                            {/* The title of the blog */}
                            <h4 className="blogTitle open-sans-bold text-lg leading-[130%] mb-1">
                                Genetic Algorithm as a Solution to Large Optimization Problems
                            </h4>

                            {/* Hook piece */}
                            <p className="inter-regular text-sm line-clamp-2 text-ellipsis mb-4">
                                Long time ago, nature solved the problem of living with the existence species that can adapt and survive in different kinds of environments on earth. An example of this is evident in the variation of bears such as North American bear, Polar bear, brown bear. The different types of bears are solutions to bear adaptation in their respective geographic location. Likewise, Genetic Algorithm is a copycat of this natural phenomenon in computer science and operation research.
                            </p>

                            {/* The button to read more of the blog */}
                            <a
                            target='_blank'
                            href='https://medium.com/@amokunridwan/genetic-algorithm-as-a-solution-to-large-optimization-problems-6cd407e6181a'
                            className="inline-block bg-darkGreen hover:bg-white text-white transition-all duration-150 ease-linear hover:text-darkGreen inter-medium text-sm leading-[130%] rounded-full px-4 py-2 shadow-sm shadow-darkGreen text-nowrap"
                            >
                                Read More
                            </a>
                        </div>

                    </div>


                    {/* The second blog */}
                    <div className="sm:w-1/2 bg-white pt-8 pb-12 px-8 rounded-3xl">
                        {/* The div for the image */}
                        <div className="overflow-hidden rounded-2xl mb-4">

                            {/* This element is used for the image */}
                            <img 
                            src="https://miro.medium.com/v2/resize:fit:1400/format:webp/0*NpH0SfWvaYm8E03I" 
                            alt="A picture on Genetic mutation"
                            className='w-full aspect-[1100/619] object-cover'
                            />

                        </div>

                        {/* The data for the blog */}
                        <div className="">
                            {/* div for the tag */}
                            <div className="tag flex flex-row gap-3 mb-4">

                                {/* The date tag */}
                                <span className="date bg-blushPink text-coralPink inline-block text-xs inter-medium px-4 py-2 rounded-full">
                                    November 4, 2023
                                </span>

                                {/* The blog category */}
                                <span className="bg-frostedWhite text-seaFoamBlue inline-block text-xs inter-medium px-4 py-2 rounded-full">
                                    Web Automation
                                </span>
                            </div>

                            {/* The title of the blog */}
                            <h4 className="blogTitle open-sans-bold text-lg leading-[130%] mb-1">
                                Arachno-Magic with Selenium: Spidey-Senses for Web Scraping
                            </h4>

                            {/* Hook piece */}
                            <p className="inter-regular text-sm line-clamp-2 text-ellipsis mb-4">
                            Yep….you want to say Selenium is dead! Really? Am not going to convince you about that, at the end of the article you might even get more confused 😂. Well, I wrote this probably because it hasn't been working!
                            </p>

                            {/* The button to read more of the blog */}
                            <a
                            target='_blank'
                            href='https://medium.com/@amokunridwan/arachno-magic-with-selenium-spidey-senses-for-web-scraping-5fe8ce30334d'
                            className="inline-block bg-darkGreen hover:bg-white text-white transition-all duration-150 ease-linear hover:text-darkGreen inter-medium text-sm leading-[130%] rounded-full px-4 py-2 shadow-sm shadow-darkGreen text-nowrap"
                            >
                                Read More
                            </a>
                        </div>

                    </div>

                </div>

                {/* The More Blogs button */}
                <div className="relative flex justify-center items-center mt-20 w-full ">

                    <img 
                    src={blogButtonBG}
                    alt=""
                    width='165'
                    // height='114'
                    className='absolute z-0 aspect-[31/20]' 
                    />

                    <a 
                    // href='./blog'
                    // We are adding the aspect-ratio to cover the background image.
                    className='z-[1] width-[165px] aspect-[31/20] flex items-center justify-center'
                    onClick={() => {
                        navigate('./blog')
                    }}
                    >
                        <button
                        type='button'
                        className='flex items-center justify-center gap-1 inter-medium text-lg text-darkGreen leading-[160%]'
                        >
                            <img 
                            src={pin}
                            width='23.32'
                            className='aspect-[35/34]' 
                            alt="" />
                            <span>More Blog</span>
                        </button>
                    </a>

                </div>

            </div>

        </div>
    )
}