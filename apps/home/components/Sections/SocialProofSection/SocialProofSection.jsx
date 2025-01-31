import Image from "next/image";
import React from "react";

const SocialProofSection = () => {
  return (
    <div className="flex justify-center flex-col pb-44 w-full max-w-7xl mx-auto mt-24">
      <p className="text-center text-gray  mb-16 text-base">
        Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the
        World
      </p>
      <div className="flex justify-between items-center flex-wrap">
        <Image
          src={"/logos/Aqua.png"}
          width={183}
          height={48}
          alt="proof images"
          className="object-contain cursor-pointer"
        />
        <Image
          src={"/logos/logo cfr.png"}
          width={121}
          height={58}
          alt="proof images"
          className="object-contain cursor-pointer"
        />
        <Image
          src={"/logos/mucha_marketing.png"}
          width={159}
          height={48}
          alt="proof images"
          className="object-contain cursor-pointer"
        />
        <Image
          src={"/logos/skin_precision.png"}
          width={174}
          height={48}
          alt="proof images"
          className="object-contain cursor-pointer"
        />
        <Image
          src={"/logos/RH-logo.png"}
          width={58}
          height={588}
          alt="proof images"
          className="object-contain cursor-pointer"
        />
        <Image
          src={"/logos/SpaTruCLINICS.png"}
          width={157}
          height={48}
          alt="proof images"
          className="object-contain cursor-pointer"
        />
      </div>
    </div>
  );
};

export default SocialProofSection;
