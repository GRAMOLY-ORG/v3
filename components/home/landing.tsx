import Chemistry from "../../public/lottie/chemistry.json";
import Lottie from "lottie-react";

const landing = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row h-screen justify-center pt-20 sm:pt-0 sm:justify-evenly items-center md:p-3">
        <div className="flex flex-col items-center align-center sm:justify-start text-center sm:text-left">
          <h1 className="text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] sm:-ml-3 md:-ml-2 sm:self-start lg:-ml-3 font-[800] -mb-5  text-darkblue">
            GRAM
          </h1>
          <h2 className="text-[1.5rem] md:text-[1.7rem] lg:text-[1.9rem] shrink font-[500] self-center sm:self-start text-darkblue sm:mb-7">
            Bringing STEM to <br />the World.
          </h2>
          <div className="flex flex-col space-evenly justify-center self-center scale-90 sm:scale-100 sm:justify-start md:flex-row sm:self-start  gap-x-4">
            <button className="bg-sky text-white w-[12rem] p-2 md font-bold rounded-[5px] border-sky transition ease-in-out  hover:scale-105 shadow-md">
              Join the Discord
            </button>
            <button className="bg-white text-sky w-[12rem] border-sky border-2  mt-3 md:mt-0 p-2 font-bold rounded-[5px] hover:scale-105 shadow-md">
              YouTube
            </button>
          </div>
        </div>
        <div className="w-52 pt-5 md:w-[19rem] lg:w-[25rem]">
          <Lottie
            animationData={Chemistry}
            style={{}}
            loop={true}
          />
        </div>
      </div>
    </>
  );
};

export default landing;