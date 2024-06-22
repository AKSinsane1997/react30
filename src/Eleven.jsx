import React from "react";

const Eleven = () => {
  const quotes = [
    "Success is the sum of small efforts - repeated day in and day out.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    "Strive not to be a success, but rather to be of value.",
    "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.",
    "Doubt kills more dreams than failure ever will.",
    "In order to succeed, your desire for success should be greater than your fear of failure. ",
    "Successful people have libraries. The rest have big screen TVs.",
  ];

  const random = Math.floor(Math.random() * quotes.length);
  const quote = quotes[random];
  return <div>{quote}</div>;
};

export default Eleven;
