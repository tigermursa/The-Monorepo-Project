import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navData = [
    { label: "Features", href: "#", hasDropdown: true },
    { label: "Pricing", href: "http://localhost:3001" },
    { label: "Solutions", href: "#", hasDropdown: true },
    { label: "Resources", href: "#", hasDropdown: true },
    { label: "Find Professionals", href: "#" },
    { label: "Help", href: "#", hasDropdown: true },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 px-4 md:px-16 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Image
          src="/logos/ambel copy 2 no pedding 1.png"
          width={150}
          height={38}
          alt="Ambel Logo"
          className="max-w-[150px] max-h-[38px] cursor-pointer"
          priority
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex">
        <ul className="flex  gap-4 lg:gap-5 xl:gap-8 text-gray font-medium text-sm xl:text-base">
          {navData.map((item, index) => (
            <li
              key={index}
              className="hover:text-gray-900 cursor-pointer flex items-center"
            >
              <Link href={item.href}>{item.label}</Link>
              {item.hasDropdown && (
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
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="lg:hidden cursor-pointer" onClick={toggleSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={32}
          height={32}
          viewBox="0 0 32 32"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8h15M5 16h22M5 24h22M5 11l3-3l-3-3"
          ></path>
        </svg>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <Image
            src="/logos/ambel copy 2 no pedding 1.png"
            width={150}
            height={38}
            alt="Ambel Logo"
            className="w-[150px] h-[38px] cursor-pointer"
            priority
          />
        </div>
        <ul className="mt-4">
          {navData.map((item, index) => (
            <li key={index} className="p-4 hover:bg-gray-100 cursor-pointer">
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Login and Sign Up Buttons */}
      <div className="hidden lg:flex gap-2">
        <div className="text-gray px-4 py-2 rounded-md hover:text-gray-900 cursor-pointer">
          Login
        </div>
        <div className="bg-[#0089C9] text-white px-4 py-2 rounded-md hover:bg-[#19526d] cursor-pointer">
          Sign Up
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
