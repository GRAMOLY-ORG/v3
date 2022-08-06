import React from "react";
import { Chrono } from "react-chrono";

const items = [
  {
    title: "December 2021",
    cardTitle: "Lagrangian Mechanics for High schoolers",
    url: "https://youtube.com/playlist?list=PL70VV8-MvPJAdex1C51G33GXGWg2KUC0r",
    cardSubtitle:
      "In this series, Abhiram taught the various concepts of Lagrangian mechanics on a conceptual level which will be valuable in problem-solving. It is really useful and informative for physics enthusiasts around the world.",
  },

  {
    title: "October 2021",
    cardTitle: "FIZIKA Guest Talk | Feat. Dr. Bernard Ricardo",
    url: "https://www.youtube.com/watch?v=AxuDOWpD60A",
    cardSubtitle:
      "We discussed numerous exciting ideas from what is physics to why should one even learn it to the prep and the significance of Olympians with an internationally celebrated figure, a sensational author, and student's beloved, Dr. Bernard Ricardo. For the uninitiated, Dr Ricardo is a senior consultant in physics Physics Senior Consultant and an IPhO coach for the past 16 years!. He is one of the authors of Competitive Physics. He is also highly decorated with awards from Singapore's Ministry of Education, Institute of Physics and National Institute of Education. As a  passionate educator, he now seeks to inspire students to learn more about physics and fall in love with it. ",
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
  
];


const events = () => {
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
          <iframe width="400" height="225" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJAdex1C51G33GXGWg2KUC0r" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div>
          <iframe width="400" height="225"  src="https://www.youtube.com/embed/AxuDOWpD60A" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div>
          <iframe width="400" height="225" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJB8VmrYafP5mk400-mZk7mJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div>
          <iframe width="400" height="225" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJBQRpvpp4NkWj1hNakk5aNI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div>
          <iframe width="400" height="225" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PL70VV8-MvPJCt8EqeQLJQTKqUG1TLnsPW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Chrono>
      </div>
    </>
  );
};

export default events;
