import React from "react";
import Welcome from "../components/Welcome";
import headerImg from "../img/headers.jpeg";
const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <Welcome name="Header" img={headerImg} />
    </div>
  );
};

export default Header;
