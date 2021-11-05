import React from "react";
import { BsLightbulb, BsLightbulbFill } from "react-icons/bs";
import useDarkTheme from "../../hooks/useDarkTheme";

function GeneralSettings() {
  const [colorTheme, setCurrentTheme] = useDarkTheme();

  return (
    <div className="">
      <div>
        <h1>Theme : </h1>

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
    </div>
  );
}

export default GeneralSettings;
