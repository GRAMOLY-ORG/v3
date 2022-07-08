import { avatars } from "../../lib/avatars";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import React, { Key } from "react";

let avatar_1 = avatars.slice(0, 200);
let avatar_2 = avatars.slice(200, 400);
let avatar_3 = avatars.slice(400, 600);
let avatar_4 = avatars.slice(600, 800);
let avatar_5 = avatars.slice(800, 1050);


const discord = () => {
  return (
    <>
      <div className="mx-5 my-10 flex flex-col md:flex-row shadow-[-6px_6px_7px_1px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col p-[1rem] gap-5 md:w-auto">
          <div className="font-[750]  text-darkblue text-[1.3rem] lg:text-[1.9rem] text-center md:text-left self-center md:self-start w-fit whitespace-nowrap bg-white bg-opacity-40">
            Join a community of <br /> 2000+ STEM Enthusiasts.
          </div>
          <p className="text-darkblue opacity-80 text-center md:text-left text-sm lg:text-lg self-center md:self-start">
            At gramoly&apos;s server, we discuss STEM topics, help people with
            doubts, and have friendly casual discussions on memes, music and
            more such things. We would love to have you as a part of our
            community!
          </p>
        </div>
        <div className="flex flex-col content-center overflow-x-hidden  justify-center items-center">
          <div className="absolute overflow-hidden z-30 order-1"></div>
          <div className="self-center absolute justify-center bg-black antialiased bg-opacity-80 backdrop-blur-[1px] rounded-md  text-white font-[750] text-[1.5rem] md:text-[1.9rem] px-10 py-2 content-center overflow-hidden items-center z-50  md:hover:text-[2.1rem] shadow-md shadow-black">
            <button>
              <Link href="https://gramoly.org/discord" target="_blank">
                Join now
              </Link>
            </button>
          </div>
          <div className="flex flex-col whitespace-nowrap pointer-events-none">
            <Marquee gradientWidth="50px" direction="right">
              {avatar_1.map((avatar1, index: Key | null | undefined) => (
                <img
                  className="overflow-x-hidden"
                  src={avatar1}
                  onError={
                    (e: React.SyntheticEvent<HTMLImageElement, Event>)=> (
                      (e.target as HTMLImageElement).src = "https://cdn.discordapp.com/embed/avatars/1.png"
                    )
                  }
                  width="60"
                  height="60"
                  style={{ borderRadius: "100%" }}
                  key={index}
                  alt=""
                />
              ))}
            </Marquee>
            <Marquee gradientWidth="50px">
              {avatar_2.map((avatar1, index: Key | null | undefined) => (
                <img
                  className="overflow-x-hidden"
                  src={avatar1}
                  onError={
                    (e: React.SyntheticEvent<HTMLImageElement, Event>)=> (
                      (e.target as HTMLImageElement).src = "https://cdn.discordapp.com/embed/avatars/2.png"
                    )
                  }
                  width="60"
                  height="60"
                  style={{ borderRadius: "100%" }}
                  key={index}
                  alt=""
                />
              ))}
            </Marquee>
            <Marquee gradientWidth="50px" direction="right">
              {avatar_3.map((avatar1, index: Key | null | undefined) => (
                <img
                  className="overflow-x-hidden"
                  src={avatar1}
                  onError={
                    (e: React.SyntheticEvent<HTMLImageElement, Event>)=> (
                      (e.target as HTMLImageElement).src = "https://cdn.discordapp.com/embed/avatars/3.png"
                    )
                  }
                  width="60"
                  height="60"
                  style={{ borderRadius: "100%" }}
                  key={index}
                  alt=""
                />
              ))}
            </Marquee>
            <Marquee gradientWidth="50px">
              {avatar_4.map((avatar1, index: Key | null | undefined) => (
                <img
                  className="overflow-x-hidden"
                  src={avatar1}
                  onError={
                    (e: React.SyntheticEvent<HTMLImageElement, Event>)=> (
                      (e.target as HTMLImageElement).src = "https://cdn.discordapp.com/embed/avatars/4.png"
                    )
                  }
                  width="60"
                  height="60"
                  style={{ borderRadius: "100%" }}
                  key={index}
                  alt=""
                />
              ))}
            </Marquee>
            <Marquee gradientWidth="50px" direction="right">
              {avatar_5.map((avatar1, index: Key | null | undefined) => (
                <img
                  className="overflow-x-hidden"
                  src={avatar1}
                  onError={
                    (e: React.SyntheticEvent<HTMLImageElement, Event>)=> (
                      (e.target as HTMLImageElement).src = "https://cdn.discordapp.com/embed/avatars/5.png"
                    )
                  }
                  width="60"
                  height="60"
                  style={{ borderRadius: "100%" }}
                  key={index}
                  alt=""
                />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default discord;
