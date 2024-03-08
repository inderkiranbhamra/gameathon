// import eventCardFrameCornerTL from "/images/eventCardFrameCornerTL.svg";
// import eventCardFrameCornerTR from "/images/eventCardFrameCornerTR.svg";
// import eventCardFrameCornerBL from "/images/eventCardFrameCornerBL.svg";
// import eventCardFrameCornerBR from "/images/eventCardFrameCornerBR.svg";
import { twMerge } from "tailwind-merge";
export default function EventCard({
  content,
  date,
  gameLogo,
  cardBg,
  tint,
  themeColor,
}) {
  return (
    <div className="lg:w-full w-[75vw] h-[70vh] lg:h-full">
      <div className="lg:w-full md:w-[50vw] w-[75vw] h-full rounded-md relative overflow-hidden group cursor-pointer">
        <img
          src={cardBg}
          className="absolute top-0 left-0 w-full h-full object-cover origin-center "
        />
        <div className="w-full h-full bg-[rgba(0,0,0,0.3)] absolute top-0 left-0 group-hover:top-0 duration-500"></div>
        <div
          className={`w-full h-full absolute top-[99%] group-hover:top-0 duration-500`}
          style={{ backgroundColor: tint }}
        ></div>
        <div className="absolute top-1/4  translate-y-1/2 group-hover:translate-y-0 w-1/2 left-0 translate-x-1/2 duration-500">
          <img
            src={gameLogo}
            className="h-[90px] aspect-square mx-auto object-contain"
          />
          <div className="text-white text-center text-lg">
            &#91; {date} &#93;
          </div>
        </div>
        {/* <img
          src={eventCardFrameCornerTL}
          className="absolute top-0 left-0 stroke-[#7A63C9] group-hover:stroke-[#fff] duration-500 group-hover:translate-y-1/2 group-hover:translate-x-1/2"
        />
        <img
          src={eventCardFrameCornerTR}
          className="absolute top-0 right-0 stroke-[#7A63C9] group-hover:stroke-[#fff] duration-500 group-hover:translate-y-1/2 group-hover:-translate-x-1/2"
        />
        <img
          src={eventCardFrameCornerBL}
          className="absolute bottom-0 left-0 stroke-[#7A63C9] group-hover:stroke-[#fff] duration-500 group-hover:-translate-y-1/2 group-hover:translate-x-1/2"
        />
        <img
          src={eventCardFrameCornerBR}
          className="absolute bottom-0 right-0 stroke-[#7A63C9] group-hover:stroke-[#fff] duration-500 group-hover:-translate-y-1/2 group-hover:-translate-x-1/2"
        /> */}
        <p className="text-white absolute w-[90%] left-4 bottom-[15%] opacity-0 group-hover:opacity-100 duration-500">
          {content}
        </p>
        <a
          href="#"
          className={twMerge(
            ` bg-white w-[70%] group-hover:text-white h-fit py-2 duration-500 inline-block absolute text-center left-1/2 -translate-x-1/2 bottom-[1rem] ${
              themeColor === "#7A63C9"
                ? `group-hover:bg-[#7A63C9] text-[#7A63C9]  `
                : themeColor === "#EC612A"
                ? `group-hover:bg-[#EC612A] text-[#EC612A]  `
                : themeColor === "#079F24"
                ? `group-hover:bg-[#079F24] text-[#079F24]  `
                : ""
            }`
          )}
        >
          Register
        </a>
      </div>
    </div>
  );
}
