import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import { selectTheme } from "./features/themeSlicer";

function App() {
  
  const theme = useSelector(selectTheme);
  useEffect(() => {
    const root = document.body.classList;
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme === 'dark') {
      root.add('dark')
    }else{root.remove('dark')}
  } );
  return (
    <div className="grid grid-cols-5 overflow-x-hidden  bg-lightTheme-primaryBackGround  max-h-full h-screen    dark:bg-darkTheme-primaryBackGround  text-lightTheme-primaryColor dark:text-darkTheme-primaryColor">
      {/*//! side bar */}
      <div className=" col-span-1  md:border-r-2 border-lightTheme-primaryColor dark:border-darkTheme-primaryColor">
        <SideBar />
      </div>
      {/*//! main content */}
      <div className="col-span-4  py-5">
        <TopBar />
      </div>
    </div>
  );
}

export default App;
