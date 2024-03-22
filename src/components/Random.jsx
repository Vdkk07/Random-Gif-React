import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   //! get api using axios [Its also return a promise same as fetch]

  //   const { data } = await axios.get(url);

  //   const imageSource = data.data.images.downsized_large.url;

  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  //! Here we make our own Custom HOOK
  const { gif, loading, fetchData } = useGIF();

  return (
    <div className="w-1/2  bg-green-400 rounded-lg shadow-md flex  flex-col justify-around items-center border border-black gap-y-10 ">
      <h1 className="font-bold text-2xl underline uppercase mt-5 mb-5">
        A Random Gif
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width={300} className="px-3" alt="random gif" />
      )}

      <button
        onClick={() => fetchData()}
        className="w-[75%] bg-yellow-100 opacity-85 rounded-md py-1 font-semibold text-[18px] mb-5 mt-5 "
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
