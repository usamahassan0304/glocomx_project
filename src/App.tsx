import React from 'react';
import './App.css';
import Header from './components/sections/header/header';
import Updates from './components/sections/updates/updates';
import Works from "./components/sections/works/works";
import Nft from "./components/sections/nft/nft";
import Token from './components/sections/token/token';
import Model from './components/sections/model/model';
import Portfolio from "./components/sections/portfolio/portfolio"
import Startup from './components/sections/startups/startup';
import Sale from './components/sections/sale/sale';
import Faq from './components/sections/faq/faq';
import Team from "./components/sections/team/team";
import Advisors from './components/sections/advisors/advisors';
import Contact from "./components/sections/contact/contact"



const App : React.FC = () => {
  return (
    <>
      <Header />
      <Updates />
      <Works />
      <Nft />
      <Token />
      <Model />
      <Portfolio />
      <Startup />
      <Sale />
      <Faq />
      <Team />
      <Advisors />
      <Contact />
    </>
  );
}

export default App;
