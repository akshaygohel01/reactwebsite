import React from 'react'
import Common from './Common';
import img1 from "../images/img1.jpg"
const Home = () => {
  return (
    <>
      <Common
        name="Welcome to Home Page"
        imgsrc={img1}
        visit="/service"
        btnname="Get Started"
      />
    </>
  );
}

export default Home
