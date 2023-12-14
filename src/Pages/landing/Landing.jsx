import React from 'react';
import { NavBar, TabBar } from '../../global/components/navBar';
import Hero from './components/hero';
import ImageCollection from './components/hero/ImageCollection'; // Correct the import path if needed

const Landing = () => {
  return (
    <>    
      <NavBar /> {/* components*/}
      <TabBar />  
      <Hero />
      <ImageCollection />
    </>
  );
};

export default Landing;
