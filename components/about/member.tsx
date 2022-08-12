import { NextPage } from "next";

interface MemberProps {
  img: string;
  name: string;
  role: string;
}

export const Member: NextPage<MemberProps> = ({img, name, role}) => {

  return (
    <>
      <div className="flex flex-col items-center align-middle">
        <img
          className="w-28 rounded-full border-4 border-[#022b3a] bg-[#bfdbf7] fill-[#022b3a] transition-all hover:-rotate-12 hover:scale-110"
          src={img}
        />
        <span className="pt-4 text-center text-lg text-[#022b3a]">{name}</span>
        <span className="text-sm text-center text-[#022b3a] opacity-70">{role}</span>
      </div>
    </>
  );
};
