import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#19525A] text-white">
      <div className="container mx-auto px-[20px] py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {/* For Customers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 w-[40%] pb-1">
              For Customers
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              {[
                "Find a Practitioner",
                "Book an Appointment",
                "Mole Payment",
                "Live Consultant",
                "Refund",
                "Shop",
                "Resources",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:border-s-2 hover:ps-2">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Practitioners */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 w-[50%] pb-1">
              For Practitioners
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              {[
                "Profile Setup",
                "Organization Setup",
                "Create Schedule",
                "Collaboration",
                "Withdraw",
                "Pay Staff",
                "QR Code",
                "Booking page",
                "Business Tools",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:border-s-2 hover:ps-2">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 w-[30%] pb-1">
              Resources
            </h3>
            <ul className="space-y-2 text-sm opacity-90">
              {[
                "Home",
                "Blog",
                "Community",
                "FAQ",
                "Reviews",
                "Refund & Return",
                "Documentations",
                "Road Map",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:border-s-2 hover:ps-2">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold border-b-2 w-[30%] pb-1">
              Company
            </h3>
            <ul className="space-y-2 text-sm opacity-90 ">
              {[
                "About Us",
                "Contact Us",
                "Career",
                "Support Center",
                "Affiliate Program",
                "Trust and Safety",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:border-s-2 hover:ps-2">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex gap-[26px] items-center hover:underline mt-8">
          <p>Follow Us :</p>
          <Image
            src={"/icons/Twitter white.png"}
            width={30}
            height={24}
            alt="Twitter white.png"
            className="w-[30px] h-[24px] object-contain  cursor-pointer"
          />
          <Image
            src={"/icons/Linkedin white.png"}
            width={30}
            height={24}
            alt="Linkedin"
            className="w-[26px] h-[26px] object-contain cursor-pointer"
          />
          <Image src={"/icons/FB white.png"} width={30} height={24} alt="" />
          <Image
            src={"/icons/Instagram white.png"}
            width={30}
            height={24}
            alt="FB "
            className="w-[26px] h-[26px] object-contain cursor-pointer"
          />
          <Image
            src={"/icons/Youtube white.png"}
            width={30}
            height={24}
            alt="Youtube"
            className="w-[31px] h-[24px] object-contain cursor-pointer"
          />
        </div>
        {/* Copyright Section */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm opacity-75">
              Copyright © 2022. Ambal. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="hover:opacity-100 hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:opacity-100 hover:underline">
                Cookies
              </Link>
              <Link href="#" className="hover:opacity-100 hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
