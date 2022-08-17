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
      <div className="grid grid-cols-1 shrink sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-10  align-center align-middle  mx-2  pt-20 pb-16">
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
        <Member
          img="/images/avatars/4.svg"
          name="Jyothsna"
          role="Physics"
        />
        <Member 
        img="/images/avatars/5.svg" 
        name="Archit"
        role="Physics" />
      </div>
    </>
  );
};

export default about;
