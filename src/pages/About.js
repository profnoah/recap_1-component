import React from "react";
import Buton from "../components/Buton";
import Welcome from "../components/Welcome";
import aboutImg from "../img/aboutt.jpeg";
const About = () => {
  const handleClick = () => {
    alert("About sayfasının detaylarına yönlendirliyorsunuz");
  };

  return (
    <div>
      <h1>About</h1>
      <Welcome name="About" img={aboutImg} />
      <Buton name="about" click={handleClick} />
    </div>
  );
};

export default About;
