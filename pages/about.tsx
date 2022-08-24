import { Member, FMember } from "../components/about/member";
import Head from "next/head";
import {
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Globe,
  Youtube,
} from "../components/about/socials";
import Heart from "/public/images/heart.svg";
import { Link } from "react-feather";

const about = () => {
  return (
    <>
      <Head>
        <title>About - GRAMOLY</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://gramoly.org/" rel="canonical" />
        <meta name="theme-color" content="#022b3a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#022b3a" />
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
        className="flex flex-col-reverse h-full align-middle justify-center mx-2 pt-16 items-center
                           md:flex-row md:justify-evenly"
      >
        <div className="flex flex-col gap-y-3 md:justify-start md:relative ">
          <p className="text-darkblue opacity-80 text-center md:text-left md:w-[400px] text-sm lg:text-lg lg:w-[600px]">
            Imagine a world where each child gets food and education. Imagine a
            world where everyone gets equal opportunity. Imagine a world where
            everyone lives life in peace. We and innumerable people are living
            in this dream for years unknown and working to make it a reality.
            <br />
            It&apos;s been hard days and nights. We made mistakes, arguably a
            lot of, but we repent, adapt, improvise and Improve. That&apos;s
            what makes us who we are. We are not a mere organization, our dreams
            and goals are much beyond GRAMOLY.
            <br />
            We are a dream seen by countless men, we are emotions of countless
            children, we are the struggle worn by countless girls. That gives us
            true strength to face challenges, Improve ourselves, and fight for
            the cause.
            <br />
            We hope someday you will join us and we would live this dream
            together—the time has come when you shall redeem the grace bestowed
            upon you, lend a hand to dying humanity, and hope for a brighter
            tomorrow.
          </p>
        </div>
        <div className="w-52 md:w-[20rem] lg:w-[27rem] pt-3 hover:scale-105 hover:-rotate-6">
          <Heart />
        </div>
      </div>
      <div className="flex flex-col mx-2 md:mx-16  pb-10 align-center items-center text-center gap-4 py-10 flex-wrap team" id="team">
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
      <div  className="grid grid-cols-1 shrink sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-10  align-center align-middle mx-2  pb-16">
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
        >
          <Github gh="write4-the-justice" />
        </Member>
        <Member
          img="/images/avatars/samar.svg"
          name="Samar Yadav"
          role="Administrator"
        >
          <Linkedin lnkdn="samar-yadav-91a4b5206" />
          <Instagram insta="xtricity_" />
        </Member>
        <Member
          img="/images/avatars/abhishek.svg"
          name="Abhishek Roy"
          role="Administrator"
        >
          <Linkedin lnkdn="abhishek-roy-9b770317a" />
          <Instagram insta="abhishekamitroy" />
        </Member>
        <Member
          img="/images/avatars/nimarjeet.svg"
          name="Nimarjeet Bajwa"
          role="Administrator"
        >
          <Linkedin lnkdn="nimarjeet-bajwa-820974238" />
        </Member>
        <Member
          img="/images/avatars/atharva.svg"
          name="Atharva Mahajan"
          role="Physics Head"
        >
          <Linkedin lnkdn="atharva-mahajan-5957b4212" />
        </Member>
        <Member
          img="/images/avatars/arav.svg"
          name="Arav Bhojashettar"
          role="Management"
        >
          <Linkedin lnkdn="arav-bhojashettar" />
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
        <Member img="/images/avatars/6.svg" name="Paras Sharma" role="Physics">
          <Youtube yt="nutanstrek" />
          <Linkedin lnkdn="nutanstrek" />
        </Member>
        <Member
          img="/images/avatars/abhiram.svg"
          name="Abhiram Cherukupalli"
          role="Physics Head"
        >
          <Linkedin lnkdn="abhiram-cherukupalli" />
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
        >
          <Github gh="CjSidharth" />
        </Member>
        <Member
          img="/images/avatars/piyush.svg"
          name="Piyush Singh"
          role="Physics"
        />
        <Member img="/images/avatars/om.svg" name="Om Badgujar" role="Graphics">
          <Linkedin lnkdn="om-badgujar-355179230" />
        </Member>
        <Member
          img="/images/avatars/prerak.svg"
          name="Prerak Contractor"
          role="Physics"
        >
          <Github gh="prerak-123" />
          <Linkedin lnkdn="prerak-contractor-77b68b223" />
        </Member>
        <Member
          img="/images/avatars/1.svg"
          name="Daniel Bruwel"
          role="Mathematics"
        />
        <Member
          img="/images/avatars/3.svg"
          name="Harshdeep Singh Chhabra"
          role="Chemistry"
        >
          <Linkedin lnkdn="harshdeep-chhabra-064066227" />
        </Member>
        <Member
          img="/images/avatars/mahdi.svg"
          name="Mahdi Raza"
          role="Mathematics"
        >
          <Twitter twtr="mathymahdi" />
          <Youtube yt="mathymahdi" />
        </Member>
        <Member
          img="/images/avatars/aditya.svg"
          name="Aditya Singh"
          role="Computer Science"
        >
          <Linkedin lnkdn="aditya-singh9" />
          <Github gh="aditya-singh9/" />
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
          img="/images/avatars/3.svg"
          name="Krishna Bhardwaj"
          role="Chemistry"
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
        <Member img="/images/avatars/6.svg" name="Atharv Mane" role="Physics" />
        <Member img="/images/avatars/7.svg" name="Shivam" role="Mathematics" />
        <Member
          img="/images/avatars/1.svg"
          name="Tanay Kakalia"
          role="Chemistry"
        />
        <Member img="/images/avatars/2.svg" name="Om Satpute" role="Physics" />
        <Member img="/images/avatars/3.svg" name="Achayut" role="Mathematics" />
        <Member img="/images/avatars/5.svg" name="Krish" role="Chemistry" />
        <Member img="/images/avatars/2.svg" name="Rachit Raj" role="Physics" />
        <Member
          img="/images/avatars/3.svg"
          name="Samarth Barve"
          role="Mathematics"
        />
      </div>
      <div className="flex flex-col px-2 md:mx-16  pb-10 align-center items-center text-center gap-4 py-10 flex-wrap team">
        <h4 className="text-[1.5rem] text-center text-darkblue font-semibold md:text-[2.2rem] lg:text-[3.2rem]">
          Acknowledgements
        </h4>
        <p className="text-darkblue opacity-80 text-center text-sm lg:text-lg">
          GRAM is better today than it was yesterday, Countless goals have been
          achieved today thanks to selfless volunteer work. We appreciate the
          efforts, enthusiasm and generosity of all volunteers who contributed.{" "}
          <br />
        </p>
      </div>
      <div className="grid grid-cols-1 border-separate shrink sm:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-10  align-center align-middle mx-2  pb-16">
        <FMember name="Yash Bughani" subject="Administration" />
        <FMember name="Avyaan Sharma" subject="Physics" />
        <FMember name="Samyak Sheersh" subject="Physics" />
        <FMember name="Himadri Mandal" subject="Mathematics" />
        <FMember name="Srijon Sarkar" subject="Mathematics" />
        <FMember name="Aritra Mondal" subject="Physics" />
        <FMember name="Devyansh Agrawal" subject="Mathematics" />
        <FMember name="Sonal Kumar Singh" subject="Astronomy" />
        <FMember name="Swastika Deb" subject="Mathematics" />
        <FMember name="Prasoon Jha" subject="Physics" />
        <FMember name="Hemant Ayuj" subject="Physics" />
        <FMember name="Debayu Chakraborti" subject="Mathematics" />
        <FMember name="Muhammed Yaseen" subject="Physics" />
        <FMember name="Hrishabh Ayush" subject="Chemistry" />
        <FMember name="Rwitabrata Mallick" subject="Mathematics" />
        <FMember name="Adarsh Sharma" subject="Computer Science" />
        <FMember name="Tarpan Ghosh" subject="Physics" />
        <FMember name="Faraz Ahmad" subject="Astronomy" />
        <FMember name="Ayush Kushwaha" subject="Moderation" />
        <FMember name="Atharva Sharma" subject="Moderation" />
        <FMember name="Arjun Rathore" subject="Astronomy" />
        <FMember name="Krish Sharma" subject="Physics" />
        <FMember name="Manan Goel" subject="Tech support" />
        <FMember name="Gourav Khunger" subject="Tech support" />
        <FMember name="Yash Patil" subject="Moderation" />
        <FMember name="Arnab Chatterjee" subject="Mathematics" />
        <FMember name="Tanishk Kashyap" subject="Mathematics" />
        <FMember name="Sabyasachi Kundu" subject="Mathematics" />
        <FMember name="Ayush Kumar Gupta" subject="Mathematics" />
        <FMember name="AKIII" subject="Physics" />
        <FMember name="Atharva Shivaram Mahajan" subject="Physics" />
        <FMember name="Ankit Kumar choudhary" subject="Mathematics" />
        <FMember name="Krishna thakur " subject="Mathematics" />
        <FMember name="Om Kumar " subject="Mathematics" />
        <FMember name="Prajul Jain " subject="Mathematics" />
        <FMember name="Jitu roy " subject="Mathematics" />
        <FMember name="Anuprash Pattanaik" subject="Video Editing" />
        <FMember name="Ashish Poudel" subject="Mathematics" />
        <FMember name="Shivam Dixit" subject="Mathematics" />
        <FMember name="Vibhav Ved Singh " subject="Mathematics" />
        <FMember name="Ishan Paul" subject="Mathematics" />
        <FMember name="Saswata Das" subject="Mathematics" />
        <FMember name="Harshita Gupta" subject="Mathematics" />
        <FMember name="Kowshiq kattamuri" subject="Mathematics" />
        <FMember name="Piyush" subject="Mathematics" />
        <FMember name="Abhinav Singh" subject="Mathematics" />
        <FMember name="Abhishek Mishra" subject="Mathematics" />
        <FMember name="Hemansh Shahz" subject="Physics" />
        <FMember name="Adithya A.S." subject="Moderation" />
        <FMember name="Rakshit Raj" subject="Physics" />
        <FMember name="Chirag Kar" subject="Physics" />
        <FMember name="Atharva Ghatnekar" subject="Chemistry" />
        <FMember name="Nirav Bhattad" subject="Mathematics" />
        <FMember name="Vivek Sahu" subject="Physics" />
        <FMember name="Mridul pandey" subject="Physics" />
        <FMember name="Ritobrata Nath" subject="Mathematics" />
        <FMember name="Krish Kumar" subject="Mathematics" />
        <FMember name="Chetan" subject="Mathematics" />
        <FMember name="Yash Mehta" subject="Mathematics" />
        <FMember name="Tejas Rao" subject="Writing" />
      </div>
      <div className="py-24 px-2 flex flex-col items-center text-center text-darkblue">
        <h3>Contact us</h3>
<h2>To contact us kindly mail at <a href="mailto:admin@gramoly.org" className="underline">admin@gramoly.org</a></h2>
      </div>
    </>
  );
};

export default about;
