import videoThumbnail from "/images/videoThumbnail.png";
import videoPlayBtn from "/images/video-playBtn.png";

export default function Video() {
  return (
    <section className="w-full h-[30vh] lg:h-[65vh] relative flex justify-center items-center box-border">
      <img
        src={videoThumbnail}
        className="w-[98%] h-full absolute top-0 left-1/2 -translate-x-1/2 object-cover object-center"
      />
      <div className="z-20  flex gap-3 items-center justify-center">
        <span className="uppercase text-xl md:text-4xl lg:text-7xl text-white font-bold whitespace-nowrap">
          sneek peek
        </span>

        <button className="w-[20%] relative">
          <img src={videoPlayBtn} className="w-full aspect-square" />
        </button>
        <span className="uppercase text-xl md:text-4xl lg:text-7xl text-white font-bold whitespace-nowrap">
          bcg teaser
        </span>
      </div>
    </section>
  );
}
