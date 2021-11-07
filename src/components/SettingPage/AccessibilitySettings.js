import React from "react";
import Toggler from "../GlobalComponents/Toggler";

function AccessibilitySettings() {
  const OptionItem = ({ title, description }) => {
    return (
      <div className="flex items-center justify-start space-x-16 my-5 md:my-7 lg:my-10">
        <div className="max-w-sm">
          <h1 className=" text-base md:text-lg font-semibold ">{title}</h1>
          <p className="text-sm md:text-base">{description}</p>
        </div>
        {/* //!switcher */}
        <Toggler />
      </div>
    );
  };
  return (
    <div className="py-3 px-6 ">
      <OptionItem
        title={"Make Your Profile Private"}
        description={`it means that except your friends, nobody doesn't have access to see
            your profile`}
      />
      <OptionItem
        title={`Dont Use Mobile Data For Downloading`}
        description={`with this option we will only use your mobile data for streaming and
        watching online but not downloading.`}
      />
      <OptionItem
        title={`Send Email`}
        description={`by enabling this option we wont send you emails about new coming
            movies,series and events`}
      />
      <OptionItem
        title={"Kids Protection"}
        description={` by enabling this option we wont recommend show you contents that are
            not proper for kids and under 18 years old people.`}
      />
    </div>
  );
}

export default AccessibilitySettings;
