import { useEffect, useState } from "react";
// import header from "/images/headerFrame.png";
import { motion } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a hackathon?",
      answer:
        "A hackathon can be best described as an “invention marathon”, or in simple words hackathons are about bringing your crazy ideas to reality. It’s an event where any tech-enthusiast, regardless of their individual field can come & participate to learn, build & share their creations over the course of a weekend, in a relaxed & productive environment. Hackathons are simply a venue for self-expression & creativity, where people come together & transform their thoughts into reality, through technology.",
    },
    {
      question: "Who can participate?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "How big a team can be?",
      answer: "The minimum team size is two and the maximum team size is four.",
    },
    {
      question: "Who all can participate?",
      answer:
        "This is a student hackathon and only students are allowed to participate.",
    },
    {
      question: "I am a newbie, can I hack?",
      answer:
        "Of course you can! We at PrepHacks ensure that no one is left behind during the hacking, thanks to our mentors and volunteers who help us achieve the same. We make sure that you learn the best you can alongside having fun and experiencing what it feels to belong to a community.",
    },
    {
      question: "Is there any registration fees for participation?",
      answer:
        "We don't want to monetize learning, community, and innovation. So, There is no participation/registration fees.",
    },
    {
      question: "Can I start working on my hack before the event?",
      answer:
        "No. In the interest of fairness, students should not be working on their projects before PrepHacks begins and we do not allow participants to work on pre-existing projects. However, you can familiarize yourself with all the tools and technologies you intend to use beforehand.",
    },
    {
      question:
        "Do I need to have any specific qualifications to be a participant for the hackathon?",
      answer:
        "If you love to code, you are more than welcome to participate in the hackathon.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="relative z-1 h-fit overflow-x-hidden flex flex-col gap-16 md:gap-24 pl-8 py-12">
        <div className="z-10">
          <p
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                            font-black text-white "
          >
            FAQs
          </p>
        </div>
      </div>
      <div className="px-4 pt-[1rem] lg:pt-[2rem] pb-[5rem] lg:px-[3rem] text-gray-200 ">
        <div className="mx-auto col-span-2">
          <div className="mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={toggleOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ index, question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200">
      <motion.button
        className="focus:text-[#f8522e] focus:ring-violet-300 w-full flex justify-between items-center text-left py-4 px-4 text-xl font-medium text-gray-200 focus:outline-none"
        onClick={() => toggleOpen(index)}
      >
        <span>{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="px-4 py-2 text-gray-200"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

export default FAQSection;
