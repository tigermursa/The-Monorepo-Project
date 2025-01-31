import React from "react";
import Image from "next/image";

const PartTwo = () => {
  return (
    <div className="w-full h-full flex justify-center items-center mt-10">
      <Image
        src={"/img/herosevtionparttwo.png"}
        alt=" "
        width={1280}
        height={720}
        className=" object-contain"
      />
    </div>
  );
};

export default PartTwo;
