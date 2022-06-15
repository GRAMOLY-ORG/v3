import { avatars } from "../../lib/avatars";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Key } from "react";

let avatar_1 = avatars.slice(0, 200);
let avatar_2 = avatars.slice(200, 400);
let avatar_3 = avatars.slice(400, 600);
let avatar_4 = avatars.slice(600, 800);
let avatar_5 = avatars.slice(800, 1050);

const discord = (index: Key | null | undefined) => {
  return (
    <>
      <div className="flex flex-col h-screen content-center justify-center items-center max-w-none">
        <div className="flex flex-col whitespace-nowrap">
          <Marquee gradientWidth="0" direction="right">
            {avatar_1.map((avatar1) => (
              <Image
                src={avatar1}
                width="60"
                height="60"
                style={{ borderRadius: "100%" }}
                key={index}
                alt=""
              />
            ))}
          </Marquee>
          <Marquee gradientWidth="0">
            {avatar_2.map((avatar1) => (
              <Image
                src={avatar1}
                width="60"
                height="60"
                style={{ borderRadius: "100%" }}
                key={index}
                alt=""
              />
            ))}
          </Marquee>
          <Marquee gradientWidth="0" direction="right">
            {avatar_3.map((avatar1) => (
              <Image
                src={avatar1}
                width="60"
                height="60"
                style={{ borderRadius: "100%" }}
                key={index}
                alt=""
              />
            ))}
          </Marquee>
          <Marquee gradientWidth="0">
            {avatar_4.map((avatar1) => (
              <Image
                src={avatar1}
                width="60"
                height="60"
                style={{ borderRadius: "100%" }}
                key={index}
                alt=""
              />
            ))}
          </Marquee>
          <Marquee gradientWidth="0" direction="right">
            {avatar_5.map((avatar1) => (
              <Image
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
    </>
  );
};

export default discord;
