import React from "react";
import { AiOutlineRight } from "react-icons/ai";
export default function SignIn() {
  return (
    <div className="flex items-center justify-center  w-full h-screen  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/87a1d9d8-a21d-4109-ba3a-c10d9055f5cf/9db8a49e-6fee-4698-a775-fe12a974a514/US-en-20220307-popsignuptwoweeks-perspective_alpha_website_large.jpg')] relative">
      <div className="bg-black bg-opacity-60 absolute w-full h-full z-0" />
      <div className="flex flex-col items-center justify-center text-white z-10 w-max text-center space-y-7">
        <h1 className="max-w-lg text-2xl md:text-4xl lg:text-5xl font-extrabold ">
          Unlimited movies, TV shows, and more.
        </h1>
        <h3 className="text-xl md:text-2xl">Watch anywhere. Cancel anytime.</h3>
        <p className="text-lg">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex items-center space-x-0">
          <input
            type="text"
            name="EmailInput"
            id="email"
            className="w-[500px] h-16 bg-white border-none outline-none px-10"
            placeholder="Email address"
          />
          <button
            type="text"
            name="SubmitButton"
            id="btn"
            className="w-[150px] h-16 bg-red-600 border-none outline-none flex space-x-2 text-xl items-center justify-center  font-bold text-white"
          >
            Get Started
            <AiOutlineRight />
          </button>
        </div>
      </div>
    </div>
  );
}
