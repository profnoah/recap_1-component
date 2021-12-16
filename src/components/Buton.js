import React from "react";

const btnStyle = {
  borderRadius: "10px",
  fontSize: "20px",
};
const divStyle = {
  display: "flex",
  alignItem: "center",
  justifyContent: "center",
  padding: "10px",
};

const Buton = (props) => {
  const { click, name, color, bgColor } = props;
  return (
    <div style={divStyle}>
      <button
        style={{ ...btnStyle, color: color, background: bgColor }}
        onClick={click}
      >
        {name}
      </button>
    </div>
  );
};

export default Buton;
