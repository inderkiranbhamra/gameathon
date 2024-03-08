import EventCard from "../components/EventCard";
import EventSmallCard from "../components/EventSmallCard";
import eventSmallCard1 from "/images/eventSmallCard1.png";
import eventSmallCard2 from "/images/eventSmallCard2.png";
import smallCardData from "../data/eventSmallCard.json";
import eventsData from "../data/events.json";

// import gameConsole from "/images/game-console.svg";
const Events = () => {
  return (
    <section className="flex flex-col gap-12 w-full min-h-screen h-fit my-4 py-4">
      <nav className="flex justify-between mx-4 items-center h-fit">
        <span>
          <h2 className="text-2xl md:text-3xl lg:text-[48px] text-white font-semibold">
            Upcoming Events
          </h2>
        </span>
        <ul className="flex gap-4 items-center">
          <li className="text-[#ff692d]">New</li>
          <li className="text-white">Popular</li>
        </ul>
      </nav>
      <div className="flex flex-col lg:flex-row h-fit lg:h-[90vh] w-full px-2 md:px-4 gap-4 ">
        <div className="flex order-2 lg:order-1 lg:flex-col gap-3 h-full lg:w-1/2">
          {smallCardData.map((data, i) => {
            return (
              <EventSmallCard
                key={i}
                cardImg={i === 0 ? eventSmallCard1 : eventSmallCard2}
                heading={data.heading}
                subHeading={data.subHeading}
                content={data.content}
                btnText={data.btnText}
              />
            );
          })}
        </div>
        <div className="lg:w-1/2 w-full order-1 lg:order-2 h-fit lg:h-[90vh] flex gap-4 overflow-x-auto ">
          {eventsData.map((data, i) => {
            return (
              <EventCard
                content={data.content}
                date={data.date}
                key={i}
                gameLogo={data.cardLogo}
                cardBg={data.bgImg}
                themeColor={data.themeColor}
                tint={data.tint}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Events;
