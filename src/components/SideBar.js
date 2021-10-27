import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, changeTheme } from "../features/themeSlicer";
import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
function SideBar() {
  //! to do  # add theme switcher #

  const [activePage, setActivePage] = useState();
  const [showBar, setShowbar] = useState(false);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const checkWindowSize = () => {
    if(window.innerWidth > 760){
      setShowbar(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize' , checkWindowSize)
    return () => {
      window.removeEventListener('resize' , checkWindowSize)
    }
  } , []);
  return (
    <>
      <AiOutlineBars
        className="text-xl block mt-8 ml-10 hover:text-red-600 transition duration-500 transform hover:scale-150 md:hidden cursor-pointer"
        onClick={() => setShowbar(true)}
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
          <div
            onClick={() => setActivePage("Browse")}
            className="flex font-bold  items-center   cursor-pointer  space-x-2 "
          >
            {activePage === "Browse" && (
              <hr className="border-none transform rotate-180 md:rotate-90   lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600  bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <MdOutlineOpenInBrowser className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "Browse" && "text-red-600"}`}>
              Browse
            </p>
          </div>
          <div
            onClick={() => setActivePage("Watch List")}
            className="flex font-bold  items-center    cursor-pointer  space-x-2 "
          >
            {activePage === "Watch List" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <MdList className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "Watch List" && "text-red-600"}`}>
              Watch List
            </p>
          </div>
          <div
            onClick={() => setActivePage("ComingSoon")}
            className="flex font-bold items-center    cursor-pointer space-x-2 "
          >
            {activePage === "ComingSoon" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <MdCalendarToday className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "ComingSoon" && "text-red-600"}`}>
              Coming Soon
            </p>
          </div>
        </div>

        {/* <--!! Social Part  */}
        <div className="flex flex-col   space-y-6 py-2">
          <h3 className="font-extrabold text-lg mb-3 md:text-xl">Social</h3>
          <div
            onClick={() => setActivePage("Friends")}
            className="flex font-bold  items-center    cursor-pointer space-x-2 "
          >
            {activePage === "Friends" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <FaUserFriends className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "Friends" && "text-red-600"}`}>
              Friends
            </p>
          </div>

          <div
            onClick={() => setActivePage("Parties")}
            className="flex font-bold items-center    cursor-pointer space-x-2 "
          >
            {activePage === "Parties" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <GiPartyPopper className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "Parties" && "text-red-600"}`}>
              Parties
            </p>
          </div>
        </div>
        {/* <--!! settings Part  */}
        <div className="flex flex-col   space-y-6 py-2">
          <h3 className="font-extrabold text-lg mb-3 md:text-xl">General</h3>
          <div
            onClick={() => setActivePage("Settings")}
            className="flex font-bold  items-center    cursor-pointer space-x-2 "
          >
            {activePage === "Settings" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <MdOutlineSettings className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "Settings" && "text-red-600"}`}>
              Settings
            </p>
          </div>

          <div
            onClick={() => setActivePage("LogOut")}
            className="flex font-bold items-center    cursor-pointer space-x-2 "
          >
            {activePage === "LogOut" && (
              <hr className="border-none transform rotate-180 md:rotate-90 lg:-ml-14 -ml-7 h-6 md:-ml-8  text-red-600 bg-red-600 rounded-full md:h-2 w-3 md:w-8 lg:w-10" />
            )}
            <MdOutlineLogout className=" text-2xl font-extrabold hover:text-red-700 transition-all" />
            <p className={`${activePage === "LogOut" && "text-red-600"}`}>
              LogOut
            </p>
          </div>
        </div>

        <div className="text-2xl bg-red-600 w-3/6    rounded-2xl py-3  flex justify-center place-self-auto   ">
          {theme === "light" ? (
            <BsLightbulb
              className="switcher  transform hover:scale-150"
              onClick={() => {
                dispatch(changeTheme("dark"));
                localStorage.setItem("theme", "dark");
              }}
            />
          ) : (
            <BsLightbulbFill
              className="switcher transform hover:scale-150"
              onClick={() => {
                dispatch(changeTheme("light"));
                localStorage.setItem("theme", "light");
              }}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default SideBar;