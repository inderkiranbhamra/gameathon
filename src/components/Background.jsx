import React from 'react'
import upper_bg from "../assets/background/upper_bg.png"
import lower_bg from "../assets/background/lower_bg.png"
import Prize from "./Prize.jsx"

export default function Background() {
  return (
    <section className="bg-[#212121] m-0 md:m-4 lg:m-4 rounded-2xl">
      <div className='relative'>
        <img src={upper_bg} className="mx-auto" alt="upper_bg"/>
          <div className="bg-[#151515] z-20 border-2 border-[#494949] mx-0 md:mx-16 lg:mx-28 relative rounded-2xl mt-[-6rem] mb-[-4rem] md:my-[-4rem] lg:my-[-4rem]">
          {/* Add the section or div over here */}
          <Prize/>
          </div>
        <img src={lower_bg} className="mx-auto z-0" alt="lower_bg"/>
      </div>
    </section>
  );
}
