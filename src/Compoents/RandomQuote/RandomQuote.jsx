import React, { useState } from "react";
import "./RandomQuote.css";
import { BsTwitter } from "react-icons/bs";

const RandomQuote = () => {
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    Author: "Johann Wolfgang Von Goethe",
  });
  return (
    <div className="container">
      <div className="quote">{quote.text}</div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">{quote.Author}</div>
        <div className="icons">
            <BsTwitter />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
