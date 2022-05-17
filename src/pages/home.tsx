import React from 'react'
import Header from '../components/sections/header/header';
import Token from '../components/sections/token/token';
import Portfolio from '../components/sections/portfolio/portfolio';
import Roadmap from '../components/sections/roadmap/roadmap';
import Faq from '../components/sections/faq/faq';
import Team from '../components/sections/team/team';
import Contact from '../components/sections/contact/contact';
import Footer from '../components/footer/footer'

const Home : React.FC= () => {
    return (
        <>
            <Header />
            <Token />
            <Portfolio />
            <Roadmap />
            <Faq />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}

export default Home