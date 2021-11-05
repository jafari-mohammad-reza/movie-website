import React from "react";
import { RiImageAddFill } from "react-icons/ri";
import { IoDiamond } from "react-icons/io5";
function AccountSetting() {
  return (
    <div className="flex flex-col w-full h-full  ">
      <div className="group relative cursor-pointer w-28 h-28 rounded-full  place-self-center">
        <img
          src="https://www.bing.com/th/id/OIP.KodEEM5freDj16hH50aVXQAAAA?pid=ImgDet&rs=1"
          alt="profile"
          className="rounded-full"
        />
        <RiImageAddFill className="absolute top-0 left-0  opacity-0 group-hover:opacity-100 backdrop-filter transition  w-full h-full  duration-500 rounded-full  py-2.5 px-4 backdrop-blur-lg" />
      </div>
      {/*account info  */}
      <div className="flex flex-col    space-y-10 font-bold text-lg md:text-xl lg:text-2xl">
        <div className="flex items-center justify-between">
          <p>User Name : </p>
          <p>Name</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Email Address : </p>
          <p>Email@gmail.com</p>
        </div>
        <div className="flex items-center justify-between">
          <p>Password : </p>
          <p>*******</p>
        </div>
        <div className="flex bg-red-600 py-3 -mx-5 px-5  items-center justify-between">
          <p>Subscription : </p>
          <div className="flex pb-4 flex-col items-center justify-center">
            <IoDiamond />
            <p>Premium</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row  sm:flex-wrap items-center justify-center  space-x-2 lg:space-x-5 lg:space-y-0 text-sm md:text-base  w-full'>
            <button className='accountSettingBtn min-w-full sm:min-w-min'>Change Subscription</button>
            <button className='accountSettingBtn min-w-full sm:min-w-min'>Change Password</button>
            <button className='accountSettingBtn min-w-full sm:min-w-min'>Change Subscription</button>
        </div>
      </div>
    </div>
  );
}

export default AccountSetting;
