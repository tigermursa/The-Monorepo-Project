import Link from "next/link";
import styles from "./AppointmentStacks.module.css";

const StaticFirstCard = () => {
  return (
    <div
      className={` ${styles.card} flex flex-col justify-center items-center`}
    >
      <h1 className="text-4xl font-semibold max-w-3xl mx-auto text-center pb-16 text-gray-700">
        Find and Book Appointments with Local and International Professionals
      </h1>
      <div class="space-y-4   mx-auto flex flex-col justify-center items-center">
        <div class="flex items-center justify-center space-x-4">
          <div class="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              class="absolute left-3 text-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Search Doctor, Therapist, Consultant, Spa"
              class="w-full pl-10 pr-4 py-2 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div class="relative flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              class="absolute left-3 text-gray-400"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 13.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"
              ></path>
              <path
                fill="currentColor"
                d="M19.071 3.429h.001c3.905 3.905 3.905 10.237 0 14.142l-5.403 5.403a2.36 2.36 0 0 1-3.336 0l-5.375-5.375l-.028-.028c-3.905-3.905-3.905-10.237 0-14.142s10.236-3.905 14.141 0M5.99 4.489v.001a8.5 8.5 0 0 0 0 12.02l.023.024l.002.002l5.378 5.378a.86.86 0 0 0 1.214 0l5.403-5.404a8.5 8.5 0 0 0-.043-11.977A8.5 8.5 0 0 0 5.99 4.489"
              ></path>
            </svg>
            <input
              type="text"
              placeholder="Select your location"
              class="w-full pl-10 pr-4 py-2 border rounded-full text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button class="px-6 py-2 text-white bg-[#0D99FF] rounded-3xl hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
            Search
          </button>
        </div>
        <div class="space-y-2">
          <p class="text-gray-800 pb-2 pt-9">Are you looking for</p>
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
              Doctor
            </span>
            <span class="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
              Lawyer
            </span>
            <span class="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
              Therapist
            </span>
            <span class="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
              Barber
            </span>
            <span class="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
              Spa
            </span>
            <span class="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
              Med Spa
            </span>
            <span class="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
              Psychiatrist
            </span>
            <span class="px-4 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
              Consultancy firm
            </span>
            <button class="px-4 py-1 text-blue-500 rounded-full text-sm">
              More
            </button>
            <button class="ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeMiterlimit="10"
                  strokeWidth="1.5"
                  d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"
                ></path>
              </svg>
            </button>
          </div>
          <Link
            href="#"
            class="block text-blue-500 text-sm font-medium hover:underline text-center pt-4"
          >
            Explore advance search →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StaticFirstCard;
