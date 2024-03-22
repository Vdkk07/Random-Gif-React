import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("");

  // const [gif, setGif] = useState("");
  // const [loading, setLoading] = useState(false);

  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

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
  const { gif, loading, fetchData } = useGIF(tag);

  return (
    <div className="w-1/2  bg-blue-400 rounded-lg shadow-md flex  flex-col justify-around items-center border border-black  mb-5  ">
      <h1 className="font-bold text-2xl underline uppercase mt-5 mb-5">
        Random {tag} Gif
      </h1>

      <div className="mt-10 mb-10">
        {loading ? (
          <Spinner />
        ) : (
          <img src={gif} width={300} className="px-3" alt="random gif" />
        )}
      </div>

      <input
        className="border  rounded-md py-1 font-semibold text-[18px]  w-[75%] p-[5px] mt-5 mb-[12px] focus:outline-none text-center "
        type="text"
        value={tag}
        onChange={(event) => setTag(event.target.value)}
        placeholder="Search for a specific gif..."
      />

      <button
        onClick={() => fetchData(tag)}
        className="w-[75%] bg-yellow-100 opacity-85 rounded-md py-1 font-semibold text-[18px] mb-5  "
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
