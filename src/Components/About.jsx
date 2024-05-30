import { Box, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import AppsIcon from "@mui/icons-material/Apps";
import "../styles/about.css";
import Footer from "./Footer";
import CardGrid from "./CardGrid";
import MobileCardGrid from "./MobileCardGrid";
const About = () => {
    const isMobile = window.innerWidth <= 768;
  return (
    // <Box display="flex" padding="10px" marginTop="50px">
    //     <Box textAlign="center" flexDirection="column" alignItems="flex-start" display="flex">
    //         <Typography component="h3" padding="20px" textAlign="left" lineHeight="1.4" fontWeight="bold" fontSize="36px">About Us</Typography>
    //         <Box>
    //             <Typography component="p"  textAlign="justify">
    //                 Our journey in the world of interior design is a story of creativity, inspiration, and innovation. With a deep understanding of architectural principles and a flair for aesthetics, we bring life to your spaces. Every project we undertake is a testament to our dedication to excellence and our passion for design. Our portfolio spans a wide range of styles, from contemporary and minimalistic to classic and opulent. We collaborate closely with our clients, ensuring that their preferences and needs are at the forefront of our designs. Our mission is to create interiors that not only capture the imagination but also enhance the functionality of each space.
    //             </Typography>
    //         </Box>

    //         <Box bgcolor="black" display="flex" width="max-content" marginLeft="50px" >
    //             <Box bgcolor="gray">
    //                 <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
    //             </Box>
    //             <Typography color="white" fontSize="large">Read More</Typography>
    //         </Box>

    //     </Box>
    //     <Box display="flex" flexDirection="column" textAlign="center" justifyContent="center">
    //         <div style={{border:"10px solid gray"}} className='circle'></div>
    //         <Typography component='span' fontSize="90px" fontWeight="bold" >7+</Typography>
    //         <Typography component='span' fontSize="86px">Years</Typography>
    //     </Box>

    // </Box>
    <>
      <div className="About-container">
        <div className="About-section">
          <div className="About-content">
            <div className="About-header"> About Us</div>
            <div className="About-data">
              Our journey in the world of interior design is a story of
              creativity, inspiration, and innovation. With a deep understanding
              of architectural principles and a flair for aesthetics, we bring
              life to your spaces. Every project we undertake is a testament to
              our dedication to excellence and our passion for design. Our
              portfolio spans a wide range of styles, from contemporary and
              minimalistic to classic and opulent. We collaborate closely with
              our clients, ensuring that their preferences and needs are at the
              forefront of our designs. Our mission is to create interiors that
              not only capture the imagination but also enhance the
              functionality of each space.
            </div>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              bgcolor="black"
              width="fit-content"
              padding="10px"
            >
              <Box>
                <Typography
                  fontSize="large"
                  fontFamily="monospace"
                  color="white"
                  paddingRight="20px"
                  paddingLeft="22px"
                >
                  Read More
                </Typography>
              </Box>
              <Box bgcolor="white" padding="5px">
                <KeyboardArrowRightIcon
                  fontSize="small"
                  sx={{ color: "black" }}
                ></KeyboardArrowRightIcon>
              </Box>
            </Box>
          </div>
          <div className="image-sect">
            <div className="seven" style={{ fontSize: "120px" }}>
              7
            </div>
            <div className="plus" style={{ fontSize: "100px" }}>
              +
            </div>
            <div className="year" style={{ fontSize: "86px" }}>
              Years
            </div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <div
        style={{ width: "100%", height: "80vh", backgroundColor: "black" }}
      ></div>
      <div className="Content-container">
        <div className="image-back"></div>
        <div className="Content-content-container">
          <div className="Content-content-header">
            Commercial Interior Designs
          </div>
          <div className="Content-content-data">
            At Commercial Interior Designs, we are dedicated to redefining and
            revitalizing workspaces. Our team of experienced designers and
            professionals understands the importance of creating environments
            that foster productivity, creativity, and well-being. With a keen
            eye for detail and a commitment to excellence, we transform
            commercial spaces into functional, aesthetically pleasing, and
            inspiring places to work.
          </div>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            bgcolor="black"
            width="fit-content"
            padding="10px"
          >
            <Box>
              <Typography
                fontSize="large"
                fontFamily="monospace"
                color="white"
                paddingRight="20px"
                paddingLeft="22px"
              >
                View Projects
              </Typography>
            </Box>
            <Box
              bgcolor="white"
              padding="5px"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppsIcon fontSize="small" sx={{ color: "black" }}></AppsIcon>
            </Box>
          </Box>
        </div>
      </div>
      <div className="Content-container">
        <div className="Content-content-container">
          <div className="Content-content-header">
            Residential Interior Designs
          </div>
          <div className="Content-content-data">
            Our goal at Residential Interior Designs is to create a genuinely
            homey atmosphere in your living areas. Our skilled team of
            decorators and designers understands the value of a
            well-thought-out, comfortable home. Since your house is your haven,
            we work hard to make every area of it more beautiful and useful with
            designs that reflect your own tastes and personality.
          </div>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            bgcolor="black"
            width="fit-content"
            padding="10px"
          >
            <Box>
              <Typography
                fontSize="large"
                fontFamily="monospace"
                color="white"
                paddingRight="20px"
                paddingLeft="22px"
              >
                View Projects
              </Typography>
            </Box>
            <Box
              bgcolor="white"
              padding="5px"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AppsIcon fontSize="small" sx={{ color: "black" }}></AppsIcon>
            </Box>
          </Box>
        </div>
        <div className="image-back"></div>
      </div>
      <div className="cards-container">
      {isMobile ? <MobileCardGrid /> : <CardGrid />}
      </div>
      
      <div className="stat-container">
        <div className="stat-header">Our Stats</div>
        <div className="stats-boxes">
          <div className="stat-box">
            <div className="stat-content">
              <div className="Digit">15</div>
              <div className="Digit-bottom">Creative Designers</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-content">
              <div className="Digit">730+</div>
              <div className="Digit-bottom">Projects</div>
            </div>
          </div>
          <div className="stat-box">
            <div className="stat-content">
              <div className="Digit">250</div>
              <div className="Digit-bottom">Clients</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
