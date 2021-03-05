import React from "react";
import imgg from "../src/images/hero-img.png";
import Common from "./Common";

const About = () => {
  return (
    <>
      <Common
        name="Welcome To The About Page"
        visit="/contact"
        btnn="Contact Us"
        imggg={imgg}
      />
    </>
  );
};

export default About;
