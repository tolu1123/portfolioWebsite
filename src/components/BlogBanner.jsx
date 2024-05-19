import React from "react";

import Header from "./Header";

export default function BlogBanner() {
    return(
        <div className="blog-banner w-full">
            <div
            className="banner w-full max-w-[1400px] mx-auto min-h-fit flex flex-col"
            >
                {/* The header */}
                <Header root={false} />

                {/* The title */}
                <div 
                className="title grow flex items-center justify-center"
                >

                    <h1
                    className="open-sans-extrabold text-3xl text-[2.5rem] leading-[130%] sm:text-[3.2rem]"
                    >Blog</h1>

                </div>

            
            </div>
        </div>
    )
}