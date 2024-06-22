import React, { useState } from "react";

const Five = () => {
  const [isToggled, setsToggled] = useState(false);
  return (
    <>
      <label>
        <input type="checkbox" onChange={() => setsToggled(!isToggled)} />
      </label>
      <p>{isToggled ? "on" : "off"}</p>
    </>
  );
};

export default Five;
