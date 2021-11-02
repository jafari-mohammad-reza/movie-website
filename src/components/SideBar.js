import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  MdCalendarToday,
  MdList,
  MdOutlineLogout,
  MdOutlineOpenInBrowser,
  MdOutlineSettings,
} from "react-icons/md";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import useDarkTheme from "../hooks/useDarkTheme";
import { useSelector } from "react-redux";
import { selectList } from "../features/watchListSlicer";
function SideBar() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);
  const [showBar, setShowBar] = useState(false);
  const [colorTheme, setCurrentTheme] = useDarkTheme();
  const listSelector = useSelector(selectList);
  const checkWindowSize = useCallback(() => {
    if (window.innerWidth > 760) {
      if (showBar) {
        setShowBar(false);
      }
    }
  }, [showBar]);
  const closeBarByWindowsClicking = useCallback(() => {
    if (showBar) {
      setShowBar(false);
    }
  }, [showBar]);
  useEffect(() => {
    setActivePage(location.pathname);
    window.addEventListener("click", closeBarByWindowsClicking);
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
      window.removeEventListener("click", closeBarByWindowsClicking);
    };
  }, [checkWindowSize, closeBarByWindowsClicking, location.pathname]);
  return (
    <>
      <AiOutlineBars
        className="fixed text-xl block mt-8 ml-10 hover:text-red-600 transition duration-500 transform hover:scale-150 md:hidden cursor-pointer"
        onClick={() => setShowBar(true)}
      />

      <div
        className={` fixed md:static  ${
          showBar
            ? "bottom-0 w-2/4 bg-gray-500  bg-opacity-75  h-full z-50 px-6"
            : "bottom-full"
        } transition-all   md:flex   text-sm sm:text-base md:text-lg lg:text-xl flex-col items-start py-5   justify-center  space-y-5 md:px-5 lg:px-10 `}
      >
        <Link
          to="/"
          className="flex cursor-pointer text-2xl md:text-3xl lg:text-4xl text-red-700 font-extrabold"
        >
          NetFlix
        </Link>
        <div className="flex flex-col space-y-2.5 py-2 ">
          <h3 className="font-extrabold text-lg mb-3 md:text-xl">Menu</h3>
          <Link
            to="/"
            className="flex font-bold  items-center   cursor-pointer  space-x-2 "
          >
            {activePage === "/" && (
              <hr className="border-none transform rotate-180 md:rotate-90   lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600  bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <MdOutlineOpenInBrowser className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <Link to="/" className={`${activePage === "/" && "text-red-600"}`}>
              Browse
            </Link>
          </Link>
          <div className="flex font-bold  items-center  relative  cursor-pointer  space-x-2 ">
            {activePage === "/list" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <MdList className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <Link
              to="list"
              className={`${activePage === "/list" && "text-red-600"}`}
            >
              Watch List{" "}
              <span className="absolute -top-4 md:right-1 bg-lightTheme-primaryColor dark:bg-darkTheme-primaryColor rounded-full text-xs py-1 px-2 dark:text-red-600 text-darkTheme-primaryColor">
                {listSelector.length}
              </span>
            </Link>
          </div>
          <Link
            to="/ComingSoon"
            className="flex font-bold items-center    cursor-pointer space-x-2 "
          >
            {activePage === "/ComingSoon" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <MdCalendarToday className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "/ComingSoon" && "text-red-600"}`}>
              Coming Soon
            </p>
          </Link>
        </div>

        {/* <--!! Social Part  */}
        <div className="flex flex-col   space-y-6 py-2">
          <h3 className="font-extrabold text-lg mb-3 md:text-xl">Social</h3>
          <Link
            to="/Friends"
            className="flex font-bold  items-center    cursor-pointer space-x-2 "
          >
            {activePage === "/Friends" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <FaUserFriends className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "/Friends" && "text-red-600"}`}>
              Friends
            </p>
          </Link>

          <Link
            to="/Parties"
            className="flex font-bold items-center    cursor-pointer space-x-2 "
          >
            {activePage === "/Parties" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <GiPartyPopper className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "/Parties" && "text-red-600"}`}>
              Parties
            </p>
          </Link>
        </div>
        {/* <--!! settings Part  */}
        <div className="flex flex-col   space-y-6 py-2">
          <h3 className="font-extrabold text-lg mb-3 md:text-xl">General</h3>
          <Link
            to="/Settings"
            className="flex font-bold  items-center    cursor-pointer space-x-2 "
          >
            {activePage === "/Settings" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <MdOutlineSettings className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "/Settings" && "text-red-600"}`}>
              Settings
            </p>
          </Link>

          <div className="flex font-bold items-center    cursor-pointer space-x-2 ">
            <MdOutlineLogout className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            LogOut
          </div>
        </div>

        <div
          className="text-2xl bg-red-600 w-3/6    rounded-2xl py-3  flex justify-center place-self-auto   "
          onClick={() => {
            setCurrentTheme(colorTheme);
          }}
        >
          {colorTheme === "light" ? (
            <BsLightbulb className="switcher  transform hover:scale-150" />
          ) : (
            <BsLightbulbFill className="switcher transform hover:scale-150" />
          )}
        </div>
      </div>
    </>
  );
}

export default React.memo(SideBar);
