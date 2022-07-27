import React from 'react'

function Play() {
    const playStyle="h-[75px] w-[75px]"
  return (
    <div className="play">
          <div className="playbutton flex ">
          <img src={require("../compos/graphics/google-play-png-logo-3784.png")}alt="" className={playStyle} />
          </div>
    </div>
  
  )
}

export default Play