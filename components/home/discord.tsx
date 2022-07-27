import { avatars } from "../../lib/avatars";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import React, { Key } from "react";

let avatarss = avatars.sort(() => Math.random() - 0.5);
let avatar_1 = avatarss.slice(0, 200);
let avatar_2 = avatarss.slice(200, 400);
let avatar_3 = avatarss.slice(400, 600);
let avatar_4 = avatarss.slice(600, 800);
let avatar_5 = avatarss.slice(800, 1050);


const discord = () => {
  return (
    <>
        <div>
        <div>
        <div className="flex flex-col whitespace-nowrap pointer-events-none">
            <Marquee gradientWidth="50px" direction="right">
              {avatar_1.map((avatar1, index: Key | null | undefined) => (
                <Image
                  className="overflow-x-hidden"
                  src={avatar1}
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
                <Image
                  className="overflow-x-hidden"
                  src={avatar1}
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
                <Image
                  className="overflow-x-hidden"
                  src={avatar1}
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
                <Image
                  className="overflow-x-hidden"
                  src={avatar1}
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
                <Image
                  className="overflow-x-hidden"
                  src={avatar1}
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
