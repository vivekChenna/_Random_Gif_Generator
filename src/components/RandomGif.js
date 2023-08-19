import React from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";

const RandomGif = () => {
  const { loading, gif, getRandomGif } = useGif();
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
