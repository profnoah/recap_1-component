import React from "react";

const Welcome = (props) => {
  const { name } = props; // Destructruing
  return (
    <div>
      <h2>Welcome to {name} pages</h2>
      <img src="" alt="" />
    </div>
  );
};

export default Welcome;
