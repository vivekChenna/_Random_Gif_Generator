import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const RandomGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const REACT_APP_API_KEY = "c8ipNhyttIW2io3IhYKAFfQTPYcaarJ1";

  const getRandomGif = async () => {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_API_KEY}`;
    const response = await axios.get(url);
    console.log(response.data.data.images);
    const ImageData = response.data.data.images.fixed_height_still.url;
    // fixed_width
    setLoading(false);
    setGif(ImageData);
  };

  useEffect(() => {
    getRandomGif();
  }, []);

  return (
    <div className="random-gif">
      <p className="random-gif-heading">A RANDOM GIF</p>

      <div className="img-div">
        {loading ? <Spinner /> : <img src={gif} alt="random_gif" />}
      </div>

      <button onClick={() => getRandomGif()} className="random-btn">
        Generate
      </button>
    </div>
  );
};

export default RandomGif;
