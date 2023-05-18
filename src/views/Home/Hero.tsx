import React from 'react'
function Hero() {
  return (
    <div className="w-full h-[calc(100vh-136px)] relative bg-[url('/assets/heroBg.jpeg')] bg-no-repeat bg-cover">
        {/* ====> overly on image */}
        <div className="w-full h-full absolute left-0 top-0 bg-black-main/50"></div>
        {/* ====> */}
        <div className="w-full flex flex-col justify-center items-center">

        </div>
    </div>
  )
}

export default Hero