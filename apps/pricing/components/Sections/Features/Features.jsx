import { featureCardData } from "@/data/featuresCardData";
import Image from "next/image";

const Features = () => {
  return (
    <div className="bg-primary py-24 px-4 sm:px-6 lg:px-8 mb-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <p className="text-[#DC6803] font-bold text-base">Features</p>
          <h2 className="text-4xl font-bold text-white">
            Popular Businesses and Practitioners <br /> who use Ambel
          </h2>
          <p className="text-white mt-5">
            Our platform supports a diverse range of professionals, including
            healthcare providers, medi-spas, salons, fitness coaches, law
            agencies, beauty specialists, consultants, and therapists.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCardData.map(({ id, title, text, icon }) => (
            <div
              key={id}
              className="bg-[#25646C] border border-transparent shadow-sm hover:border-white hover:shadow-md hover:shadow-gray-300 transition-all duration-300 rounded-[20px] p-5 text-white relative"
            >
              <div className="absolute inset-0 border-2 border-transparent rounded-[20px] pointer-events-none transition-all duration-300 hover:border-white"></div>

              <div className="flex justify-between items-center mb-5">
                <Image
                  width={24}
                  height={24}
                  src={icon}
                  alt={title}
                  className="w-6 h-6"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.2em"
                  height="1.2em"
                  viewBox="0 0 512 512"
                  className="text-white"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={40}
                    d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48"
                  />
                </svg>
              </div>
              <h3 className="text-xl mb-3 font-semibold">{title}</h3>
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
