import React, { PropsWithChildren } from "react";
import Image from "next/image";

interface MemberProps {
  img: string;
  name: string;
  role: string;
}

export const Member: React.FC<MemberProps> = ({ img, name, role }) => {
  return (
    <>
      <div className="flex flex-col items-center align-middle">
        <Image
          className="w-44 rounded-full border-4 border-[#022b3a] bg-[#bfdbf7] fill-[#022b3a] transition-all hover:-rotate-12 hover:scale-110"
          src={img}
          height="11rem"
          width="11rem"
        />
        <h2 className="pt-4 text-3xl text-[#022b3a]">{name}</h2>
        <h3 className="text-xl text-[#022b3a] opacity-70">{role}</h3>
      </div>
    </>
  );
};
