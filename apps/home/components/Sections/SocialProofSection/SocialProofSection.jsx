import Image from "next/image";

const SocialProofSection = () => {
  return (
    <div className="flex justify-center flex-col pb-20 md:pb-44 w-full max-w-7xl mx-auto mt-12 md:mt-24 px-4">
      <p className="text-center text-[#475467] mb-8 md:mb-16 text-base font-medium">
        Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the
        World
      </p>

      {/* Logos Section */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-between items-center">
        <Image
          src={"/logos/Aqua.png"}
          width={183}
          height={48}
          alt="Aqua logo"
          className="object-contain cursor-pointer w-[120px] md:w-[150px] lg:w-[183px]"
        />
        <Image
          src={"/logos/logo cfr.png"}
          width={121}
          height={58}
          alt="CFR logo"
          className="object-contain cursor-pointer w-[100px] md:w-[110px] lg:w-[121px]"
        />
        <Image
          src={"/logos/mucha_marketing.png"}
          width={159}
          height={48}
          alt="Mucha Marketing logo"
          className="object-contain cursor-pointer w-[130px] md:w-[140px] lg:w-[159px]"
        />
        <Image
          src={"/logos/skin_precision.png"}
          width={174}
          height={48}
          alt="Skin Precision logo"
          className="object-contain cursor-pointer w-[140px] md:w-[160px] lg:w-[174px]"
        />
        <Image
          src={"/logos/RH-logo.png"}
          width={58}
          height={588}
          alt="RH logo"
          className="object-contain cursor-pointer w-[40px] md:w-[50px] lg:w-[58px]"
        />
        <Image
          src={"/logos/SpaTruCLINICS.png"}
          width={157}
          height={48}
          alt="SpaTru Clinics logo"
          className="object-contain cursor-pointer w-[130px] md:w-[140px] lg:w-[157px]"
        />
      </div>
    </div>
  );
};

export default SocialProofSection;
