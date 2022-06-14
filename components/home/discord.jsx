import { avatars } from "../../lib/avatars";
import Image from "next/image";
import Marquee from "react-fast-marquee";

let avatarss = avatars.sort(() => Math.random() - 0.5);
let avatar_1 = avatarss.slice(0, 200);
let avatar_2 = avatarss.slice(200, 400);
let avatar_3 = avatarss.slice(400, 600);
let avatar_4 = avatarss.slice(600, 800);
let avatar_5 = avatarss.slice(800, 1050);

const discord = () => {
  return (
    <>
      <div className="flex flex-col relative pt-20 content-center justify-center items-center max-w-none">
        <div className="w-full h-full absolute overflow-hidden z-30 order-1"></div>
        <div className="self-center absolute justify-center bg-darkblue  bg-opacity-50 backdrop-blur-[1px] rounded-md content-center overflow-hidden items-center z-50">
          <h1 className="text-[2.6rem] text-white shadow-black drop-shadow-lg antialiased	backdrop-grayscale p-3  text-center self-center font-[900]">
            Join a community of 2000+ <br />
            STEM enthusiats.
          </h1>
        </div>
        <div className="flex flex-col -z-10 whitespace-nowrap">
          <Marquee gradientWidth="0" direction="right">
            {avatar_1.map((avatar1) => (
              <Image
                src={avatar1}
                width="60"
                height="60"
                style={{ borderRadius: "100%" }}
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
              />
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default discord;
