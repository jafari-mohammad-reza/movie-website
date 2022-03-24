import 'swiper/css'
import 'swiper/css/navigation'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaRegPlayCircle } from 'react-icons/fa'
import { MdPlaylistAddCheck, MdDoNotDisturb } from 'react-icons/md'
import { addToList } from '../../features/watchListSlicer'
import { useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation } from 'swiper'
const BrowseRow = ({ title, categoryUrl }) => {
  const dispatch = useDispatch()
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const fetchRequest = async () => {
      const request = await axios
        .get(`https://api.themoviedb.org/3/${categoryUrl}`)
        .then((result) => {
          return setMovies(result.data.results)
        })
        // .then(console.log([...movies]))
        .catch((err) =>
          console.log(`error while loading data in broseRow error : ${err}`),
        )
      return request
    }
    fetchRequest()
  }, [categoryUrl])
  return (
    <>
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold md:font-bold lg:font-extrabold  pt-10 pb-6 ">
        {title}
      </h1>
      <div className="pt-12 ">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
        >
          {movies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <div
                  className="rowItem w-64 h-96 mr-5  group rounded-xl  text-darkTheme-primaryColor "
                  key={movie.id}
                  style={{
                    background: `url("https://image.tmdb.org/t/p/original/${
                      movie.backdrop_path || movie.poster_path
                    }")`,
                  }}
                >
                  <div className="opacity-0 group-hover:opacity-100 backdrop-filter transition-all w-full h-full duration-300 rounded-xl  py-2.5 px-4 backdrop-blur-sm">
                    <h3 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold  ">
                      {movie.name || movie.title}
                    </h3>
                    <div
                      className="flex flex-col items-start space-y-20 py-4 text-4xl text-red-600 transition-all h-3/4 
                    duration-700 "
                    >
                      <FaRegPlayCircle className="transform  transition  duration-300 hover:scale-150" />
                      <MdPlaylistAddCheck
                        onClick={() => {
                          dispatch(addToList(movie))
                        }}
                        className="transform  transition  duration-300 hover:scale-150"
                      />
                      {/* <MdMoreHoriz className="" /> */}
                      <MdDoNotDisturb className="transform  transition  duration-300 hover:scale-150" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}
export default BrowseRow
