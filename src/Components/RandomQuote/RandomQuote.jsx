import React, { useState, useEffect } from "react";
import "./RandomQuote.css";
import twitter_icon from "../Assets/x.png";
import refresh_icon from "../Assets/refresh.png";

const RandomQuote = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "Difficulties increase the nearer we get to the goal.",
    author: "Johann Wolfgang Von Goethe",
  });

  useEffect(() => {
    async function loadQuotes() {
      const response = await fetch("https://type.fit/api/quotes");
      const quotesData = await response.json();
      setQuotes(quotesData);
    }

    loadQuotes();
  }, []);

  const random = () => {
    const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(selectedQuote);
  };
  const twitterPost = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${
        quote.author.split(",")[0]
      }`
    );
  };

  return (
    <div className="container">
      <div className="quote">"{quote.text}"</div>
      <div className="line"></div>
      <div className="bottom">
        <div className="author">{quote.author.split(",")[0]}</div>
        <div className="icons">
          <img
            className="img-1"
            src={refresh_icon}
            onClick={random}
            alt="refresh-icon"
          />
          <img
            className="img-2"
            src={twitter_icon}
            onClick={() => {
              twitterPost();
            }}
            alt="x-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default RandomQuote;
