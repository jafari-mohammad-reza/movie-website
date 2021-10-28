import React  from "react";
import { Route, Switch } from "react-router";
import BrowsePage from "./Pages/BrowsePage";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";

function App() {


  return (
    <div className="grid grid-cols-5 overflow-x-hidden  bg-lightTheme-primaryBackGround  max-h-full h-screen    dark:bg-darkTheme-primaryBackGround  text-lightTheme-primaryColor dark:text-darkTheme-primaryColor">
      {/*//! side bar */}
      <div className="absolute  md:static col-span-1  md:border-r-2 border-lightTheme-primaryColor dark:border-darkTheme-primaryColor">
        <SideBar />
      </div>
      {/*//! main content */}
      <div className="col-span-5 sm:col-span-4  py-5">
        <TopBar />
        <Switch>
          <Route path='/' component={BrowsePage}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
