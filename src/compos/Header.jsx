import React from 'react'
import Menu from './Menu'
function header() {
  const buttonStyle ='border-[2px] rounded-[10px] border-[#76c8ff] px-[25px] py-[7px]'
  return (
    <div className="header bg-[#22d4fe] flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      <img src={require("../compos/graphics/logo.png")} alt="" className='logo w-[65px] h-[65px]' />
        <Menu/>
        <div className="buttons flex">
         <button className={`mr-[35px] bg-[#4caffe] `+buttonStyle}>Sign Up</button>
         <button className={buttonStyle+`mr-[35px] bg-[#4caffe]`}>Login</button>
        </div>
    </div>
  )
}

export default header