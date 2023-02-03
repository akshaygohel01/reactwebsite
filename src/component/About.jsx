import React from "react";
import Common from "./Common";
import img3 from "../images/img3.jfif"
const About = () => {
  return (
    <>
      <Common 
      name="Welcome to About Page" 
      imgsrc={img3} 
      visit="/contact" 
      btnname="Contact Now"/>
    </>
  );
};

export default About;
