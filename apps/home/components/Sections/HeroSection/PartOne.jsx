import Image from "next/image";
import React from "react";

const PartOne = () => {
  return (
    <div className="container mx-auto px-4 py-14 text-center relative">
      <h2 className="text-[#282828] text-4xl md:text-5xl lg:text-[3.3rem] font-extrabold mb-4">
        Looking for a{" "}
        <span className="text-[#FF2323] leading-normal">
          Business Solution <br /> for
        </span>{" "}
        appointments?
      </h2>

      <p className="text-[#667085] text-lg mb-8 mt-7 max-w-full mx-auto">
        Ambel simplifies business management by providing tools for scheduling
        appointments, managing bookkeeping, accepting <br /> payments, sharing
        resources with customers, sending reminders, and running email marketing
        campaigns.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 relative">
        <button className="bg-primary hover:scale-105 text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#14444A] transition duration-300">
          Start A Free Trial
        </button>
        <button className="flex items-center hover:scale-105 bg-[#F87316] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#E06512] transition duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m16.31 15.561l4.114 4.115l-.848.848l-4.123-4.123a7 7 0 1 1 .857-.84M16.8 11a5.8 5.8 0 1 0-11.6 0a5.8 5.8 0 0 0 11.6 0"
            ></path>
          </svg>
          Find Professionals
        </button>

        {/* Arrow Image */}
        <div className="absolute right-[60rem] top-12 transform -translate-y-1/2">
          <Image
            src="/symbols/Point to trail.png"
            width={46}
            height={62}
            className="w-[46px] h-[62.5px]"
            alt="arrow pointer"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row font-medium items-center justify-center gap-4 text-[#027A48]">
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="currentColor"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
            ></path>
          </svg>
          No credit card required
        </p>
        <p className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="currentColor"
              d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8z"
            ></path>
          </svg>
          Try one month for free
        </p>
      </div>
    </div>
  );
};

export default PartOne;
