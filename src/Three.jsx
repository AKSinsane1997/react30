import React, { useState } from "react";

const Three = () => {
  const [input, setInput] = useState();
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>input:{input}</p>
    </>
  );
};

export default Three;
