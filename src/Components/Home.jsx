import React from 'react'
import Carosuel from './Carosuel'
import L2R from './L2R'
import Overlay from './Overlay'
import About from "./About"

import Lrcontainer from "./Lrcontainer.jsx"
const Home = () => {
  const isMobile = window.innerWidth <= 768;
  return (
   <>
        <Carosuel></Carosuel>
        
        {isMobile ? <Lrcontainer/>:<L2R/>}
        <Overlay></Overlay>
        <About></About>
   </>
  )
}

export default Home