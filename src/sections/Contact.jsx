import Contactus from "/images/Contactus.png";
import btnBg from "/images/btnbg.png";

export default function Contact() {
  return (
    <>
      <div className="relative w-full h-[25vh] lg:h-[38vh] flex justify-center pt-10 md:pb-16 lg:pb-28 lg:pt-20">
        <img
          src={Contactus}
          className="-z-1 absolute top-0 left-1/2 -translate-x-1/2 w-[95%] h-full "
          alt="upper_bg"
        />
        <div className="relative z-15 flex flex-col h-[20%] lg:h-[50%] w-[90%] justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-medium text-lg  text-white ">
              Got any Questions?
            </p>

            <p className="font-medium text-2xl md:text-4xl text-white ">
              Contact Us
            </p>
          </div>
          <form
            onSubmit
            className="flex gap-3 justify-between w-full items-end "
          >
            <textarea
              name="message"
              rows="1"
              className="w-full text-sm text-white placeholder-white bg-transparent  border-0 border-b-2 border-white focus:ring-0 focus:border-white resize-none"
              placeholder="Your message"
            />
            <button
              type="submit"
              className="w-fit h-fit text-sm whitespace-nowrap px-4 py-1 text-[#FF692D] relative"
            >
              <img
                src={btnBg}
                className="w-full h-full top-0 left-0 absolute"
              />
              <span className="relative z-10">Send Mail</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
