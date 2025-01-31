import Image from "next/image";
import styles from "./AppointmentStacks.module.css";
import { useEffect, useRef } from "react";
import StaticFirstCard from "./StaticFirstCard";
import { cardData } from "@/data/AppointmentStackCardData";

const alternatives = [
  "Jane",
  "Calendly",
  "Cal.com",
  "Acuity",
  "Square Appointment",
  "SimplyBook.me",
  "Zenoti",
  "Appointy",
  "SetMore",
  "HoneyBook",
];

const AppointmentStacks = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardTop = card.getBoundingClientRect().top;

        //  scroll position
        if (scrollY > cardTop + window.innerHeight / 2) {
          card.style.transform = `translateY(${index * 0}px)`; // no need to show upper cards as figma
        } else {
          card.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.container}>
        {/* Card 1  static one*/}
        <StaticFirstCard />

        {/* other cards dynamically */}
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)} // Store refs in the array
            className={`${styles.card} overflow-hidden `}
            style={{ backgroundColor: card.backgroundColor }}
          >
            <div
              className={`flex items-center   overflow-hidden   ${
                card.theme ? "text-white" : "text-black"
              } `}
            >
              <div className="max-w-2xl ">
                <h3 className={`text-4xl font-semibold   mb-9`}>
                  {card.title}
                </h3>
                <p className=" mb-9">{card.text}</p>
                <button className=" text-start rounded-lg font-semibold flex items-center gap-1">
                  Learn more{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={21}
                      d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className=" ">
                <Image
                  src={card.image}
                  width={550}
                  height={425}
                  className="p-4 h-[425px] object-contain"
                  alt={card.alt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-20 flex items-center justify-center mb-16 gap-6">
        <p className="text-lg">Replace:</p>
        <ul className="flex items-center gap-4 text-[#016DA3] text-sm">
          {alternatives.map((item, index) => (
            <li key={index} className="bg-gray-100 px-3 py-1 rounded-md">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AppointmentStacks;
