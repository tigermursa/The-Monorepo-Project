import Image from "next/image";
import styles from "./AppointmentStacks.module.css";
import { useEffect, useRef } from "react";
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

        // Adjust scroll position logic for responsiveness
        if (scrollY > cardTop + window.innerHeight / 2) {
          card.style.transform = `translateY(${index * 0}px)`; // No need to show upper cards as per Figma
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
        {/* Render cards dynamically */}
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)} // Store refs in the array
            className={`${styles.card} overflow-hidden`}
            style={{ backgroundColor: card.backgroundColor }}
          >
            <div
              className={`flex flex-col md:flex-row items-center justify-between overflow-hidden ${
                card.theme ? "text-white" : "text-black"
              }`}
            >
              <div className="max-w-2xl p-4 md:p-0">
                <h3 className={`text-2xl md:text-4xl font-semibold mb-6`}>
                  {card.title}
                </h3>
                <p className="mb-6 text-sm md:text-base">{card.text}</p>
                <button className="text-start rounded-lg font-semibold flex items-center gap-1">
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
              <div className="w-full md:w-auto">
                <Image
                  src={card.image}
                  width={550}
                  height={425}
                  className="p-4 h-[300px] md:h-[425px] object-contain"
                  alt={card.alt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Alternatives Section */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center mb-16 gap-4 px-4">
        <p className="text-lg">Replace:</p>
        <ul className="flex flex-wrap justify-center gap-2 text-[#016DA3] text-sm">
          {alternatives.map((item, index) => (
            <li
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-md whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AppointmentStacks;
