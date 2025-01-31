import React, { useState } from "react";

const PartOne = () => {
  const [activeButton, setActiveButton] = useState("monthly");
  return (
    <>
      {/* Heading Section */}
      <div className="mb-8 md:mb-12 mt-8 md:mt-16 text-center px-4">
        <p className="text-[#19525A] font-bold mb-4 w-max mx-auto p-2 rounded-3xl text-sm md:text-base bg-[#F9F5FF]">
          Pricing plans
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-bold text-[#307D33]">
          Let’s Get Started. <br />
          We’ve got a Plan that’s perfect for you.
        </h2>
        <p className="text-[#0089C9] mt-4 md:mt-5 text-lg md:text-xl">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex justify-center rounded-md shadow-sm bg-[#ECECEC] w-max mx-auto border-4 border-[#ECECEC]">
        <button
          className={`px-6 w-[180px] py-2 border-gray-300 rounded-l-lg font-semibold transition-colors duration-300 ${
            activeButton === "monthly"
              ? "bg-white text-gray-700"
              : "bg-[#ECECEC] text-gray-700"
          }`}
          onClick={() => setActiveButton("monthly")}
        >
          Monthly
        </button>

        <button
          className={`px-6 w-[180px] py-2 border-gray-300 rounded-r-lg font-semibold transition-colors duration-300 ${
            activeButton === "yearly"
              ? "bg-white text-gray-700"
              : "bg-[#ECECEC] text-gray-700"
          }`}
          onClick={() => setActiveButton("yearly")}
        >
          Yearly
        </button>
      </div>
    </>
  );
};

export default PartOne;
