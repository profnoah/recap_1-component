import React from "react";
import Welcome from "../components/Welcome";
import headerImg from "../img/headers.jpeg";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Welcome name="About" img={headerImg} />
    </div>
  );
};

export default About;
