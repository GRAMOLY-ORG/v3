import Chemistry from "../../public/images/chemistry.svg";
import Link from "next/link";

const landing = () => {
  return (
    <>
      <div className="flex flex-col h-full sm:h-screen align-middle justify-center mx-2  pt-16 sm:pt-6 items-center
                           md:flex-row md:justify-evenly">
        <div className="flex flex-col gap-y-6 md:justify-start md:relative ">
          <h4 className="text-[1.8rem] text-center text-darkblue md:text-left font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
            Bringing STEM to
            <br />
            the world.
          </h4>
          <p className="text-darkblue opacity-80 text-center md:text-left md:w-[400px] text-sm lg:text-lg lg:w-[600px]">
            GRAM is a not-for-profit and volunteer-based initiative to raise
            awareness towards various STEM fields. We Intend to do this through
            various events like podcasts, webinars, and contests. We are known
            for our vast community of over achieving students and phenomenal
            guest speakers.
          </p>
          <div className="flex flex-col md:flex-row gap-2 self-center md:self-start">
            <button className="text-sm lg:text-lg bg-darkblue text-center py-2 w-[12rem] lg:mt-4 lg:w-[15rem] rounded-sm text-white hover:shadow-lg">
              <Link href="https://gramoly.org/discord" target="_blank" rel="noreferrer" >
                Join the Discord
              </Link>
            </button>
            <button className="text-sm lg:text-lg bg-white text-center py-2 w-[12rem] lg:mt-4 lg:w-[15rem] rounded-sm text-darkblue border-darkblue border hover:shadow-lg">
              <a href="https://youtube.com/gramoly" target="_blank" rel="noreferrer" >
                Check out YouTube
              </a>
            </button>
          </div>
        </div>
        <div className="w-52 md:w-[20rem] lg:w-[27rem] pt-3">
          <Chemistry />
        </div>
      </div>
    </>
  );
};
export default landing;

