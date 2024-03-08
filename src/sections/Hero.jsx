import mobileHeroBg from "/images/heroMobileBg.png";
import mobileRegisterBtn from "/images/registerHeroMobile.png";
import desktopHeroBg from "/images/hero.png";
import desktopRegisterBtn from "/images/heroRegisterBg.png";
import controllerIcon from "/images/controllerIcon.png";
import plus from "./../../public/images/social.png";

import Tool from "./../sections/tooltip.jsx";
import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="my-4 w-full  min-h-[80lvh] relative md:pl-10 md:pr-5 flex flex-col justify-between">
      <img
        src={mobileHeroBg}
        className="w-[95%] h-full absolute top-0 left-1/2 -translate-x-1/2 lg:hidden "
      />
      <img
        src={desktopHeroBg}
        className="w-full h-full absolute top-0 left-1/2 -translate-x-1/2 hidden lg:block"
      />
      <header className="flex justify-between relative z-10 items-center pt-2 lg:pt-0 lg:mt-5 lg:pl-0 px-5 ">
        <span className="text-white font-semibold lg:text-xl">
          Bhartiya Gaming Co.
        </span>
        <a
          href="#register"
          className="relative w-fit h-fit lg:px-16 lg:py-3 flex items-center justify-center"
        >
          <img
            src={mobileRegisterBtn}
            className="w-[2rem] md:w-[2.5rem]  lg:hidden"
          />
          <img
            src={desktopRegisterBtn}
            className="w-full h-full absolute hidden lg:block"
          />
          <span className="hidden relative z-10 lg:flex gap-2 text-white items-center">
            <img src={controllerIcon} className="w-5 h-fit object-contain" />{" "}
            Event
          </span>
        </a>
      </header>
      <div className="flex flex-col gap-2 top-[50%] lg:top-[55%] z-10 ml-10 w-[50%] absolute mb-20">
        <h3 className="font-semibold text-[#eb612a]">
          &gt;&gt; Bhartiya Gaming Co.
        </h3>
        <p className="flex flex-col text-white text-3xl font-semibold mt-5 gap-2">
          <span>Witness the</span>
          <span className="flex items-end gap-2">
            <span className="px-4 py-1 font-medium text-lg rounded-full bg-black text-[#eb612a] border-[1px] border-white inline-block">
              Ultimate
            </span>{" "}
            Gaming
          </span>
          <span>&#47;&#47; Experience</span>
        </p>
      </div>
      <img
        src={plus}
        alt=""
        className="absolute h-[6vh] right-[27vw] top-[30vh]"
        onClick={() => setIsHovered((prev) => !prev)}
        // onMouseLeave={() => setIsHovered(false)}
        // onClick={handleSocial}
      />

      {isHovered && <Tool />}
    </section>
  );
}
