import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import data from "../../data/countiesFlags.json";
function LanguageSetting() {
  return (
    <div className="flex flex-col  items-center h-full">
      <AiOutlineGlobal className="dark:text-red-600 text-7xl " />
      <h2
        className="dark:text-red-600 text-4xl font-bold filter "
        style={{ textShadow: "1px 0px 20px #e50419  " }}
      >
        Select Your Language
      </h2>
      <ul className="flex flex-wrap  h-full w-full overflow-y-scroll">
        {data.map((language) => {
          return (
            <li
              className="m-6 w-1/4  cursor-pointer  transform transition-all duration-500 hover:scale-110  focus:-scale-75 hover:-translate-y-4"
              key={language.id}
            >
              <img
                src={language.imageUrl}
                className="w-full object-cover"
                title={language.name}
                alt={language.name}
              />
              {/* <h1>{language.name}</h1> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LanguageSetting;
