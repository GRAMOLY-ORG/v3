import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "February 2022",
    cardTitle: "Careers in Biology & Biology Olympiads | GRAMOLY's Round Tables Episode 2",
    url: "https://www.youtube.com/watch?v=40bhBCNxJcA",
    cardSubtitle:
      "Here we present you the second episode of GRAMOLY's Round Tables - Careers in Biology & Biology Olympiads, Huge thanks to Abhishek Roy and Sainavaneet Mukund for arranging and hosting the webinar.",
  },
  {
    title: "February 2022",
    cardTitle: "Gospels with The Experts | Ep-3 : Chemistry Olympiad | Ft : Krishna Bhardwaj",
    url: "https://www.youtube.com/watch?v=sm-moP3pmus",
    cardSubtitle:
      "Are you a Chemistry olympiad aspirant who is passionate about chemistry? Do you have a lot of unanswered questions regarding the preparation of the chemistry olympiad?  Here we bring you an amazing webinar that will answer most of your queries.We are pleased to inform you that we shall be hosting a Chemistry Olympiad webinar which will be the episode 3 of GRAM Gospels With The Experts Series. Our guest will be Krishna Bharadwaj who is currently a UG student at IISC and has attended Chemistry OCSC Camp. The event will be live on GRAMOLY's YouTube channel on 6th March, Sunday at 6pm IST. Do join us live to give your preparation a final boost! Make sure to put your questions in the live chat box as we shall be taking the audience questions at the end. A round of applause and Thanks to our host Asutosh Rath. Without him, this event wouldn't have been possible.",
  },
  {
    title: "February 2022",
    cardTitle: "Launched challenges.gramoly.org",
    url: "https://www.youtube.com/watch?v=1DsIPOddYiQ",
    cardSubtitle:
      "GRAMOLY Challenges is a modern concept, a new platform, and a new route of doing POTD. The challenges brought to you by GRAMOLY are daily problems of STEM assigned to you by the team which consist of live and interactive rankings, dynamic leaderboards, and points. It will help you become better at problem-solving in a really fun and gamified way. Visit the website @challenges.gramoly.org",
  },
  {
    title: "December 2021",
    cardTitle: "Lagrangian Mechanics for High schoolers",
    url: "https://youtube.com/playlist?list=PL70VV8-MvPJAdex1C51G33GXGWg2KUC0r",
    cardSubtitle:
      "In this series, Abhiram taught the various concepts of Lagrangian mechanics on a conceptual level which will be valuable in problem-solving. It is really useful and informative for physics enthusiasts around the world.",
  },
  {
    title: "December 2021",
    cardTitle: "Positional Astronomy for Astronomy Olympiads",
    url: "https://youtube.com/playlist?list=PL70VV8-MvPJAdex1C51G33GXGWg2KUC0r",
    cardSubtitle:
      "In this series, Faraz taught the various concepts of Positional Astronomy on a conceptual level which will be valuable in problem-solving in Astronomy and Astrophysics Olympiads.",
  },
  {
    title: "October 2021",
    cardTitle: "FIZIKA Guest Talk | Feat. Dr. Bernard Ricardo",
    url: "https://www.youtube.com/watch?v=AxuDOWpD60A",
    cardSubtitle:
      "We discussed numerous exciting ideas from what is physics to why should one even learn it to the prep and the significance of Olympians with an internationally celebrated figure, a sensational author, and student's beloved, Dr. Bernard Ricardo. For the uninitiated, Dr Ricardo is a Senior Physics Consultant and an IPhO coach for the past 16 years!. He is one of the authors of Competitive Physics. He is also highly decorated with awards from Singapore's Ministry of Education, Institute of Physics and National Institute of Education. As a  passionate educator, he now seeks to inspire students to learn more about physics and fall in love with it.",
  },

  {
    title: "September 2021",
    cardTitle: "Decoding Abstract Algebra",
    url: "https://www.youtube.com/watch?v=AxuDOWpD60A",
    cardSubtitle:
      "Decoding Abstract Algebra is a series by Aritra Das, Where he talks about the various concepts of Abstract Algebra and how to use them in real life problems. This is a great series for anyone who is interested in Abstract Algebra and wants to learn more about it.",
  },

  {
    title: "September 2021",
    cardTitle: "INChO Solutions Series",
    url: "https://www.youtube.com/playlist?list=PL70VV8-MvPJBQRpvpp4NkWj1hNakk5aNI",
    cardSubtitle:
      "In the INCHO series, we discussed with you various INChO problems, tricks, and concepts to solve them and even the secrets sources where the INChO committee picks the ideas of problems from!",
  },

  {
    title: "August 2021",
    cardTitle: "FIZIKA 2021",
    url: "https://fizika.gramoly.org",
    cardSubtitle:
      "FIZIKA is a 3 round based free annual competition meant for individuals at any stage that consists of the creative application of high school physics concepts. We aim to introduce learners to some unconventional applications of theory, hone up their problem-solving aptitude and expand their critical thinking, which in turn will make them better problem solvers. Furthermore, We love sharing some exciting problems with learners. More info at fizika.gramoly.org",
  },

  {
    title: "July 2021",
    cardTitle: "Launched GRAMOLY's Forum",
    url: "https://www.youtube.com/shorts/TaNOsJP0e-M",
    cardSubtitle:
      "We wanted to make a platform where not only a newcomer to learned can openly discuss what they like but also, fight the social media addiction among youth by offering them a platform where they can ask doubts without being on social media. It was driven by our observation that several students can't uninstall social media because that's where they ask doubts. Here you can ask any questions, any doubt, or discuss freely anything related to STEM and socialize with other like-minded people.",
  },

  {
    title: "June 2021",
    cardTitle: "GRAM Chess Tourney",
    url: "https://gramoly.org/discord",
    cardSubtitle:
      "Organized first ever GRAM Chess Tourney in our discord server. Join GRAM Discord for more such amazing events.",
  },
  {
    title: "June 2021",
    cardTitle: "Physics BLITZ",
    url: "https://gramoly.org/discord",
    cardSubtitle:
      "An competition like Science Bowl, happened in our discord server in Jun 2021.",
  },
  {
    title: "June 2021",
    cardTitle: "Decoding Linear Algebra Series",
    url: "https://www.youtube.com/playlist?list=PL70VV8-MvPJB52CiUy4OymNcQmHKJV1f7",
    cardSubtitle:
      "A series by Kowshiq Kattamuri on linear algebra. This series is a great one for anyone who is interested in linear algebra and wants to learn more about it.",
  },
  {
    title: "June 2021",
    cardTitle: "Ep-1 Roots in Pure Science | GRAM's Round Tables | GRAMOLY",
    url: "https://www.youtube.com/watch?v=pjGXLBHS_8M",
    cardSubtitle:
      "We are presenting to you a new series- GRAM's Round Tables, this is the first Episode of GRAM's Round Tables - Roots in Pure Science. Thank you Srijon Sarkar for hosting this session.Guests in this session are Arka Sinha - IISc Dropout, Undergraduate Student at ISI Kolkata; Chirag Falor- AIR 1 JEE Advanced 2020, IOAA Gold Medalist and Undergraduate Student at MIT; Gaurav Goel- Undergraduate Student at Harvard University; Hemansh Shah- IOAA Silver Medalist, Undergraduate Student at IISc Bangalore; Heramb Podar- Undergraduate Student at IIT Roorkee; Nisarg Chadha- AIR 16 JEE Advanced 2020, Undergraduate Student at IISc Bangalore; Pranjal Jain- Undergraduate Math Student at IISER Pune",
  },
  {
    title: "May 2021",
    cardTitle: "GRAMOLY x STEM Horizons Olympiad Camp",
    url: "https://www.youtube.com/watch?v=AWZkkjX5_dQ",
    cardSubtitle:
      "GSHOC was an entirely free, intensive, seven-week Mathematics Olympiad program for students around the globe, ran from 20 June to 30 July 2021. This was conducted by joint effort of STEM Horizons and GRAMOLY, It was designed for middle and high school math students who wish to hone their problem-solving skills and advance their mathematics skills in general. This Olympiad Mathematics training course helped enhancing performance on olympiads/contests and other Pre-Olympiad and Olympiad exams such as AMC10/12, AIME, PRMO.",
  },
  {
    title: "May 2021",
    cardTitle: "GRAM Calculation Championship",
    url: "https://www.youtube.com/watch?v=MPMiLjCzJ8o",
    cardSubtitle:
      "GRAM CALCULATION CHAMPIONSHIP (GCC) is a tournament which would be conducted on AOPS - FTW. It will have basic computational questions of mathematics. Answer fast and get more points! Could you be the winner?",
  },
  {
    title: "May 2021",
    cardTitle: "GRAMOLY REVAMPED",
    url: "https://www.youtube.com/watch?v=pxeQ5rvHlHM",
    cardSubtitle:
      "Imagine a world where each child gets food and education. Imagine a world where everyone gets equal opportunity. Imagine a world where everyone lives life in peace. We and innumerable people are living in this dream for years unknown and working to make it a reality. \
      It's been hard days and nights. We made mistakes, arguably a lot of, but we repent, adapt, improvise and Improve. That's what makes us who we are. We are not a mere organization,  our dreams and goals are much beyond GRAMOLY. \
      We are a dream seen by countless men, we are emotions of countless children, we are the struggle worn by countless girls. That gives us true strength to face challenges, Improve ourselves, and fight for the cause. \
      We hope someday you will join us and we would live this dream together --- the time has come when you shall redeem the grace bestowed upon you, lend a hand to dying humanity, and hope for a brighter tomorrow.",
  },
  {
    title: "April 2021",
    cardTitle: "1000 subscribers completed on YouTube",
    url: "https://www.youtube.com/watch?v=-5_NU1JbCr0",
  },
  {
    title: "April 2021",
    cardTitle: "A resolution to Maths ft. Pranjal Jain | Unconventional Reflections #2",
    url: "https://www.youtube.com/watch?v=XicGUK2XAnQ",
    cardSubtitle: "Passionate about mathematics? Want to make it your career? Want to explore the beauty of mathematics? Then this is for you!! GRAM brings to you an intriguing episode with Pranjal Jain, an Undergraduate student of mathematics at IISER Pune In this conversation, Pranjal talks about how he overcame all the hurdles and his story of devoting his life to maths and also inspires us to do the same. In this conversation hosted by Samyak Sheersh, Pranjal gives us an insight into \"Mathematics as a Career\" and the massive opportunities that lie up there.",
  },
  {
    title: "April 2021",
    cardTitle: "Bills v/s Balls ft. Chitraang Murdia | Unconventional Reflections #1",
    url: "https://www.youtube.com/watch?v=XicGUK2XAnQ",
    cardSubtitle: "Passionate about mathematics? Want to make it your career? Want to explore the beauty of mathematics? Then this is for you!! GRAM brings to you an intriguing episode with Pranjal Jain, an Undergraduate student of mathematics at IISER Pune In this conversation, Pranjal talks about how he overcame all the hurdles and his story of devoting his life to maths and also inspires us to do the same. In this conversation hosted by Samyak Sheersh, Pranjal gives us an insight into \"Mathematics as a Career\" and the massive opportunities that lie up there.",
  },
  {
    title: "March 2021",
    cardTitle: "Introducing Real Analysis for High School Math Students",
    url: "https://www.youtube.com/watch?v=8tOFC9hTkZY&list=PL70VV8-MvPJC_cnQG2x0X10JS_L3gLAYF",
    cardSubtitle: "Passionate about physics? Want to make it your career? Want to explore the mysteries of Physics? Then this is for you! GRAM brings to you an intriguing episode with Chitraang Murdia, UC Berkley Ph.D. Student MIT Graduate, IPhO Gold Medallist, IIT JEE 2014 AIR 1.In this conversation, Chitraang talks about how he overcame all the hurdles and his story of devoting his life to physics and also inspires us to do the same. In this conversation hosted by Shreyash Bakare, Chitraang gives us an insight into \"Physics as a Career\" and the massive opportunities that lie up there.",
  },
  {
    title: "March 2021",
    cardTitle: "Tensor | A Course on Tensor and Differential Geometry",
    url: "https://www.youtube.com/watch?v=8tOFC9hTkZY&list=PL70VV8-MvPJC_cnQG2x0X10JS_L3gLAYF",
    cardSubtitle: "Tensor is A Course on Tensor and Differential Geometry by Paras Sharma as known as NutanStrek.",
  },
  {
    title: "March 2021",
    cardTitle: "Combinatorics Problems Series",
    url: "https://www.youtube.com/watch?v=BZcsIQb5MAk&list=PL70VV8-MvPJCIDLKG9mksztSfxMR4nfBM",
    cardSubtitle: "Our Volunteers on GRAMOLY are coming up with a new series of combinatorics problems on GRAMOLY's official YouTube channel, where they will be solving some amazing problems of combinatorics. It will be really helpful and informative for mathematics Olympiad aspirants.  this series is launched to give a helping hand to aspirants of mathematical Olympiads. It will also help the aspirants to get exposure to some really good combinatorics problems. This would be conducted by, Yashashwini, An IIT KGP Alumni",
  },
  {
    title: "February 2021",
    cardTitle: "Maths Olympiad Problem Series",
    url: "https://www.youtube.com/watch?v=41LxmXDpyxs&list=PL70VV8-MvPJC-iW_YMPDuSg8vNZ2Kj9gk",
    cardSubtitle: "Hello math enthusiasts, In this session, we are going to discuss a few of the handpicked geometry problems from various math contests. Hope you like them, consider subscribing and sharing them.",
  },
  {
    title: "February 2021",
    cardTitle: "Gospels with The Experts | Ep-1 : Physics Olympiad | Ft : Nitin Sachan",
    url: "https://www.youtube.com/watch?v=G-3ISLwYjnM",
    cardSubtitle: "Are you a physics olympiad aspirant who is passionate about physics? Do you have a lot of unanswered questions regarding the preparation of the physics olympiad?  Here we bring you an amazing webinar that will answer most of your queries.\"𝗚𝗼𝘀𝗽𝗲𝗹𝘀 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗘𝘅𝗽𝗲𝗿𝘁𝘀\" is an initiative by GRAM, where we invite knowledgeable people from their fields to share strategy, tips, and their \"gospels\" regarding a particular exam. Nitin Sachan Sir, IIT-M alumni, the founder of INSP(Indian School of Physics), and a widely loved teacher who has a passion for the subject. In this session, he shares strategy, tips and tricks, and his thoughts on the olympiad situation in India.",
  },
  {
    title: "January 2021",
    cardTitle: "IOQM KV Live Discussion",
    url: "https://www.youtube.com/watch?v=mjGjx-DR9rg",
    cardSubtitle: "Hello math enthusisats, In this session, volunteers of GRAM will be discussing IOQM KV 2021 Paper.",
  },
  {
    title: "January 2021",
    cardTitle: "GRAM Started",
    url: "https://www.youtube.com/watch?v=bKrRq6-KEqc",
    cardSubtitle: "GRAM is a non-profit and volunteer-based organization whose motive is to provide free education to underprivileged class of students and empower them to go for stem fields and we also stand for promoting women to make STEM career choices. We also aspire to spread awareness about non-routine Mathematics, astronomy, informatics, etc. Currently, We have a lot of plans to give handouts, problem sets, video lectures, etc. Our motive is to spread awareness and improve the perspective towards STEM from the grassroots. We plan to conduct teaching camps in future for students who don't have access to internet in order to revolutionize STEM.",
  },
];

const timeline = () => {
  return (
    <>
      <h3 className="pt-16 flex w-full text-darkblue align-center items-center justify-center">
        Timeline
      </h3>
      <div className=" py-5">
        <Chrono
          slideShow
          mode="VERTICAL_ALTERNATING"
          items={items}
          useReadMore
          fontSizes={{
            cardSubtitle: "0.85rem",
            cardText: "0.8rem",
            cardTitle: "1rem",
            title: "1rem",
          }}
          theme={{
            primary: "#022b3a",
            secondary: "#54c1ff",
            cardBgColor: "white",
            cardForeColor: "#022b3a",
            titleColor: "#022b3a",
            titleColorActive: "#022b3a",
          }}
        >
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/40bhBCNxJcA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/sm-moP3pmus"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/1DsIPOddYiQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJAdex1C51G33GXGWg2KUC0r"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
                    <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/bLG7mSmD4w0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/AxuDOWpD60A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJB8VmrYafP5mk400-mZk7mJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJBQRpvpp4NkWj1hNakk5aNI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJCt8EqeQLJQTKqUG1TLnsPW"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/TaNOsJP0e-M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div></div>
          <div></div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJB52CiUy4OymNcQmHKJV1f7"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/pjGXLBHS_8M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-col gap-2">
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/AWZkkjX5_dQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
              <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLcoKNKLyrOz3CY37fLEqwxl3_ezKL85hi"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/MPMiLjCzJ8o"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/pxeQ5rvHlHM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/-5_NU1JbCr0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/XicGUK2XAnQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/Hkj16h3xBvk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJC_cnQG2x0X10JS_L3gLAYF"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJA-om0Zjpou3kxEhkQuFvVg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJCIDLKG9mksztSfxMR4nfBM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJC-iW_YMPDuSg8vNZ2Kj9gk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/G-3ISLwYjnM"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/mjGjx-DR9rg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              width="400"
              height="225"
              src="https://www.youtube.com/embed/bKrRq6-KEqc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Chrono>
      </div>
    </>
  );
};

export default timeline;
