import React from "react";

const PartOne = () => {
  return (
    <>
      <div className="mb-12 mt-16 text-center ">
        <p className="text-[#19525A] font-bold mb-4  w-max mx-auto p-2 rounded-3xl text-base bg-[#F9F5FF]">
          Pricing plans
        </p>
        <h2 className="text-5xl font-bold text-[#307D33]">
          Let’s Get Started. <br />
          We’ve got a Plan that’s perfect for you.
        </h2>
        <p className="text-[#0089C9] mt-5 text-xl">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </p>
      </div>
      <div class=" flex justify-center rounded-md shadow-sm bg-[#ECECEC] w-max mx-auto ">
        <button class="px-6 w-[180px] py-2 border-gray-300 rounded-l-lg bg-[#ECECEC] text-gray-700 font-semibold hover:bg-gray-50">
          Monthly
        </button>
        <button class="px-6 py-2  w-[180px] border-gray-300 rounded-xl  bg-white text-gray--700 font-semibold m-1 ">
          Yearly
        </button>
      </div>
    </>
  );
};

export default PartOne;
