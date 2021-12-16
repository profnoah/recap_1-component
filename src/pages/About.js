import React from "react";
import Welcome from "../components/Welcome";
import aboutImg from "../img/aboutt.jpeg";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Welcome name="About" img={aboutImg} />
    </div>
  );
};

export default About;
