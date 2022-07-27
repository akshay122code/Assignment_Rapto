import React from 'react'
import Play from './Play'

function Page1() {
  return (
  <div className="wrapper bg-[#22d4fe] flex items-center
  justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
    {        }
    <div className="statements  flex flex-col items-start justify-center h-[100%] text-[3rem]">
        <span>
            Sart Your Virtual Journey Now</span>
        <span>
            <b>Best Video Experience</b>
        </span>
        <span className="text-[15px] text-[#338ea2]">
            Work Done By akshaykalia122@gmail.com
            <br />
            Contact Me on LinkdIn AKSHAY KALIA 
        </span>
        <div>
            <span className='text-[15px]'>Get It On Google Play</span>
            <Play/>
        </div>
    </div>
    <div className='imgage flex'>
    <img src={require("../compos/graphics/r2.png")} alt="" className='absolute top-[40px] left-[780px] h-[30rem] w-[50rem]' />
    </div>
  </div>
  )
}

export default Page1