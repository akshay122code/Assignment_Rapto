import React from "react";

function Explore() {
  return (
    <div
      className="explore relative h-[65rem] px-[5rem] bg-[#22d4fe] pt-[18rem] pb-[10rem] mt-[-15rem]
         z-[1] flex items-center justify-between rounded-b-[5rem]"
    >
      <div className="left relative">
        <img
          src={require("../compos/graphics/—Pngtree—hand holding mobile chat social_6188240.png")}
          alt=""
          className=" relative h-[520px] w-[570px]"
        />
      </div>
      <div
        className="right flex items-start flex-col 
        justify-start flex-1 h-[100%] pt-[9rem]"
      >
        <div className="searchbar flex justify-start w-[90%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[19] outline-none bg-[#3199ee] rounded-xl p-3 h-[3rem] placeholder-[#63defa] "
            />
          <div className="searchIcon flex flex-1 items-center rounded-xl ml-4 bg-gradient-to-bl from-[#0bb9e1] to-[#3199ee] p-3 h-[3rem] w-[5px]">
            <img
              src={require("../compos/graphics/search.png")}
              alt=""
              className="w-[1.5rem]"
            />
          </div>
        </div>
        <div className="tild flex justify-start mt-7 items-center w-[100%]">
          <img
            src={require("../compos/graphics/sound.png")}
            alt=""
            className="w-[5rem]"
          />
        </div>
        <div className="detail flex flex-col mt-5 text-4xl justify-start">
        <span>Search Your Favorite</span>
        <span>
          <b>Make Your Content</b>
        </span>
        <span className="text-sm mt-3 text-[#4D586A]">
          Download This App To Get Best Music,Gaming,Video Experience
          <br /> Follow Your Favorite Creator <br /> Join Us Now
        </span>
      </div>

      </div>
      
    </div>
  )
}

export default Explore;
