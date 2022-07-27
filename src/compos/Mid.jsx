import React from 'react'
import Feature from './Feature'
function Mid() {
  return (
    <div className="mid  flex flex-col items-center justify-start px-[5rem] bg-[#3199ee] h-[60rem] pt-[18rem] mt-[-13rem]
    relative z-[2] rounded-b-[5rem]">
        <img src={require("../compos/graphics/ico1.png")} alt="" className='h-[50px] w-[54px]' />
        <div className="statement mt-7 flex flex-col items-center text-[2rem]">
            <span>Best Platform For Video Experience</span>
            <span><b>
                Start Now! </b></span>
        </div>
        <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon="M" title="For Live Music" />
        <Feature icon="G" title="For Daily Music" />
        <Feature icon="L" title="For Artists" />
      </div>
    </div>
  )
}

export default Mid