import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="text-center flex items-center justify-center flex-col ">
        <img
          className="w-2/4 h-2/4"
          src={'/images/404.png'}
          alt="NotFound Image"
        />
        <h3 className="text-base md:text-lg lg:text-3xl uppercase font-bold text-red-600">
          This Page You Looking For Is Not Available
        </h3>
        <a href="/" className="text-blue-500 text-base md:text-lg">
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default NotFound
