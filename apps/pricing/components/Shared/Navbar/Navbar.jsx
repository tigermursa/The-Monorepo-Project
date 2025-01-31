import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm py-4 px-16 flex justify-between items-center">
      <div>
        <Link href="http://localhost:3000">
          <Image
            src="/logos/ambel copy 2 no pedding 1.png"
            width={150}
            height={38}
            alt="Ambel Logo"
            className="w-[150px] h-[38px] cursor-pointer"
            priority
          />
        </Link>
      </div>
      <div>
        <ul className="flex gap-8 text-gray text-base ">
          <li className="hover:text-gray-900 cursor-pointer flex items-center">
            Features{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m7 10l5 5l5-5"
              ></path>
            </svg>
          </li>
          <Link href="http://localhost:3001">
            <li className="hover:text-gray-900 cursor-pointer">Pricing</li>
          </Link>

          <li className="hover:text-gray-900 cursor-pointer flex">
            Solutions{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m7 10l5 5l5-5"
              ></path>
            </svg>
          </li>
          <li className="hover:text-gray-900 cursor-pointer flex">
            Resources{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m7 10l5 5l5-5"
              ></path>
            </svg>
          </li>
          <li className="hover:text-gray-900 cursor-pointer">
            Find Professionals
          </li>
          <li className="hover:text-gray-900 cursor-pointer flex">
            Help{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m7 10l5 5l5-5"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <div className="text-gray  px-4 py-2 rounded-md hover:text-gray-900 cursor-pointer">
          Login
        </div>
        <div className="bg-[#0089C9]  text-white px-4 py-2 rounded-md hover:bg-[#19526d] cursor-pointer">
          Sign Up
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
