import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router";
import LoadingComponent from "./components/LoadingComponent";
import SideBar from "./components/GlobalComponents/SideBar";
import TopBar from "./components/GlobalComponents/TopBar";
import ComingSoonPage from "./Pages/ComingSoonPage";
import NotificationsPage from "../src/components/GlobalComponents/NotificationsPage";
import NotFound from "./Pages/NotFound";
import SignIn from "./components/AccountComponents/SignIn";
import SignUp from "./components/AccountComponents/SignUp";
function App() {
  const BrowsePage = lazy(() => import("./Pages/BrowsePage"));
  const WatchListPage = lazy(() => import("./Pages/watchListpage"));
  const SettingPage = lazy(() => import("./Pages/SettingPage"));
  return <SignIn />;
}

export default App;

// <div className="grid grid-cols-5 overflow-hidden  bg-lightTheme-primaryBackGround  h-screen     dark:bg-darkTheme-primaryBackGround  text-lightTheme-primaryColor dark:text-darkTheme-primaryColor">
//       {/*//! side bar */}
//       <div className="absolute  top-0.5 -left-1  md:static col-span-1  md:border-r-2 border-lightTheme-primaryColor dark:border-darkTheme-primaryColor">
//         <SideBar />
//       </div>
//       {/*//! main content */}
//       <div className="col-span-5  md:col-span-4  ">
//         <Switch>
//           <Suspense fallback={<LoadingComponent />}>
//             <Route
//               exact
//               path="/"
//               render={() => {
//                 return (
//                   <>
//                     <TopBar />
//                     <BrowsePage />
//                   </>
//                 );
//               }}
//             />
//             <Route path="/list" component={WatchListPage} />
//             <Route path="/comingSoon" component={ComingSoonPage} />
//             <Route path="/notification" component={NotificationsPage} />
//             <Route path="/settings/" component={SettingPage} />
//             {/* <Route path="/signIn/" component={SignIn} />
//             <Route path="/SignOut/" component={SignUp} /> */}
//             <Route path={"*"} component={NotFound} />
//           </Suspense>
//         </Switch>
//       </div>
//     </div>
