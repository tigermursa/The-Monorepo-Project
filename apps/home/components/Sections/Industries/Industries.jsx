import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cards } from "@/data/industryCardData";

const Industries = () => {
  const [activeCard, setActiveCard] = useState(0); // First card
  const [showText, setShowText] = useState(true); // Text visible for first card
  const [userInteracted, setUserInteracted] = useState(false); // Track user interaction

  useEffect(() => {
    if (activeCard === 0 && !userInteracted) {
      setShowText(true); // Show text for first card initially
    } else {
      setShowText(false); // Hide text during expansion
      const timer = setTimeout(() => setShowText(true), 800); // Show text after expansion
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  const handleCardHover = (index) => {
    if (window.innerWidth >= 768) {
      // Only trigger hover on desktop
      setActiveCard(index);
      setUserInteracted(true);
    }
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
    setUserInteracted(true);
  };

  const handleMouseLeave = () => {
    if (!userInteracted && window.innerWidth >= 768) {
      setActiveCard(0); // Reset to first card on desktop if no interaction
    }
  };

  return (
    <div className="min-h-screen py-5 px-4 sm:px-6 lg:px-5">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="mb-8 md:mb-16">
          <p className="text-[#DC6803] font-bold text-center mb-4 text-sm md:text-base">
            Industries
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-center text-[#101828]">
            Popular Businesses and Practitioners <br /> who use Ambel
          </h2>
          <p className="text-center max-w-3xl mx-auto mt-3 md:mt-5 text-sm md:text-base text-[#667085]">
            Our platform supports a diverse range of professionals, with popular
            industries; including: healthcare providers, medi spas, salons,
            fitness coaches, law agencies, beauty specialists, consultants, and
            therapists.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-6 mb-8 md:mb-20 w-full lg:w-max items-center mx-auto lg:border rounded-3xl">
          {cards.map((card, index) => (
            <button
              key={card.id}
              className={`px-4 py-2  text-sm md:text-base font-semibold rounded-full whitespace-nowrap  
                ${
                  activeCard === index
                    ? "bg-primary text-white"
                    : "bg-white hover:bg-pink-100 text-gray-800"
                }`}
              onClick={() => handleCardClick(index)}
            >
              {card.industry}
            </button>
          ))}
        </div>

        {/* Industry Cards */}
        <div className="flex gap-4 justify-center items-stretch h-auto md:h-[346px]">
          {cards.map((card, index) => {
            const isExpanded = activeCard === index;
            return (
              <div
                key={card.id}
                className={`relative transition-all duration-[1100ms] cursor-pointer 
                  ${
                    isExpanded
                      ? "w-full md:w-[524px]"
                      : "max-md:hidden w-[110px] md:w-[110px]"
                  } h-[300px] md:h-full overflow-hidden rounded-2xl bg-[#19525A]`}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Image Container */}
                <div
                  className={`absolute top-0 ${
                    isExpanded ? "right-0 w-1/3" : "right-0 w-full"
                  } h-full transition-all duration-[1100ms]`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className={`${
                      isExpanded ? "rounded-r-2xl" : "rounded-2xl"
                    }`}
                  />
                </div>

                {/* Text Content - Only visible after expansion is complete */}
                {isExpanded && showText && (
                  <div className="absolute left-0 w-2/3 h-full p-4 md:p-8 text-white flex flex-col justify-center">
                    <span className="bg-white text-xs md:text-sm text-gray-800 flex justify-center items-center rounded-full font-semibold w-max p-1 md:p-2 h-[24px] md:h-[29px]">
                      {card.industry}
                    </span>
                    <h3 className="text-lg md:text-2xl font-bold mt-2 md:mt-4 mb-1 md:mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xs md:text-base mb-2 md:mb-4 line-clamp-2">
                      {card.subtitle}
                    </p>
                    <button className="text-white text-start rounded-lg font-semibold flex items-center gap-1 text-xs md:text-base">
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
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Industries;
