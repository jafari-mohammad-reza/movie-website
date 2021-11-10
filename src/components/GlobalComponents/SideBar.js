import React, { useCallback, useEffect, useState } from "react";
import useDarkTheme from "../../hooks/useDarkTheme";
import SideBarItem from "../SideBarItem";
import { AiOutlineBars } from "react-icons/ai";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectNotification } from "../../features/notificationsSlicer";
import { selectList } from "../../features/watchListSlicer";
import ThemeToggler from "./ThemeToggler";
function SideBar() {
  const NotificationSelector = useSelector(selectNotification);
  const WatchListSelector = useSelector(selectList);
  const [showBar, setShowBar] = useState(false);
  const [colorTheme, setCurrentTheme] = useDarkTheme();
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
    window.addEventListener("click", closeBarByWindowsClicking);
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
      window.removeEventListener("click", closeBarByWindowsClicking);
    };
  }, [checkWindowSize, closeBarByWindowsClicking]);
  return (
    <>
      <AiOutlineBars
        className="fixed text-xl block mt-8 ml-10 hover:text-red-600 transition duration-500 transform hover:scale-150 md:hidden cursor-pointer"
        onClick={() => setShowBar(true)}
      />

      <div
        className={` fixed md:static  ${showBar
          ? "bottom-0 w-2/4 bg-gray-500  bg-opacity-75  h-full z-50 px-6"
          : "bottom-full"
          } transition-all   md:flex   text-sm sm:text-base md:text-lg lg:text-xl flex-col items-start py-5   justify-center  space-y-5 md:px-5 lg:px-10 `}
      >
        <a href="/" className="NetFlixIcon">
          NetFlix
        </a>

        <div className="flex flex-col space-y-2.5 py-2 ">
          <h3 className="font-extrabold text-lg mb-3 md:text-xl">Menu</h3>
          <SideBarItem
            title={"Browse"}
            path={"/"}
            icon={"MdOutlineOpenInBrowser"}
          />
          <SideBarItem
            title={"WatchList"}
            path={"/list"}
            length={WatchListSelector.length}
          />
          <SideBarItem title={"CommingSoon"} path={"/comingSoon"} />
          <h3 className="font-extrabold text-lg py-3 md:text-xl">Menu</h3>
          <SideBarItem title={"Friends"} path={"/friends"} />
          <SideBarItem title={"parties"} path={"/parties"} />
          <SideBarItem
            title={"Notifications"}
            path={"/notification"}
            length={NotificationSelector.length}
          />
          <h3 className="font-extrabold py-3 text-lg mb-3 md:text-xl">Menu</h3>
          <SideBarItem title={"Settings"} path={"/settings"} />
          <SideBarItem title={"Logout"} path={"/logout"} />
        </div>

        <ThemeToggler />
      </div>
    </>
  );
}

export default React.memo(SideBar);
