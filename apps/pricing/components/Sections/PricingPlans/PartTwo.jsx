import { pricingData, icons } from "@/data/pricingData";

const PartTwo = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 p-4 md:p-6 pt-12 md:pt-20">
        {pricingData?.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-4 md:p-6 w-full max-w-xs md:max-w-sm lg:max-w-xs flex flex-col"
            style={{ minHeight: "500px" }} // Ensures all cards have the same height
          >
            {/* Icon */}
            <div className="flex  justify-center text-green-950 mb-4 bg-gray-200 w-max mx-auto rounded-full p-1">
              {plan.icon}
            </div>

            {/* Title */}
            <h3 className="text-center text-lg font-semibold text-primary">
              {plan.title}
            </h3>

            {/* Price */}
            <p className="text-center text-5xl font-semibold text-gray-900 my-2">
              {plan.price}
            </p>

            {/* Description */}
            <p className="text-center text-gray-500 mb-4">{plan.description}</p>

            {/* Features List */}
            <ul className="space-y-2 text-gray-600 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="bg-gray-200 w-max rounded-full p-1">
                    {icons.tic}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-6 w-full bg-[#19525A] text-white py-2 rounded-md hover:bg-green-700 transition duration-300">
              Get started
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default PartTwo;
