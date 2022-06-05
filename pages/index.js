import Head from "next/head";
import Image from "next/image";
import Chemistry from "../public/lottie/chemistry.json";
import Lottie from "lottie-react";

export default function Home() {
  return (
    <>
      <div className="flex h-screen w-full flex-row items-center justify-center shapes1">
        <div className="flex flex-col items-center justify-start md:items-start">
          <h1 className="md:my-[-2rem] text-center text-[4rem] sm:text-[7rem] font-[850] tracking-widest text-black md:text-left md:text-[7rem] lg:text-[8rem] xl:text-[10rem] drop-shadow-xl ">
            GRAM
          </h1>
          <h2 className="my-[0rem] text-center text-[1.7rem] sm:text-[2rem] text-black md:pl-3 md:text-left md:text-[2.3rem] lg:text-[2.7rem] drop-shadow-xl">
            Bringing STEM to <br /> the World.
          </h2>
          <div className="flex flex-col space-evenly justify-center justify-items-center place-items-center md:flex-row  pl-3 py-5">
          <button className="bg-sky text-white w-fit p-3 md font-bold rounded-[5px] border-sky transition ease-in-out  hover:scale-105 shadow-md my-3 md:my-0" >
          Join the Discord
          </button>
          <button className="bg-white text-sky border-sky border-2 w-fit p-3 font-bold mx-3 rounded-[5px] hover:scale-105 shadow-md">
          Join Discord
          </button>
          </div>
        </div>
        <div className="hidden md:block md:mt-[5rem] ">
          <Lottie
            className=""
            animationData={Chemistry}
            style={{
              height: 550,
            }}
            loop="true"
          />
        </div>
      </div>

    </>
  );
}
