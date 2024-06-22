import React, { useState } from "react";

const Nine = () => {
  const [backgroundColor, setBackgroundColor] = useState("red");

  const handleColor = () => {
    const changeColor = backgroundColor === "red" ? "black" : "red";
    setBackgroundColor(changeColor);
  };
  return (
    <div
      onClick={handleColor}
      style={{
        backgroundColor,
        height: "100px",
        width: "100px",
        cursor: "pointer",
      }}
    >
      change the color
    </div>
  );
};

export default Nine;
