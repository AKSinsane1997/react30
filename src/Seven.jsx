import React, { useEffect, useState } from "react";

const Seven = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setTime(20);
      }, 1000);

      return () => clearTimeout(resetTimer);
    }
  }, [time]);

  return <div>timeleft: {time} seconds</div>;
};

export default Seven;
