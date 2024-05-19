import React from "react";

export default function BlogBlock() {
    return (

        // {/* The block of blogs */}
        <div className="w-full">

            <div className="blogBlock bg-highlightGreen w-full max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 px-5 sm:px-10 lg:px-32 py-10">

                <div className="bg-white pt-8 pb-12 px-8 rounded-3xl">
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
                        <h4 className="blogTitle open-sans-bold text-lg leading-[140%] mb-1">
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
                <div className="bg-white pt-8 pb-12 px-8 rounded-3xl">
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
                        <h4 className="blogTitle open-sans-bold text-lg leading-[140%] mb-1">
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

                {/* The third blog */}
                <div className="bg-white pt-8 pb-12 px-8 rounded-3xl">
                    {/* The div for the image */}
                    <div className="overflow-hidden rounded-2xl mb-4">

                        {/* This element is used for the image */}
                        <img 
                        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*8lMnZ45_sN0CnLAa.jpg" 
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
                                May 12, 2023
                            </span>

                            {/* The blog category */}
                            <span className="bg-frostedWhite text-seaFoamBlue inline-block text-xs inter-medium px-4 py-2 rounded-full">
                                Machine Learning
                            </span>
                        </div>

                        {/* The title of the blog */}
                        <h4 className="blogTitle open-sans-bold text-lg leading-[140%] mb-1">
                        Implementing Multivariate Linear Regression with Sckit-Learn API for House Price Prediction in Mexico City
                        </h4>

                        {/* Hook piece */}
                        <p className="inter-regular text-sm line-clamp-2 text-ellipsis mb-4">
                        Have you ever wondered how machine learning models can predict the prices of houses or even the amount of tip a waiter might receive? These predictions are made possible through a branch of machine learning called Supervised learning, where models are trained on labelled data to predict values for unseen data.
                        </p>

                        {/* The button to read more of the blog */}
                        <a
                        target='_blank'
                        href='https://medium.com/@amokunridwan/implementing-multivariate-linear-regression-with-sckit-learn-api-for-house-price-prediction-in-68f87d0aec08'
                        className="inline-block bg-darkGreen hover:bg-white text-white transition-all duration-150 ease-linear hover:text-darkGreen inter-medium text-sm leading-[130%] rounded-full px-4 py-2 shadow-sm shadow-darkGreen text-nowrap"
                        >
                            Read More
                        </a>
                    </div>

                </div>


                {/* The fourth blog */}
                <div className="bg-white pt-8 pb-12 px-8 rounded-3xl">
                    {/* The div for the image */}
                    <div className="overflow-hidden rounded-2xl mb-4">

                        {/* This element is used for the image */}
                        <img 
                        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/0*T-kybKUs490MnnCH.jpeg" 
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
                                November 3, 2022
                            </span>

                            {/* The blog category */}
                            <span className="bg-frostedWhite text-seaFoamBlue inline-block text-xs inter-medium px-4 py-2 rounded-full">
                                Machine Learning
                            </span>
                        </div>

                        {/* The title of the blog */}
                        <h4 className="blogTitle open-sans-bold text-lg leading-[140%] mb-1">
                            Binary Classification with Pycaret
                        </h4>

                        {/* Hook piece */}
                        <p className="inter-regular text-sm line-clamp-2 text-ellipsis mb-4">
                            Automated machine learning also referred to as AutoML is an approach to reduce trial and error processes by Data scientists and Machine Learning engineers. Common AutoML tools are Pycaret, Auto-SKLearn, Auto-Keras, MLBOX, TPOT, RapidMiner, etc. In this article, I would work through the process of building classification models with Pycaret.
                        </p>

                        {/* The button to read more of the blog */}
                        <a
                        target='_blank'
                        href='https://medium.com/@amokunridwan/binary-classification-with-pycaret-cf691938debb'
                        className="inline-block bg-darkGreen hover:bg-white text-white transition-all duration-150 ease-linear hover:text-darkGreen inter-medium text-sm leading-[130%] rounded-full px-4 py-2 shadow-sm shadow-darkGreen text-nowrap"
                        >
                            Read More
                        </a>
                    </div>

                </div>



            </div>
        </div>
    )
}