import { useEffect, useState } from "react";
import axios from "axios";

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const REACT_APP_API_KEY = "c8ipNhyttIW2io3IhYKAFfQTPYcaarJ1";

  const getRandomGif = async (value) => {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${REACT_APP_API_KEY}`;
    const response = await axios.get(value ? `${url}&tag=${value}` : url);
    const ImageData = response.data.data.images.fixed_height_still.url;
    setLoading(false);
    setGif(ImageData);
  };

  useEffect(() => {
    getRandomGif();
  }, []);

  return { loading, gif, getRandomGif };
};

export default useGif;
