import Silver from "/images/Silver.png";
import Bronze from "/images/Bronze.png";
import Gold from "/images/Gold.png";

export default function prize_new() {
  return (
    <div className="w-full pb-20 lg:pt-10 md:pt-12 relative h-fit mt-4">
      <p className="text-[orangered] lg:pl-6 lg:text-orange-300 z-10 relative">
        &#47;&#47; Game on
      </p>
      <h1 className="font-bold text-white text-5xl z-10 pl-6 relative">
        Prizes
      </h1>
      <div className="lg:flex lg:pt-[15vh]  justify-center items-center lg:justify-between gap-8 mx-2 mt-20">
        <div className="mx-auto mb-16 relative w-[70%] lg:w-[23%] lg:h-[20rem] md:h-[18rem] aspect-square border-t-2 shadow-[#FFFFFF] shadow-md drop-shadow-xl text-[#FFFFFF] font-bold bg-zinc-600 text-center rounded-2xl flex justify-center items-center">
          <img
            src={Silver}
            className="absolute w-[70%] md:w-[50%] lg:w-[60%] aspect-square left-1/2 -translate-x-1/2 top-0 -translate-y-1/2"
            alt="silver"
          />
          <div className="h-full flex flex-col  text-xl md:text-4xl justify-center gap-2 lg:gap-5 lg:py-10">
            <h1 className="">SECOND</h1>
            <h2 className="">₹ XX,XXX</h2>
          </div>
        </div>

        <div className="mx-auto mb-16 md:mt-48 mt-0 lg:mt-0 relative lg:-top-10 md:-top-20 lg:w-[23%] w-[70%] md:h-[18rem] lg:h-[20rem] aspect-square border-t-2 shadow-[#EDAE1B] shadow-md text-[#EDAE1B] border-[#EDAE1B] font-bold bg-zinc-600 text-center rounded-2xl flex justify-center items-center">
          <img
            src={Gold}
            className="absolute w-[70%] md:w-[50%] lg:w-[60%] aspect-square left-1/2 -translate-x-1/2 top-0 -translate-y-1/2"
            alt="Gold"
          />
          <div className="h-full flex flex-col text-xl md:text-4xl justify-center gap-2 lg:gap-5 lg:py-10">
            <h1 className="">FIRST</h1>
            <h2 className="">₹ XX,XXX</h2>
          </div>
        </div>

        <div className="mx-auto md:mb-16 relative w-[70%] lg:w-[23%] lg:h-[20rem] md:h-[18rem] aspect-square border-t-2 shadow-[#D96F4E] shadow-md text-[#D96F4E] border-[#D96F4E] font-bold bg-zinc-600 text-center rounded-2xl flex justify-center items-center">
          <img
            src={Bronze}
            className="absolute w-[70%] md:w-[50%] lg:w-[60%] aspect-square left-1/2 -translate-x-1/2 top-0 -translate-y-1/2"
            alt="Bronze"
          />
          <div className="h-full flex flex-col text-xl md:text-4xl justify-center gap-2 lg:gap-5 lg:py-10">
            <h1 className="">THIRD</h1>
            <h2 className="">₹ XX,XXX</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
