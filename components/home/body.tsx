import Link from "next/link";
import Explore from "../../public/images/explore.svg";
import Target from "../../public/images/target.svg";
import About from "../../public/images/about.svg";
import Discord from "../../public/images/discord.svg";
import Image from "next/image";
import { Youtube } from "react-feather";
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
                  Check YouTube Channel
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
            GRAMOLY Discord is a community of over 2000 STEM Enthusiasts. Join
            and get access to contests, rewards, resources, guidance from
            subject-experts and many great experiences. find and meet people who
            share your creativity and passion for all STEM subjects, have fun
            and build your network with us.
          </p>
          <div className="flex flex-col md:flex-row gap-2 text-sm lg:text-lg text-darkblue self-center md:self-start">
            <a
              href="https://gramoly.org/discord"
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
            >
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
            By the students,
            <br />
            For the students.
          </h4>
          <p className="text-darkblue opacity-80 text-center md:text-left text-sm md:w-[400px] lg:text-lg lg:w-[600px]">
            GRAM is a collective of curious and innovative students who strive
            to make an impact in the field of education, and change the system
            for the better by helping young minds explore various STEM fields.
            We dream of building a community of all those have a shared love for
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

      <div className="flex flex-col justify-center align-middle gap-2 py-5 ">
        <h4 className="text-[1.8rem] text-center text-darkblue font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
          Numbers tell our story
        </h4>
      </div>

      <div className="flex flex-col md:flex-row gap-3 h-auto align-middle justify-center px-2 py-5 md:py-10 items-center  md:justify-evenly ">
        <div className="flex flex-col align-middle text-center border-2  py-16 md:py-24 gap-3 rounded-sm shadow-md border-darkblue hover:bg-darkblue ease-in text-darkblue hover:text-white">
          <h4 className="text-[1.8rem] text-center  px-16 md:px-14 lg:px-[4.5rem] shrink font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
            3000+
          </h4>
          <p className=" opacity-80 text-sm lg:text-lg">
            Explorers, <br /> Exploring STEM with us.
          </p>
        </div>
        <div className="flex flex-col align-middle text-center border-2  py-16 md:py-24 gap-3 rounded-sm shadow-md border-darkblue hover:bg-darkblue ease-in text-darkblue hover:text-white">
          <h4 className="text-[1.8rem] text-center  px-16 md:px-14 lg:px-[4.5rem] shrink font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
            &nbsp;200+&nbsp;
          </h4>
          <p className=" opacity-80 text-sm lg:text-lg">
            Volunteers, <br /> Spreading STEM with us.
          </p>
        </div>
        <div className="flex flex-col align-middle text-center border-2  py-16 md:py-24 gap-3 rounded-sm shadow-md border-darkblue hover:bg-darkblue ease-in text-darkblue hover:text-white">
          <h4 className="text-[1.8rem] text-center  px-16 md:px-14 lg:px-[4.5rem] shrink font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
            330k+
          </h4>
          <p className=" opacity-80 text-sm lg:text-lg">
            Watch minutes, <br /> reached on YouTube.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 h-auto align-middle justify-center px-2 -mt-2 md:py-10 items-center  md:justify-evenly  shrink">
        <div className="flex flex-col align-middle text-center border-2  py-16 md:py-24 gap-3 rounded-sm shadow-md border-darkblue hover:bg-darkblue ease-in text-darkblue hover:text-white">
          <h4 className="text-[1.8rem] text-center  px-16 md:px-14 lg:px-[4.5rem] shrink font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
            &nbsp;20k+&nbsp;
          </h4>
          <p className=" opacity-80 text-sm lg:text-lg">
            Hours, <br /> of volunteering work.
          </p>
        </div>
        <div className="flex flex-col align-middle text-center border-2  py-16 md:py-24 gap-3 rounded-sm shadow-md border-darkblue hover:bg-darkblue ease-in text-darkblue hover:text-white">
          <h4 className="text-[1.8rem] text-center  px-16 md:px-14 lg:px-[4.5rem] shrink font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
            &nbsp;&nbsp;&nbsp;56&nbsp;&nbsp;&nbsp;
          </h4>
          <p className=" opacity-80 text-sm lg:text-lg">
            Countries, <br /> our members are from.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 h-auto align-middle justify-center px-2 pt-10 items-center shrink">
        <h4 className="text-[1.8rem] text-center text-darkblue md:text-left font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
          Guest Speakers
        </h4>
        <p className="text-darkblue opacity-80 text-center text-sm lg:text-lg ">
          from webinars to round-tables with teachers to students, scientists to
          engineers at{" "}
          <a
            href="https://youtube.com/c/gramoly"
            className="opacity-100 hover:font-semibold underline underline-offset-2 hover:opacity-80"
          >
            GRAMOLY YouTube
          </a>
        </p>
      </div>

      <div className="flex flex-col md:flex-row px-2 mt-10 gap-5 items-center align-middle justify-center ">
        <img src="/images/chitraang.png" className="rounded-sm md:h-[38vh]" />
        <div className="flex flex-col relative justify-between text-center md:text-left md:w-[50vw] gap-4">
          <div className="">
            <h2 className="text-darkblue font-semibold">Bills v/s Balls</h2>
            <h1 className="text-darkblue opacity-80">
              Unconventional Reflections #1
            </h1>
            <h1 className="text-darkblue opacity-80">With Chitraang Murdia</h1>
          </div>
          <p className="text-darkblue opacity-80 text-sm">
            Chitraang Murdia is a Ph.D. Student of Physics at UC Berkeley. He
            did his undergrad in Physics and Math from MIT. He is an IIT Bombay
            CS Dropout. He is an IPhO Gold medalist and IIT JEE All India Rank
            1.
            <br />
            Unconventional Reflections is a series by GRAM where we invite
            students pursuing Unconventional Careers. Here Bill v/s Balls means
            choosing your passion over money. In this conversation, Chitraang
            talks about how he overcame all the hurdles and his story of
            devoting his life to physics and also inspires us to do the same.
            <br />
            <a href="https://www.youtube.com/watch?v=Hkj16h3xBvk">
              <div className="flex flex-row align-baseline gap-3 justify-center md:justify-start opacity-80 text-darkblue text-sm cursor-pointer">
                <span className="flex flex-inline self-baseline hover:pr-2">
                  Watch Now
                </span>
                <span className="flex flex-inline self-baseline fill-darkblue hover:pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[8px] lg:h-[9px]"
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
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row px-2 mt-10 gap-5 items-center align-middle justify-center ">
        <img
          src="/images/Pranjal.jpg"
          className="rounded-sm md:h-[38vh] grayscale"
        />
        <div className="flex flex-col relative justify-between text-center md:text-left md:w-[50vw] gap-4">
          <div className="">
            <h2 className="text-darkblue font-semibold">
              A resolution to Maths
            </h2>
            <h1 className="text-darkblue opacity-80">
              Unconventional Reflections #2
            </h1>
            <h1 className="text-darkblue opacity-80">With Pranjal Jain</h1>
          </div>
          <p className="text-darkblue opacity-80 text-sm">
            Pranjal Jain is an Undergraduate student of mathematics at IISER
            Pune. He has authored 7 publications in his initial years of
            undergraduation itself.
            <br />
            Unconventional Reflections is a series by GRAM where we invite
            students pursuing Unconventional Careers. In this conversation,
            Pranjal talks about how he overcame all the hurdles and his story of
            devoting his life to maths and also inspires us to do the same. In
            this conversation hosted by Samyak Sheersh, Pranjal gives us an
            insight into &quot;Mathematics as a Career&quot; and the massive opportunities
            that lie up there.
            <br />
            <a href="https://www.youtube.com/watch?v=XicGUK2XAnQ">
              <div className="flex flex-row align-baseline gap-3 justify-center md:justify-start opacity-80 text-darkblue text-sm cursor-pointer">
                <span className="flex flex-inline self-baseline hover:pr-2">
                  Watch Now
                </span>
                <span className="flex flex-inline self-baseline fill-darkblue hover:pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[8px] lg:h-[9px]"
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
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center p-2 justify-center text-center w-full mt-10 shrink">
        <h2 className="text-darkblue font-semibold">Roots in Pure Science</h2>
        <h1 className="text-darkblue opacity-80 pb-3">
          GRAMOLY&apos;s Round Tables #1
        </h1>
        <ul className="text-darkblue opacity-80 pb-3">
          <li>
            Arka Sinha - IISc Dropout, Undergraduate Student at ISI Kolkata{" "}
          </li>
          <li>
            Chirag Falor- AIR 1 JEE Advanced 2020, IOAA Gold Medalist and
            Undergraduate Student at MIT
          </li>
          <li>Gaurav Goel- Undergraduate Student at Harvard University</li>
          <li>
            Hemansh Shah- IOAA Silver Medalist, Undergraduate Student at IISc
            Bangalore
          </li>
          <li>Heramb Podar- Undergraduate Student at IIT Roorkee</li>
          <li>
            Nisarg Chadha- AIR 16 JEE Advanced 2020, Undergraduate Student at
            IISc Bangalore
          </li>
          <li>Pranjal Jain- Undergraduate Math Student at IISER Pune</li>
        </ul>
        <a
          href="https://www.youtube.com/watch?v=pjGXLBHS_8M"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="w-screen  md:w-[90vh]"
            src="https://img.youtube.com/vi/pjGXLBHS_8M/maxresdefault.jpg"
          ></img>
        </a>
      </div>

      <div className="flex flex-col px-2 justify-center align-middle gap-2 py-16 md:px-40">
        <h4 className="text-[1.8rem] text-center text-darkblue font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
          Collaborations
        </h4>
        <p className="text-darkblue opacity-80 text-center text-sm lg:text-lg ">
          GRAMOLY has collaborated with the following organizations to improve
          their goal in providing STEM education to students all over the world
          who wish to pursue their careers in STEM learning. Not only does it
          provide educational courses, it encourages free STEM learning for
          students in both privileged and unprivileged societies.
        </p>
      </div>

      <div className="flex flex-col px-2 md:px-40 text-darkblue justify-center items-center align-middle gap-4">
        <div>
          <h2>Physics Sir JEE</h2>
          <p className="opacity-80 text-sm lg:text-lg pb-1">
            Under Janardanudu Thallaparthi, who is an IIT Madras Alum, an ardent
            physics teacher for 14 years, and an All India Ranked 251 in JEE,
            makes videos on engaging and fascinating physics concepts that are
            helpful for while preparing for JEE and physics olympiads. His
            channel has over 20k Subscribers.Physics Sir JEE helped power the
            FIZIKA competition initiative by GRAMOLY which was conducted as an
            open and competitive physics challenge.
          </p>
          <a
            className="inline-flex"
            href="https://www.youtube.com/c/PHYSICSSIRJEEJANARDHAN"
          >
            <Youtube size="30" />
          </a>
        </div>
        <div>
          <h2>Indian School of Physics</h2>
          <p className="opacity-80 text-sm lg:text-lg pb-1">
            Under Nitin Sachan, who is an IIT Madras Alum and a great physics
            teacher and eager physics lover, is focused on making videos that
            help students learn to face challenging and intriguing physics
            problems by providing creative solutions. His channel has over 28k
            Subscribers. These videos also teach topics that are rarely taught
            in schools and are of major assistance when it comes to preparing
            for competitive examinations like olympiads. INSP helped power the
            FIZIKA competition initiative by GRAMOLY which was conducted as an
            open and competitive physics challenge.
          </p>
          <a
            className="inline-flex"
            href="https://www.youtube.com/c/indianschoolofphysicsnitin/"
          >
            <Youtube size="30" />
          </a>
        </div>
        <div>
          <h2>NutanStrek</h2>
          <p className="opacity-80 text-sm lg:text-lg pb-1">
            We have collaborated with NutanStrek to bring you an amazing series
            of Mathematical physics at the undergrad level. This series will
            build up to Tensors & Differential Geometry starting from the very
            basics of Curvilinear Coordinates and MVC. By the end of this
            series, you will be well versed to understand the General Theory of
            Relativity at least from a mathematical point of view. The course
            started on Friday, 26th March, 2021.
          </p>
          <a
            className="inline-flex"
            href="https://www.youtube.com/c/nutanstrek/"
          >
            <Youtube size="30" />
          </a>
        </div>
        <div>
          <h2>STEM Horizons</h2>
          <p className="opacity-80 text-sm lg:text-lg pb-1">
            An organization that brings varied STEM experiences for students all
            over the world by providing a diverse range of idiosyncratic
            opportunities. These activities conducted by them enhance the
            interest and skills towards STEM learning. Performing activities
            with peers and visiting different locations to learn science beyond
            just the classroom environment definitely engages the students&apos;
            mind to a different level. STEM Horizons also collaborated with
            Gramoly for the GSHOC Camp that gave students around the world the
            opportunity to take part in a free, seven-week Mathematics Olympiad
            program. Designed for middle and high school students, this
            intensive program helped improve and strengthen students&apos;
            mathematical skills.
          </p>
          <a
            className="inline-flex"
            href="https://www.youtube.com/channel/UCKDgFvlg2DlgqUzUvvkCALw/about/"
          >
            <Youtube size="30" />
          </a>
        </div>
        <div>
          <h2>REAL & IMAGINARY</h2>
          <p className="opacity-80 text-sm lg:text-lg pb-1">
            A YouTube channel, run by Kowshiq Kattamuri, provides a wide range
            of solutions and explanations for mathematics problems. Kowshiq
            taught linear algebra to High Schoolers on GRAMOLY&apos;s YouTube
            Channel.
          </p>
          <a
            className="inline-flex"
            href="https://www.youtube.com/channel/UCKDgFvlg2DlgqUzUvvkCALw/about/"
          >
            <Youtube size="30" />
          </a>
        </div>
      </div>
    </>
  );
};

export default body;
