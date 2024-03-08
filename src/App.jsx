import upper_bg from "/images/upper_bg.png";
import HTFlogo from "/images/HTFlogo.png";
import Chandigarh_University from "/images/Chandigarh_University.png";
import Hackoverflow_Society from "/images/Hackoverflow_Society.png";
import Bhartiya_Gaming_Community from "/images/Bhartiya_Gaming_Community.png";
import lower_bg from "/images/lower_bg.png";
import Events from "./sections/Events";
import Contact from "./sections/Contact.jsx";
import RegisterForm from "./sections/RegisterForm_new.jsx";
import Video from "./sections/Video.jsx";
import Hero from "./sections/Hero.jsx";
import FAQSection from "./sections/FAQs.jsx";
import Prize_new from "./sections/prize_new.jsx";

import "./index.css";

function App() {
  return (
    <main className="bg-[#212121]  md:m-4 md:rounded-2xl">
      <div className="px-4 flex ">
        <img
          src={Chandigarh_University}
          className="translate-y-1/4 w-1/8 h-[5vh] lg:h-[12vh] px-2 "
        />
        <img
          src={HTFlogo}
          className="translate-y-1/4 w-1/8 h-[5vh] lg:h-[12vh]"
        />
        <img
          src={upper_bg}
          className="mx-auto w-1/2 h-[25vh] lg:h-[25vh]  object-cover object-center"
          alt="upper_bg"
        />
        <img
          src={Bhartiya_Gaming_Community}
          className="translate-y-1/4 w-1/8 h-[5vh] lg:h-[12vh] px-2"
        />
        <img
          src={Hackoverflow_Society}
          className="translate-y-1/4 w-1/8 h-[5vh] lg:h-[12vh]"
        />
      </div>

      <div className="bg-[#151515]  md:border-2 md:border-[#494949] h-fit  lg:mx-24 md:mx-12  relative rounded-2xl mt-[-6rem] mb-[-4rem] md:my-[-4rem] lg:my-[-4rem] flex flex-col gap-10">
        {/* Add the section or div over here */}
        <Hero />
        <Events />
        <Video />
        <RegisterForm />
        <Contact />
        <Prize_new />
        <FAQSection />
      </div>
      <img
        src={lower_bg}
        className="mx-auto w-1/2 hidden md:block h-[20vh] object-cover"
        alt="lower_bg"
      />
    </main>
  );
}

export default App;
