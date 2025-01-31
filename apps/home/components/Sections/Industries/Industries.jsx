import React, { useState, useEffect } from "react";
import Image from "next/image";
import { cards } from "@/data/industryCardData";

const Industries = () => {
  const [activeCard, setActiveCard] = useState(0); // First card
  const [showText, setShowText] = useState(true); // Text visible  first card
  const [userInteracted, setUserInteracted] = useState(false); // Track

  useEffect(() => {
    if (activeCard === 0 && !userInteracted) {
      setShowText(true); // first card initially
    } else {
      setShowText(false); // Hide text during expansion
      const timer = setTimeout(() => setShowText(true), 800); // Show  after expansion
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  const handleCardHover = (index) => {
    setActiveCard(index);
    setUserInteracted(true); // Mark user interacted
  };

  const handleMouseLeave = () => {
    if (!userInteracted) {
      setActiveCard(0); // Keeps  first card expanded
    }
  };

  return (
    <div className="min-h-screen  py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 ">
          <p className="text-[#DC6803] font-bold text-center mb-6 text-base">
            Industries
          </p>
          <h2 className="text-4xl font-bold text-center  text-[#101828]">
            Popular Businesses and Practitioners <br /> who use Ambel
          </h2>
          <p className="text-center mt-5 text-[#667085]">
            Our platform supports a diverse range of professionals, with popular
            industries; including: healthcare providers, medi spas <br />
            salons , fitness coaches, law agencies, beauty specialists,
            consultants, and therapists.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center gap-6 mb-20  w-max items-center mx-auto  border border-gray-400/30 transition-all duration-500 rounded-3xl">
          {cards.map((card, index) => (
            <button
              key={card.id}
              className={`px-6 py-2 font-semibold rounded-full  
                ${
                  activeCard === index
                    ? "bg-[#19525A]  text-white"
                    : "bg-white hover:bg-pink-100 text-gray-800"
                }`}
              onClick={() => handleCardHover(index)}
            >
              {card.industry}
            </button>
          ))}
        </div>

        {/* Industry Cards */}
        <div className="flex gap-4 justify-center items-stretch h-[346px]">
          {cards.map((card, index) => {
            const isExpanded = activeCard === index;
            return (
              <div
                key={card.id}
                className={`relative transition-all duration-[800ms] ease-in cursor-pointer 
                  ${
                    isExpanded ? "w-[524px]" : "w-[110px]"
                  } h-full overflow-hidden rounded-2xl bg-[#19525A]`}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Image Container */}
                <div
                  className={`absolute top-0 ${
                    isExpanded ? "right-0 w-1/3" : "inset-0 w-full"
                  } h-full transition-all duration-500`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className={`${
                      isExpanded ? "rounded-r-2xl " : "rounded-2xl"
                    }`}
                  />
                </div>

                {/* Text Content - Only visible after expansion is complete */}
                {isExpanded && showText && (
                  <div className="absolute left-0 w-2/3 h-full p-8 text-white flex flex-col justify-center">
                    <span className="bg-white text-sm text-gray-800 flex justify-center items-center rounded-full font-semibold w-max p-2 h-[29px]">
                      {card.industry}
                    </span>
                    <h3 className="text-2xl font-bold mt-4 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-base mb-4">{card.subtitle}</p>
                    <button className="text-white text-start rounded-lg font-semibold flex items-center gap-1">
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
