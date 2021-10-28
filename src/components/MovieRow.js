import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegPlayCircle } from "react-icons/fa";
import {
  MdDoNotDisturb,
  MdMoreHoriz,
  MdPlaylistAddCheck,
} from "react-icons/md";
import { Carousel } from "react-responsive-carousel";

function MovieRow({ title, fetchDataUrl }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchingData = async () => {
      const request = await axios.get(
        `https://api.themoviedb.org/3/${fetchDataUrl}`
      );
      setMovies(await request.data.results);
      // console.log(request);
      console.log(movies);
      return request;
    };
    fetchingData();
  }, []);
  return (
    <div className=' '>
      <h1 className="text-4xl lg:text-6xl">{title}</h1>
      <div className='flex overflow-x-scroll space-x-6 '>
        {movies.map((movie) => (
          <div key={movie.id} className=" relative h-full w-96 ">
            <img
              className="w-full rounded-lg h-60  "
              src={`${baseUrl}${movie?.backdrop_path}`}
              alt={movie?.name}
            />
            {/* <div className="flex flex-col">
             <FaRegPlayCircle className="text-sm" />
             <MdPlaylistAddCheck className="text-sm" />
             <MdMoreHoriz className="text-sm" />
             <MdDoNotDisturb className="text-sm" />
           </div> */}
          </div>
        ))}
      </div>

    </div>
  );
}

export default MovieRow;
