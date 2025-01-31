import Image from "next/image";

const PartTwo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-10 px-4">
      <div className="w-full max-w-6xl">
        <Image
          src={"/img/herosevtionparttwo.png"}
          alt="Hero Section Image"
          width={1280}
          height={720}
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default PartTwo;
