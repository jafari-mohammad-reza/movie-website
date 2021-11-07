import React, { lazy, Suspense, useEffect, useState } from "react";
import { RiMenuUnfoldLine, RiMenuFoldFill } from "react-icons/ri";
import { Route, Switch, useLocation } from "react-router";
import { Link } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import AccessibilitySettings from "../components/SettingPage/AccessibilitySettings";
function SettingPage() {
  const AccountSetting = lazy(() =>
    import("../components/SettingPage/AccountSetting")
  );
  const LanguageSetting = lazy(() =>
    import("../components/SettingPage/LanguageSetting")
  );
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setActiveSection(location.pathname);
  }, [location.pathname]);
  const PingAnimation = () => {
    return (
      <span class="flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    );
  };
  const ListItem = ({ title, path }) => {
    return (
      <Link
        to={`/settings/${path}`}
        className="flex w-3 h-3 relative space-x-1.5 transition-all duration-300  items-center "
        // onClick={() => setActiveSection(title)}
      >
        {activeSection ===  `/settings/${path}`   && <PingAnimation />}
        <li className="cursor-pointer">{title}</li>
      </Link>
    );
  };
  return (
    <div className="w-full relative text-darkTheme-primaryColor px-6  md:space-x-5  lg:space-x-10 items-center justify-center space-y-10   overflow-y-scroll lg:overflow-y-hidden h-screen md:h-screen py-20 flex  flex-wrap">
      {/* Settings Menu */}
      <div
        className={`self-center absolute ${
          showMenu && "z-50"
        } transition duration-700   top-28 mt-1.5 left-6 md:left-11 lg:left-0   lg:relative mr-10  w-3/6 lg:w-1/6  h-3/5 GlassBackGround 
              my-auto rounded-lg text-center  lg:py-10   px-6 `}
      >
        <RiMenuFoldFill
          className="text-3xl lg:hidden text-red-600 cursor-pointer transform transition duration-300 hover:-translate-y-1.5 my-5 hover:scale-125"
          onClick={() => setShowMenu(false)}
        />
        <ul className="flex flex-col   space-y-10 text-lg font-semibold ">
          <ListItem title={"Account"} path="" />
          <ListItem title={"Language"} path="Language" />
          <ListItem title={"Accessibility's"} path="Accessibility" />
        </ul>
      </div>
      {/* Main Section */}
      <div
        className=" w-full  lg:w-4/6  h-screen lg:h-full  p-5 flex flex-col GlassBackGround my-auto "
        onClick={() => {
          if (showMenu) {
            setShowMenu(false);
          }
        }}
      >
        <RiMenuUnfoldLine
          className="text-3xl lg:hidden text-red-600 cursor-pointer transform transition duration-300 hover:-translate-y-1.5 hover:scale-125"
          onClick={() => setShowMenu(true)}
        />
        <Switch>
          <Suspense fallback={LoadingComponent}>
            <Route exact path={"/settings/"} component={AccountSetting} />
            <Route
              exact
              path={"/settings/language"}
              component={LanguageSetting}
            />
            <Route
              exact
              path={"/settings/Accessibility"}
              component={AccessibilitySettings}
            />
          </Suspense>
        </Switch>
      </div>
    </div>
  );
}

export default React.memo(SettingPage);
