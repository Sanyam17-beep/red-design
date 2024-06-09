import React, { useEffect, useState } from 'react'
import Carosuel from './Carosuel'
import L2R from './L2R'
import Overlay from './Overlay'
import About from "./About"

import Lrcontainer from "./Lrcontainer.jsx"
const Home = () => {
  
  const [screenSize, setScreenSize] = useState({
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth >= 768 && window.innerWidth <= 1200,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth <= 1200,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
   <>
        <Carosuel></Carosuel>
        
        {screenSize.isMobile ? <Lrcontainer /> : screenSize.isTablet ? <Lrcontainer /> : <L2R/>}
    
        <Overlay></Overlay>
        <About></About>
   </>
  )
}

export default Home