import React, { useState } from "react";
import useGif from "./useGif";
import Spinner from "./Spinner";

const UserInputGif = () => {
  const [value, setValue] = useState("");
  const { loading, gif, getRandomGif } = useGif();

  return (
    <div className="user-input-gif-div">
      <p className="random-gif-heading"> USER INPUT RANDOM {value} GIF</p>

      <div className="img-div">
        {loading ? <Spinner /> : <img src={gif} alt="random_gif" />}
      </div>

      <input
        className="user-input-gif"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="type here..."
      />
      <button onClick={() => getRandomGif(value)} className="random-btn">
        Generate
      </button>
    </div>
  );
};

export default UserInputGif;
