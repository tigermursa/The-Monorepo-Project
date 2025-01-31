import Link from "next/link";

const StartTrial = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
        {/* Text Section */}
        <div className="text-center lg:text-start">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary">
            Start your 30-day free trial
          </h2>
          <p className="mt-4 text-base sm:text-lg text-primary">
            Join over 100+ practitioners and organizations already growing with
            Ambel
          </p>
        </div>

        {/* Buttons Section */}
        <div className="mt-6 lg:mt-0 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-gray-700 border border-gray-200 hover:bg-gray-50 transition duration-300"
          >
            Learn more
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 transition duration-300"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartTrial;
