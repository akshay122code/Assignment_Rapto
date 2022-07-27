import React from 'react'
import Play from './Play'

function Last() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#3199ee] h-[48rem] pt-[18rem] mt-[-308px] relative z-[0] rounded-b-[5rem]">
      {/* tild icon or path icon */}
      <img src={require("../compos/graphics/sound.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Download The Best Music</span>
        <span>
          <b>App Now!</b>
        </span>
        <span className="text-[1rem] text-[#ffff] px-[15rem] text-center mt-[1rem]">
          To Contact Me I Had Given My DEtails In Above Section Assignment For RAPTO Web Techs
        </span>
      </div>
      {/* dowload ads */}
      <div className="mt-14">
        <Play/>
      </div>
    </div>
  )
}

export default Last