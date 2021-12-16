import React from "react";

const Buton = (props) => {
  const { click } = props;
  return (
    <div>
      <button onClick={click}>Tıkla</button>
    </div>
  );
};

export default Buton;
