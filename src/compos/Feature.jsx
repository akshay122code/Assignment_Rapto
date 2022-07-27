import React from 'react'

function Feature({ icon, title }) {
  return (
    <div className="feature flex items-center justify-center flex-col 
    relative text-center mx-12">
        <img
            src={require(`../compos/graphics/${icon}.png`)}
            alt=""
            className="w-[3rem]"
          />
           <span className="mt-5">{title}</span>
           <span className="text-[#ffffff] mt-4">
         Download This App To Get Best Music,Gaming,Video Experience
        </span>
        <span className="text-[#292e9e] underline mt-[3rem] hover:cursor-pointer">
          Learn More
        </span>
     </div>
  )
}

export default Feature