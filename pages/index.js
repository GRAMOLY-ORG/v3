import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col w-full h-screen justify-center text-center">
        <div className="m-auto">
          <h1 className="text-black font-[850] tracking-wider my-[-2rem] text-[9rem]">
            GRAM
          </h1>
          <h2 className="text-[3rem] text-black tracking-tight my-[0rem] ">
            Bringing STEM to the World.
          </h2>
        </div>
      </div>
      
      <div className="flex flex-col w-full h-screen justify-center text-center ">
        <div className="m-auto">
          <h1 className="text-black font-[850] tracking-wider my-[-2rem] text-[9rem]">
            GRAM
          </h1>
          <h2 className="text-[3rem] text-black tracking-tight my-[0rem] ">
            Bringing STEM to the World.
          </h2>
        </div>
      </div>
    </>
  );
}
