import React, { useState } from "react";
import "./RandomQuote.css";
import twitter_icon from "../Assets/x.png";
import refresh_icon from "../Assets/refresh.png";

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
          <img src={refresh_icon} alt="xrefresh icon" />

          <img src={twitter_icon} alt="x icon" />
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
