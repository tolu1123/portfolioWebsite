import React from 'react'

// We will import our needed components
import Banner from '../components/Banner'
import About from '../components/About'
import Works from '../components/Works'
import PeopleSay from '../components/PeopleSay'

function Index() {
    return (
        <>
            <Banner />
            <About />
            <Works />
            <PeopleSay />
        </>
    )
}

export {Index}