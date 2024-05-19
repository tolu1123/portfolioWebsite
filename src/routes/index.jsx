import React, {useEffect,useContext} from 'react'

import {LinkContext} from '../main'

// We will import our needed components
import Banner from '../components/Banner'
import About from '../components/About'
import Works from '../components/Works'
import PeopleSay from '../components/PeopleSay'
import Connect from '../components/Connect'
import Skills from '../components/Skills'
import Roles from '../components/Roles'
import Blog from '../components/Blog'
import HireMe from '../components/HireMe'
import Footer from '../components/Footer'


function Index() {

    //  This received context enables our header to be reusable and at the same time navigates from several other pages to some sections in this page.
    const {linkValue} = useContext(LinkContext);
    useEffect(() => {
        if(linkValue !== ' ') {
            window.location.href = `#${linkValue}`;
        }
    }, [linkValue])

    return (
                <>
                    <Banner />
                    <About />
                    <Works />
                    <PeopleSay />
                    <Connect />
                    <Skills />
                    <Roles />
                    <Blog />
                    <HireMe />
                    <Footer />
                </>
             
    )
}

export {Index}