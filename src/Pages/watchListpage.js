import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByName, removeFromList, selectList } from "../features/watchListSlicer";
import { FaFilter, FaRegPlayCircle } from "react-icons/fa";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import FilterBar from "../components/GlobalComponents/FilterBar";

function WatchListPage() {
  const dispatch = useDispatch();
  const selector = useSelector(selectList);
  const [searchBarValue, setSearchBarValue] = useState('')
  const [showFilterBar, setShowFilterBar] = useState(false)
  // useEffect(() => {
  //   dispatch(filterByName(searchBarValue))
  // }, [searchBarValue])
  return (
    <div className="flex flex-col py-7">
      {/* //? top bar*/}
      <div className="relative flex items-center space-x-3 place-self-center  ">
        <BsSearch onClick={() => dispatch(filterByName(searchBarValue))} className="absolute cursor-pointer top-4 left-6 group-hover:text-red-600 transition-all duration-500 " />
        <input
          type="search"
          placeholder="Search..."
          className="border-2 focus:border-red-600   transition-all duration-500 rounded-full outline-none bg-transparent py-2.5 px-9"
          name={'searchBar'}
          onChange={(e) => {
            setSearchBarValue(e.currentTarget.value)
          }}
        />
        <FaFilter className="hover:text-red-600 cursor-pointer   focus:scale-75 transform transition-all duration-500  hover:scale-125 text-lg md:text-xl lg:text-2xl" onClick={() => setShowFilterBar(!showFilterBar)} />
      </div>
      <FilterBar isShown={showFilterBar} />

      <div className="flex flex-wrap items-center justify-evenly   w-full   pt-16  overflow-y-scroll h-screen">
        {selector.length >= 1 ? (
          <>
            {selector.map((movie) => {
              return (
                <div
                  className="rowItem m-5  w-64 h-96  group rounded-xl  text-darkTheme-primaryColor "
                  key={movie.id}
                  style={{
                    background: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path || movie.poster_path
                      }")`,
                  }}
                >
                  <div className="flex flex-col opacity-0 group-hover:opacity-100 backdrop-filter transition-all w-full h-full duration-600 rounded-xl  py-2.5 px-4 backdrop-blur-sm">
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold  ">
                      {movie.name || movie.title}
                    </h3>
                    <div className="flex items-center justify-center space-x-3 text-red-600 text-5xl place-self-center h-1/4 my-auto">
                      <Link to={`watch/${movie.id}`}>
                        <FaRegPlayCircle className="transform   transition  duration-300 hover:scale-150" />
                      </Link>
                      <IoRemoveCircleOutline
                        onClick={() => {
                          dispatch(removeFromList(movie));
                        }}
                        className="transform  transition   duration-300 hover:scale-150"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h1 className="text-xs sm:text-base md:text-3xl lg:text-5xl font-extrabold">
            Your Watch List Is Still Empty
          </h1>
        )}
      </div>
    </div>
  );
}

export default WatchListPage;
