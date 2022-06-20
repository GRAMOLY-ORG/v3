import Chemistry from "../../public/lottie/chemistry.json";
import Lottie from "lottie-react";
import Link from "next/link";

const landing = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-full md:h-screen items-center justify-evenly md:justify-around px-5 p-16">
        <div className="flex flex-col gap-y-4 ">
          <h1 className="text-darkblue text-center md:text-left font-[600] text-[2rem] md:text-[2.2rem] lg:text-[2.6rem] lg:leading-[3.5rem]">
            Bringing STEM to <br /> the World.
          </h1>
          <p className="text-darkblue opacity-80 text-center md:text-left px-5 md:px-0 w-[26rem] lg:w-[32rem] lg:pb-2 text-sm md:text-base">
            GRAM is a not-for-profit and volunteer-based initiative to raise
            awareness towards various STEM fields. We Intend to do this through
            various events like podcasts, webinars, and contests. We are known
            for our vast community of over achieving students and phenomenal
            guest speakers.
          </p>
          <div className="flex flex-col md:flex-row gap-2 self-center md:self-start">
            <button className="text-sm lg:text-base bg-darkblue text-center py-2 w-[12rem] lg:w-[13rem] rounded-sm text-white">
              <Link href="https://gramoly.org/discord" target="_blank">
                Join the Discord
              </Link>
            </button>
            <button className="text-sm lg:text-base bg-white text-center py-2 w-[12rem] lg:w-[13rem] rounded-sm text-darkblue border-darkblue border">
              <Link href="https://youtube.com/gramoly" target="_blank">
                Check out YouTube
              </Link>
            </button>
          </div>
        </div>
        <div className="w-52 md:w-[25rem] lg:w-[27rem] pt-4">
          <Lottie animationData={Chemistry} loop={true} />
        </div>
      </div>
    </>
  );
};
export default landing;
