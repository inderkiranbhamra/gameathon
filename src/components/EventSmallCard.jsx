export default function EventSmallCard({
  cardImg,
  subHeading,
  heading,
  content,
  btnText,
}) {
  return (
    <div className="h-full w-full rounded-md bg-white py-4 px-2 flex flex-col">
      <div>
        <h3 className="text-[#FF692D] whitespace-nowrap text-xs">
          &#47;&#47; {subHeading}
        </h3>
        <h2 className="text-[#1e1e1e] text-base font-semibold">{heading}</h2>
        <p className="text-[#626262] text-xs">{content}</p>
      </div>
      <div className="h-[12vh] lg:h-full w-full mt-8 rounded-md relative ">
        <img
          src={cardImg}
          className="absolute w-full h-full top-0 left-0 object-top rounded-md"
        />
        <a
          className="bg-[#EB612A] text-white px-4 py-2 text-xs absolute right-[2rem] -translate-y-1/2 rounded-md"
          href="#"
        >
          {btnText} &rarr;
        </a>
      </div>
    </div>
  );
}
