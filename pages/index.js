import Chemistry from "../public/lottie/chemistry.json";
import Lottie from "lottie-react";
import avatars from "../lib/avatars";

//const avatar_1 = avatars[1:2];

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen w-full md:flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-start md:items-start">
          <h1 className="md:my-[-2rem] text-center self-center text-[6rem] sm:text-[7rem] font-[850] tracking-widest text-darkblue md:text-left md:text-[7rem] lg:text-[8rem] xl:text-[10rem] drop-shadow-xl ">
            GRAM
          </h1>
          <h2 className="my-[0rem] text-center text-[1.7rem] sm:text-[2rem] text-darkblue md:pl-3 md:text-left md:text-[2.3rem] lg:text-[2.7rem] drop-shadow-xl">
            Bringing STEM to <br /> the World.
          </h2>
          <div className="flex flex-col space-evenly justify-center justify-items-center place-items-center md:flex-row  pl-3 py-5">
            <button className="bg-sky text-white w-[13rem] p-3 md font-bold rounded-[5px] border-sky transition ease-in-out  hover:scale-105 shadow-md">
              Join the Discord
            </button>
            <button className="bg-white text-sky w-[13rem] border-sky border-2  mt-3 md:mt-0 p-3 font-bold mx-3 rounded-[5px] hover:scale-105 shadow-md">
              YouTube
            </button>
          </div>
        </div>
        <div className="w-64 m-0 md:block md:w-[500px] md:mt-[5rem] ">
          <Lottie
            className=""
            animationData={Chemistry}
            style={{}}
            loop="true"
          />
        </div>
      </div>
    </>
  );
}
