import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromList, selectList } from "../features/watchListSlicer";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdDoNotDisturb } from "react-icons/md";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function WatchListPage() {
  const dispatch = useDispatch();
  const selector = useSelector(selectList);
  useEffect(() => {
    console.log(selector);
  }, [selector]);

  return (
    <div className="flex flex-wrap items-center justify-evenly  w-full  px-16 py-24 overflow-y-scroll h-screen">
      {selector.map((movie) => {
        return (
          <div
            className="rowItem m-5  w-64 h-96  group rounded-xl  text-darkTheme-primaryColor "
            key={movie.id}
            style={{
              background: `url("https://image.tmdb.org/t/p/original/${
                movie.backdrop_path || movie.poster_path
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
    </div>
  );
}

export default WatchListPage;
