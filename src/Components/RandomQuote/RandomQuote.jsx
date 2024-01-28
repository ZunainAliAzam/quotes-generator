import React, { useState } from "react";
import "./RandomQuote.css";
import twitter_icon from "../Assets/x.png";
import refresh_icon from "../Assets/refresh.png";

const RandomQuote = () => {
  let quotes=[];

  async function loadQuotes(){
    const response = await fetch("https://type.fit/api/quotes")
    quotes = await response.json();
  }

  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    Author: "Johann Wolfgang Von Goethe",
  });
    const random = () => {
      const select = quotes[Math.floor(Math.random()*quotes.length)];
    }
    
  return (
    <div className="container">
      <div className="quote">"{quote.text}"</div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">{quote.Author}</div>
        <div className="icons">
          <img className="img-1" src={refresh_icon} alt="refresh-icon" />
          <img className="img-2" src={twitter_icon} alt="x-icon" />
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
