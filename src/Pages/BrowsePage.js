import requests from "../api/requests";
import MovieRow from "../components/MovieRow";

export default function BrowsePage() {
  return (
    <main className="w-full  px-16 py-24">
      {/* //! movie information  */}
      <div className=" banner      h-96 bg-transparent border-2 border-lightTheme-primaryColor overflow-hidden dark:border-darkTheme-primaryColor w-full rounded-3xl">
        <div className="w-full h-full backdrop-filter backdrop-blur-sm flex flex-col space-y-4  px-16 py-10 rounded-3xl">
          <div className="">
            <h1 className="text-2xl my-2 md:text-3xl lg:text-5xl tracking-wide font-extrabold ">
              title
            </h1>
            <p className="text-base md:text-lg lg:text-xl">description ....</p>
          </div>
          <div className="flex text-sm space-x-5 items-center">
            <p>math percentage</p>
            <p>seasons count</p>
          </div>
          <div className="flex space-x-10 text-lg md:text-xl lg:text-xl ">
            <button className="bg-red-600 border-none outline-none ring-2 rounded-2xl font-bold py-3 px-6  ">
              Watch
            </button>
            <button className=" text-center border-none outline-none ring-2  bg-gradient-to-br from-gray-300  to-transparent filter bg-opacity-20 shadow-xl   rounded-2xl font-bold py-3 px-6 ">
              +
            </button>
          </div>
        </div>
      </div>

    {/* //  categories */}

    {/* <MovieRow tit fetchDataUrl={requests.fetchNetflixOriginals} /> */}


    </main>
  );
}
