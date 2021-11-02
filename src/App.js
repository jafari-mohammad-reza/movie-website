import React from "react";
import { Route, Switch } from "react-router";
import BrowsePage from "./Pages/BrowsePage";
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import WatchListPage from "./Pages/watchListpage";

function App() {
  return (
      <div className="grid grid-cols-5 overflow-hidden  bg-lightTheme-primaryBackGround  max-h-full h-screen    dark:bg-darkTheme-primaryBackGround  text-lightTheme-primaryColor dark:text-darkTheme-primaryColor">
        {/*//! side bar */}
        <div className="absolute  top-0.5 -left-1  md:static col-span-1  md:border-r-2 border-lightTheme-primaryColor dark:border-darkTheme-primaryColor">
          <SideBar />
        </div>
        {/*//! main content */}
        <div className="col-span-5 md:col-span-4  py-5">
          <TopBar />
          <Switch>
            <Route exact path="/" component={BrowsePage} />
            <Route path="/list" component={WatchListPage} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
