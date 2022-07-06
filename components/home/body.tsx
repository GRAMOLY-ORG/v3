import Link from "next/link";
import Explore from "../../public/images/explore.svg"
import Target from "../../public/images/target.svg"

const body = () => {
  return (
    <>
      <div
        className="flex flex-col h-screen md:h-auto align-middle justify-center mx-2 items-center
                           md:flex-row-reverse md:justify-evenly">
        <div className="flex flex-col gap-y-3 md:justify-start md:relative ">
          <h4 className="text-[1.8rem] text-center text-darkblue font-semibold md:text-left md:text-[2.2rem] lg:text-[3.2rem]">
            Dive deep into 
            <br />
            the sea of Science.
          </h4>
          <p className="text-darkblue opacity-80 text-center md:text-left text-sm md:w-[400px] lg:text-lg lg:w-[600px]">
            GRAM is a not-for-profit and volunteer-based initiative to raise
            awareness towards various STEM fields. We Intend to do this through
            various events like podcasts, webinars, and contests. We are known
            for our vast community of over achieving students and phenomenal
            guest speakers.
          </p>
        </div>
        <div className="w-52 md:w-[20rem] lg:w-[27rem] pt-3">
        <Explore /> 
        </div>
      </div>
      <div className="flex flex-col h-screen md:h-auto align-middle justify-center mx-2 pt-5 md:pt-32 items-center
                           md:flex-row md:justify-evenly">
        <div className="flex flex-col gap-y-3 md:justify-start md:relative ">
          <h4 className="text-[1.8rem] text-center text-darkblue md:text-left font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
            Compete, Solve
            <br />
            and win!
          </h4>
          <p className="text-darkblue opacity-80 text-center md:text-left md:w-[400px] text-sm lg:text-lg lg:w-[600px]">
          GRAMOLY Challenges is a modern concept, a new platform, and a new route of solving problems. The challenges brought to you by GRAMOLY are daily problems of STEM assigned to you by the team which consist of live and interactive rankings, dynamic leaderboards, and points. It will help you become better at problem-solving in a really fun and gamified way.
          </p>
          <div className="flex flex-col md:flex-row gap-2 hover:translate-x-2 text-sm lg:text-lg text-darkblue self-center md:self-start">
              <Link href="/challenges" className="" target="_blank">
                Learn more  🡲
              </Link>
          </div>
        </div>
        <div className="w-52 md:w-[20rem] lg:w-[27rem] pt-3">
          <Target />
        </div>
      </div>
    </>
  );
};

export default body;
