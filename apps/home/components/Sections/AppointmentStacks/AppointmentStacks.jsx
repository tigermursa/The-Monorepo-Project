import Image from "next/image";
import styles from "./AppointmentStacks.module.css";
import { useEffect, useRef } from "react";

const alternatives = [
  "Jane",
  "Calendly",
  "Cal.com",
  "Acuity",
  "Square Appointment",
  "SimplyBook.me",
  "Zenoti",
  "Appointy",
  "SetMore",
  "HoneyBook",
];

const AppointmentStacks = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = [card1Ref.current, card2Ref.current, card3Ref.current];
      const scrollY = window.scrollY;

      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;

        //  transforms based on scroll position
        if (scrollY > cardTop + window.innerHeight / 2) {
          card.style.transform = `translateY(${index * 20}px)`; // Stack cards
        } else {
          card.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.container}>
        {/* Card 1 */}
        <div ref={card1Ref} className={styles.card}>
          <div className="flex items-center">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-semibold text-white mb-9">
                One brand in one easy to use system, across all your locations
              </h3>
              <p className="text-white mb-9">
                Give customers a consistent brand experience, online and in
                person.
              </p>
              <button className="text-white text-start rounded-lg font-semibold flex items-center gap-1">
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={21}
                    d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <Image
                src="/img/Multi Branch FF.png"
                width={550}
                height={472}
                alt="map-image"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div ref={card2Ref} className={styles.card}>
          <div className="flex items-center">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-semibold text-white mb-9">
                Invite unlimited team members and assign custom roles
              </h3>
              <p className="text-white mb-9">
                This feature enables organizations to efficiently manage team
                members across one or multiple locations.
              </p>
              <button className="text-white text-start rounded-lg font-semibold flex items-center gap-1">
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={21}
                    d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <Image
                src="/img/Multi Branch FF.png"
                width={550}
                height={472}
                alt="map-image"
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div ref={card3Ref} className={styles.card}>
          <div className="flex items-center">
            <div className="max-w-2xl">
              <h3 className="text-4xl font-semibold text-white mb-9">
                Securely manage and organize payments: Cash, Debit, Credit
              </h3>
              <p className="text-white mb-9">
                Give customers a consistent brand experience, online and in
                person.
              </p>
              <button className="text-white text-start rounded-lg font-semibold flex items-center gap-1">
                Learn more{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={21}
                    d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296L464 48"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <Image
                src="/img/payment Home.png"
                width={550}
                height={472}
                alt="map-image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-center gap-6 mb-20">
        <p className="text-lg">Replace:</p>
        <ul className="flex items-center gap-4 text-[#016DA3] text-sm">
          {alternatives.map((item, index) => (
            <li key={index} className="bg-gray-100 px-3 py-1 rounded-md">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AppointmentStacks;
