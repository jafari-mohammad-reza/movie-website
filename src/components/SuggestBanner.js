import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../api/requests";
export default function SuggestBanner() {
  const [movie, setMovie] = useState([]);
  const truncate = (text, n) => {
    return text?.length > n ? text.substr(n - 1) + "..." : text;
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/" + requests.fetchNetflixOriginals
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  let randomBaner = `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`;
  return (
    <div
      className="banner   mb-16  text-darkTheme-primaryColor    bg-transparent border-2 border-lightTheme-primaryColor overflow-hidden dark:border-darkTheme-primaryColor w-full rounded-3xl"
      style={{ background: randomBaner }}
    >
      <div className="w-full h-full  backdrop-filter backdrop-blur-sm  flex flex-col space-y-4 px-5  md:px-16 py-4 md:py-10 rounded-3xl">
        <div className="text-shadow-xl text-center md:text-left">
          <h1 className="text-lg  my-2 md:text-2xl lg:text-4xl tracking-wide font-bold ">
            {/* {movie?.name || movie?.title || movie?.original_name} */}
            {movie?.name}
          </h1>
          <p className="text-base md:text-lg lg:text-xl">
            {truncate(movie?.overview, 150)}
          </p>
        </div>
        <div className="flex text-sm space-x-5 items-center">
          <p className="text-lg font-semibold">Score</p>
          <p>{movie.vote_average}</p>
          {/* <p>seasons count</p> */}
        </div>
        <div className="flex space-x-10 text-base md:text-xl lg:text-xl ">
          <button className="bg-red-600 border-none outline-none rounded-2xl font-bold py-3 px-3  md:px-6  ">
            Watch
          </button>
          <button className=" text-center border-none outline-none  bg-gradient-to-br from-gray-300  to-transparent filter bg-opacity-20 shadow-xl   rounded-2xl font-bold py-3 px-6 ">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
