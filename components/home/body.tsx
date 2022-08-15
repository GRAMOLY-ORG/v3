import Link from "next/link";
import Explore from "../../public/images/explore.svg";
import Target from "../../public/images/target.svg";
import About from "../../public/images/about.svg";
import Discord from "../../public/images/discord.svg";
const body = () => {
  return (
    <>
      <div
        className="flex flex-col h-screen md:h-auto align-middle justify-center mx-2 items-center
                           md:flex-row-reverse md:justify-evenly"
      >
        <div className="flex flex-col gap-y-3 md:justify-start md:relative ">
          <h4 className="text-[1.8rem] text-center text-darkblue font-semibold md:text-left md:text-[2.2rem] lg:text-[3.2rem]">
            Dive deep into
            <br />
            the sea of Science.
          </h4>
          <p className="text-darkblue opacity-80 text-center md:text-left text-sm md:w-[400px] lg:text-lg lg:w-[600px]">
            We organise podcasts with prominent personalities with expertise in
            pure sciences. Join us to delve deep into a topic of interest. Want
            expert guidance for a particular exam? We have got you covered!
            Attend our gospels with experts webinars to discuss strategies.
          </p>
          <div className="flex flex-col md:flex-row gap-2 text-sm lg:text-lg text-darkblue self-center md:self-start">
            <a
              href="https://youtube.com/c/gramoly"
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex flex-row align-baseline gap-3 opacity-80 cursor-pointer">
                <span className="flex flex-inline self-baseline hover:pr-2">
                  Check on YouTube
                </span>
                <span className="flex flex-inline self-baseline fill-darkblue hover:pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[9px] lg:h-3"
                    viewBox="0 0 14 12"
                    fill="022b3a"
                  >
                    <rect
                      width="2"
                      height="8"
                      transform="matrix(-0.707088 -0.707126 0.707089 -0.707125 7.6582 11.998)"
                      fill="022b3a"
                    />
                    <path
                      d="M6.24402 2.0983L7.65818 0.684044L13.3148 6.34109L11.9007 7.75536L6.24402 2.0983Z"
                      fill="022b3a"
                    />
                    <rect
                      width="2"
                      height="8"
                      transform="matrix(-0.707088 -0.707126 0.707089 -0.707125 1.6582 11.998)"
                      fill="022b3a"
                    />
                    <path
                      d="M0.244019 2.0983L1.65818 0.684044L7.31484 6.34109L5.90068 7.75536L0.244019 2.0983Z"
                      fill="022b3a"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="w-52 md:w-[20rem] lg:w-[27rem] pt-3">
          <Explore />
        </div>
      </div>

      <div
        className="flex flex-col h-screen md:h-auto align-middle justify-center mx-2 pt-5 md:pt-10 items-center
                           md:flex-row md:justify-evenly"
      >
        <div className="flex flex-col gap-y-3 md:justify-start md:relative ">
          <h4 className="text-[1.8rem] text-center text-darkblue md:text-left font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
            Engage with
            <br />
            like-minded peers.
          </h4>
          <p className="text-darkblue opacity-80 text-center md:text-left md:w-[400px] text-sm lg:text-lg lg:w-[600px]">
            GRAMOLY Discord is a community of over 2000 STEM Enthusiasts. Join and get access to contests, rewards, resources, guidance from subject-experts and many great experiences. find and meet people who share your creativity and passion for all STEM subjects, have fun and build your network with us.

          </p>
          <div className="flex flex-col md:flex-row gap-2 text-sm lg:text-lg text-darkblue self-center md:self-start">
            <a href="https://gramoly.org/discord" className="cursor-pointer" target="_blank" rel="noreferrer">
              <div className="flex flex-row align-baseline gap-3 opacity-80 cursor-pointer">
                <span className="flex flex-inline self-baseline hover:pr-2">
                  Join GRAM Discord.
                </span>
                <span className="flex flex-inline self-baseline fill-darkblue hover:pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[9px] lg:h-3"
                    viewBox="0 0 14 12"
                    fill="022b3a"
                  >
                    <rect
                      width="2"
                      height="8"
                      transform="matrix(-0.707088 -0.707126 0.707089 -0.707125 7.6582 11.998)"
                      fill="022b3a"
                    />
                    <path
                      d="M6.24402 2.0983L7.65818 0.684044L13.3148 6.34109L11.9007 7.75536L6.24402 2.0983Z"
                      fill="022b3a"
                    />
                    <rect
                      width="2"
                      height="8"
                      transform="matrix(-0.707088 -0.707126 0.707089 -0.707125 1.6582 11.998)"
                      fill="022b3a"
                    />
                    <path
                      d="M0.244019 2.0983L1.65818 0.684044L7.31484 6.34109L5.90068 7.75536L0.244019 2.0983Z"
                      fill="022b3a"
                    />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="w-52 md:w-[20rem] lg:w-[27rem] pt-3">
          <Discord />
        </div>
      </div>

      <div
        className="flex flex-col h-screen md:h-auto align-middle justify-center pt-5 md:pt-10 mx-2 items-center
                           md:flex-row-reverse md:justify-evenly"
      >
        <div className="flex flex-col gap-y-3 md:justify-start md:relative ">
          <h4 className="text-[1.8rem] text-center text-darkblue font-semibold md:text-left md:text-[2.2rem] lg:text-[3.2rem]">
            By students,
            <br />
            For students.
          </h4>
          <p className="text-darkblue opacity-80 text-center md:text-left text-sm md:w-[400px] lg:text-lg lg:w-[600px]">
            GRAM is a collective of curious and innovative students who strive to
            make an impact in the field of education, and change the system for
            the better by helping young minds explore various STEM fields. We
            dream of building a community of all those have a shared love for
            sciences, and rally for this cause.
          </p>
          <div className="flex flex-col md:flex-row gap-2 text-sm lg:text-lg text-darkblue self-center md:self-start">
            <Link href="/about" className="cursor-pointer" target="_blank">
              <div className="flex flex-row align-baseline gap-3 opacity-80 cursor-pointer">
                <span className="flex flex-inline self-baseline hover:pr-2">
                  More about us
                </span>
                <span className="flex flex-inline self-baseline fill-darkblue hover:pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[9px] lg:h-3"
                    viewBox="0 0 14 12"
                    fill="022b3a"
                  >
                    <rect
                      width="2"
                      height="8"
                      transform="matrix(-0.707088 -0.707126 0.707089 -0.707125 7.6582 11.998)"
                      fill="022b3a"
                    />
                    <path
                      d="M6.24402 2.0983L7.65818 0.684044L13.3148 6.34109L11.9007 7.75536L6.24402 2.0983Z"
                      fill="022b3a"
                    />
                    <rect
                      width="2"
                      height="8"
                      transform="matrix(-0.707088 -0.707126 0.707089 -0.707125 1.6582 11.998)"
                      fill="022b3a"
                    />
                    <path
                      d="M0.244019 2.0983L1.65818 0.684044L7.31484 6.34109L5.90068 7.75536L0.244019 2.0983Z"
                      fill="022b3a"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-52 md:w-[20rem] lg:w-[27rem] pt-3">
          <About />
        </div>
      </div>

      <div
        className="flex flex-col h-screen md:h-auto align-middle justify-center mx-2 py-5 md:py-10 items-center
                           md:flex-row md:justify-evenly"
      >
        <div className="flex flex-col gap-y-3 md:justify-start md:relative ">
          <h4 className="text-[1.8rem] text-center text-darkblue md:text-left font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
            Compete, Solve
            <br />
            and win!
          </h4>
          <p className="text-darkblue opacity-80 text-center md:text-left md:w-[400px] text-sm lg:text-lg lg:w-[600px]">
            GRAMOLY Challenges is a modern concept, a new platform, and a new
            route of solving problems. The challenges brought to you by GRAMOLY
            are daily problems of STEM assigned to you by the team which consist
            of live and interactive rankings, dynamic leaderboards, and points.
            It will help you become better at problem-solving in a really fun
            and gamified way.
          </p>
          <div className="flex flex-col md:flex-row gap-2 text-sm lg:text-lg text-darkblue self-center md:self-start">
            <Link href="/challenges" className="cursor-pointer" target="_blank">
              <div className="flex flex-row align-baseline gap-3 opacity-80 cursor-pointer">
                <span className="flex flex-inline self-baseline hover:pr-2">
                  Learn more
                </span>
                <span className="flex flex-inline self-baseline fill-darkblue hover:pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[9px] lg:h-3"
                    viewBox="0 0 14 12"
                    fill="022b3a"
                  >
                    <rect
                      width="2"
                      height="8"
                      transform="matrix(-0.707088 -0.707126 0.707089 -0.707125 7.6582 11.998)"
                      fill="022b3a"
                    />
                    <path
                      d="M6.24402 2.0983L7.65818 0.684044L13.3148 6.34109L11.9007 7.75536L6.24402 2.0983Z"
                      fill="022b3a"
                    />
                    <rect
                      width="2"
                      height="8"
                      transform="matrix(-0.707088 -0.707126 0.707089 -0.707125 1.6582 11.998)"
                      fill="022b3a"
                    />
                    <path
                      d="M0.244019 2.0983L1.65818 0.684044L7.31484 6.34109L5.90068 7.75536L0.244019 2.0983Z"
                      fill="022b3a"
                    />
                  </svg>
                </span>
              </div>
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
