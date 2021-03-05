import React from "react";
import imgg from "../src/images/wp1810641-mr-robot-wallpapers.svg";
import Common from "./Common"

const Home = () => {
  return (
    <>
      <Common
        name="This Is ReactJs Demo By"
        visit="/service"
        btnn="Get Started"
        imggg={imgg}
       
      />
      
    </>
  );
};

export default Home;
