import React from 'react'

function menu() {
   const liStyle = "mr-[3rem] hover:cursor-pionter"
  return (
   <div className="menu flex">
    <ul className='flex w-[100%] justify-between'>
        <li className={liStyle}>Home</li>
        <li className={liStyle}>Trending</li>
        <li className={liStyle}>Live</li>
        <li className={liStyle}>About</li>
    </ul>
   </div>
  )
}

export default menu