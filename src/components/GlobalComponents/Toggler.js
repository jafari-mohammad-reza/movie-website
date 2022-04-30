import React from "react";
import { useState } from "react";

function Toggler() {
  const [enable, setEnable] = useState(false);
  return (
    <div
    onClick={() => setEnable(!enable)}
      className={`rounded-full inline-flex flex-shrink-0 items-center  border-red-600 border-2 w-24 h-10  ${
        enable ? "bg-red-600" : "bg-darkTheme-primaryBackGround dark:bg-transparent"
      }  `}
    >
        <span className={`bg-white rounded-full w-11 h-9 transition duration-300 transform ${enable ? 'translate-x-12 ' : 'translate-x-0'}`}/>
    </div>
  );
}

export default Toggler;
