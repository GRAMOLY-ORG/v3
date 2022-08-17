import { Member } from "../components/about/member";
import Head from "next/head";
import {
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Globe,
  Youtube,
} from "../components/about/socials";
import { Link } from "react-feather";
import Heart from "../public/images/heart.svg";
const about = () => {
  return (
    <>
      <Head>
        <title>About - GRAMOLY</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://gramoly.org/" rel="canonical" />
        <meta name="theme-color" content="#10101A" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#10101A" />
        <meta
          name="description"
          content="GRAM is a not-for-profit and volunteer-based initiative to raise awareness towards various STEM fields. We Intend to do this through various events like podcasts, webinars, and contests. We are known for our vast community of over achieving students and phenomenal guest speakers."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="GRAMOLY - Bringing STEM to the World."
        />
        <meta property="og:url" content="https://gramoly.org/" />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          property="og:description"
          content="GRAM is a not-for-profit and volunteer-based initiative to raise awareness towards various STEM fields. We Intend to do this through various events like podcasts, webinars, and contests. We are known for our vast community of over achieving students and phenomenal guest speakers."
        />
        <meta
          name="twitter:title"
          content="GRAMOLY - Bringing STEM to the World."
        />
        <meta
          name="twitter:description"
          content="GRAM is a not-for-profit and volunteer-based initiative to raise awareness towards various STEM fields. We Intend to do this through various events like podcasts, webinars, and contests. We are known for our vast community of over achieving students and phenomenal guest speakers."
        />
      </Head>
      <div
        className="flex flex-col h-screen align-middle justify-center mx-2 pt-5 md:pt-16 items-center
                           md:flex-row md:justify-evenly"
      >
        <div className="flex flex-col gap-y-3 md:justify-start md:relative ">
          <p className="text-darkblue opacity-80 text-center md:text-left md:w-[400px] text-sm lg:text-lg lg:w-[600px]">
          Imagine a world where each child gets food and education. Imagine a
          world where everyone gets equal opportunity. Imagine a world where
          everyone lives life in peace. We and innumerable people are living in
          this dream for years unknown and working to make it a reality.
          <br />
          It&apos;s been hard days and nights. We made mistakes, arguably a lot of,
          but we repent, adapt, improvise and Improve. That&apos;s what makes us who
          we are. We are not a mere organization, our dreams and goals are much
          beyond GRAMOLY.
          <br />
          We are a dream seen by countless men, we are emotions of countless
          children, we are the struggle worn by countless girls. That gives us
          true strength to face challenges, Improve ourselves, and fight for the
          cause.
          <br />
          We hope someday you will join us and we would live this dream
          together—the time has come when you shall redeem the grace bestowed
          upon you, lend a hand to dying humanity, and hope for a brighter
          tomorrow.
          </p>
        </div>
        <div className="w-52 md:w-[20rem] lg:w-[27rem] pt-3">
          <Heart />
        </div>
      </div>
      <div className="flex flex-col mx-2 md:mx-16  pb-10 align-center items-center text-center gap-4 flex-wrap">
        <h4 className="text-[1.8rem] text-center text-darkblue font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
          Meet the team
        </h4>
        <p className="text-darkblue opacity-80 text-center text-sm lg:text-lg">
          GRAM is a collective of curious and innovative students who strive to
          make an impact in the field of education, and change the system for
          the better by helping young minds explore various STEM fields. We
          dream of building a community of all those have a shared love for
          sciences, and rally for this cause. <br />
        </p>
      </div>
      <div className="grid grid-cols-1 shrink sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-10  align-center align-middle mx-2  pb-16">
        <Member
          img="/images/avatars/ilm.svg"
          name="ILM"
          role="Administrator"
        ></Member>
        <Member
          img="/images/avatars/badal.svg"
          name="Badal Panchani"
          role="Administrator"
        >
          <Github gh="theblapse" />
          <Twitter twtr="theblapse" />
        </Member>
        <Member
          img="/images/avatars/aayush.svg"
          name="Aayush Anand"
          role="Administrator"
        >
          <Linkedin lnkdn="aayush-anand-043756203" />
        </Member>

        <Member
          img="/images/avatars/soumendu.svg"
          name="Soumendu Jana"
          role="Administrator"
        />
        <Member
          img="/images/avatars/abhishek.svg"
          name="Abhishek Roy"
          role="Administrator"
        >
          <Linkedin lnkdn="abhishek-roy-9b770317a" />
          <Instagram insta="abhishekamitroy" />
        </Member>
        <Member
          img="/images/avatars/atharva.svg"
          name="Atharva Mahajan"
          role="Physics Head"
        >
          <Linkedin lnkdn="atharva-mahajan-5957b4212" />
        </Member>
        <Member
          img="/images/avatars/prannay.svg"
          name="Prannaya Gupta"
          role="Computer Science Head"
        >
          <Globe site="https://prannaya.tech" />
          <Github gh="ThePyProgrammer" />
          <Linkedin lnkdn="prannaya-gupta/" />
        </Member>
        <Member
          img="/images/avatars/abhiram.svg"
          name="Abhiram Cherukupalli"
          role="Physics Head"
        >
          <Globe site="https://abhiramphysics.com/" />
          <Github gh="abhiram2006" />
          <Twitter twtr="abhiram_science" />
        </Member>
        <Member
          img="/images/avatars/asutosh.svg"
          name="Asutosh Rath"
          role="Management"
        >
          <Twitter twtr="MusicalPlanet3" />
          <Youtube yt="AsutoshRath" />
        </Member>
        <Member
          img="/images/avatars/sainavneet.svg"
          name="Sainavneet Mukund"
          role="Biology Head"
        />
        <Member
          img="/images/avatars/sidharth.svg"
          name="Sidharth Chakrat"
          role="Mathematics"
        />
        <Member
          img="/images/avatars/piyush.svg"
          name="Piyush Singh"
          role="Physics"
        />
        <Member
          img="/images/avatars/om.svg"
          name="Om Badgujar"
          role="Graphics"
        />
        <Member
          img="/images/avatars/prerak.svg"
          name="Prerak Contractor"
          role="Physics"
        >
          <Github gh="prerak-123" />
          <Linkedin lnkdn="prerak-contractor-77b68b223" />
        </Member>
        <Member
          img="/images/avatars/aditya.svg"
          name="Aditya Singh"
          role="Computer Science"
        >
          <Globe site="https://adityasingh.xyz" />
          <Github gh="aditya-singh9/" />
        </Member>
        <Member
          img="/images/avatars/sainavneet.svg"
          name="Mahdi Raza"
          role="Mathematics"
        >
          <Twitter twtr="mathymahdi" />
          <Youtube yt="mathymahdi" />
        </Member>
        <Member
          img="/images/avatars/amish.svg"
          name="Amish Sinha"
          role="Mathematics"
        />
        <Member
          img="/images/avatars/1.svg"
          name="Ritabrata Saha"
          role="Mathematics, Graphics"
        />
        <Member
          img="/images/avatars/2.svg"
          name="Prabhnoor Singh"
          role="Mathematics"
        />
        <Member
          img="/images/avatars/3.svg"
          name="Karan Upreti"
          role="Physics"
        />
        <Member img="/images/avatars/4.svg" name="Jyothsna" role="Physics" />
        <Member img="/images/avatars/5.svg" name="Archit" role="Physics" />
      </div>
    </>
  );
};

export default about;
