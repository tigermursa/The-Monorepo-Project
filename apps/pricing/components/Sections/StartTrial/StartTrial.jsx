import Link from "next/link";

const StartTrial = () => {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className=" max-w-5xl mx-auto text-center  flex justify-between items-center">
        <div className="text-start">
          <h2 className="text-3xl font-semibold text-primary ">
            Start your 30-day free trial
          </h2>
          <p className="mt-4 text-lg text-primary">
            Join over 100+ practitioners and organizations already growing with
            Ambel
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3  text-base font-medium rounded-md text-gray border border-gray-200 "
          >
            Learn more
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700"
          >
            Get started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartTrial;
