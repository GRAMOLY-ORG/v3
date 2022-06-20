import Chemistry from "../../public/lottie/chemistry.json";
import Lottie from "lottie-react";
import Link from "next/link";

const landing = () => {
  return (
    <>
      <div className="flex flex-col h-screen align-middle justify-center mx-2 pt-6 items-center
                           md:flex-row md:justify-evenly">
        <div className="flex flex-col gap-y-3 md:justify-start md:relative ">
          <h3 className="  text-[1.8rem] text-center text-darkblue md:text-left md:text-[3.2rem]">
            Bringing STEM to
            <br />
            the world
          </h3>
          <p className="text-darkblue opacity-80 text-center md:text-left text-sm md:w-[400px] lg:text-lg lg:w-[600px]">
            GRAM is a not-for-profit and volunteer-based initiative to raise
            awareness towards various STEM fields. We Intend to do this through
            various events like podcasts, webinars, and contests. We are known
            for our vast community of over achieving students and phenomenal
            guest speakers.
          </p>
          <div className="flex flex-col md:flex-row gap-2 self-center md:self-start">
            <button className="text-sm lg:text-lg bg-darkblue text-center py-2 w-[12rem] lg:mt-4 lg:w-[15rem] rounded-sm text-white hover:shadow-lg">
              <Link href="https://gramoly.org/discord" target="_blank">
                Join the Discord
              </Link>
            </button>
            <button className="text-sm lg:text-lg bg-white text-center py-2 w-[12rem] lg:mt-4 lg:w-[15rem] rounded-sm text-darkblue border-darkblue border hover:shadow-lg">
              <Link href="https://youtube.com/gramoly" target="_blank">
                Check out YouTube
              </Link>
            </button>
          </div>
        </div>
        <div className="w-52 md:w-[20rem] lg:w-[27rem] pt-3">
          <Lottie animationData={Chemistry} loop={true} />
        </div>
      </div>
    </>
  );
};
export default landing;

