import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 30) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    return () => window.addEventListener("scroll", changeColor);
  });

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav
        className={
          color
            ? "flex flex-row fixed mb-5 flex-wrap p-1  w-full items-center backdrop-blur-[30px]  z-[500]  bg-white bg-opacity-70 shadow-sm gap-5 text-xl "
            : "flex flex-row flex-wrap p-1 fixed w-full items-center bg-transparent  z-[500] gap-5 text-xl "
        }
      >
        <Link href="/">
          <svg
            className="lg:ml-10 cursor-pointer self-center"
            width="35"
            height="35"
            viewBox="0 0 68 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34 67C52.2254 67 67 52.2254 67 34C67 15.7746 52.2254 1 34 1C15.7746 1 1 15.7746 1 34C1 52.2254 15.7746 67 34 67Z"
              fill="#022B3A"
              stroke="#73FCEA"
              strokeWidth="2"
            />
            <path
              d="M26.2817 8.20618C18.7639 11.3658 13.8857 18.7122 13.8737 26.8923C13.8737 38.2041 23.0438 47.4534 34.3557 47.5513C45.6677 47.6492 54.838 38.5584 54.838 27.2465C54.8232 26.9489 54.802 26.6517 54.7742 26.3549H54.4632H50.623H35.9832V30.9702H50.3454C48.7557 38.366 42.1718 43.865 34.2873 43.7968C25.2151 43.7182 17.8607 36.3001 17.8608 27.2279C17.8821 20.6802 21.7901 14.8041 27.8069 12.2729L26.2817 8.20618Z"
              fill="#54C1FF"
            />
            <path
              d="M31.7257 26.3547V30.97V59.7937H35.9834V30.97H54.0791V26.3547H35.9834H31.7257Z"
              fill="url(#paint0_linear_17_6)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_17_6"
                x1="33.8254"
                y1="31.1021"
                x2="34.0084"
                y2="72.006"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#54C1FF" />
                <stop offset="1" stopColor="#73FCEA" />
              </linearGradient>
            </defs>
          </svg>
        </Link>
        <Link href="/">
          <span className="text-lg text-darkblue cursor-pointer font-semibold uppercase tracking-wide hover:opacity-60 rounded underline-offset-1 self-center">
            gram
          </span>
        </Link>
        <button
          className=" inline-flex rounded lg:hidden text-darkblue ml-auto outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`${
            active ? "" : "hidden"
          }   w-full  lg:inline-flex lg:flex-grow lg:mr-[1rem] lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto ">
            <Link href="/">
              <span className="lg:inline-flex lg:w-auto cursor-pointer mx-3 rounded text-lg text-darkblue font-semibold items-center justify-center hover:opacity-60 underline-offset-1 ">
                discord
              </span>
            </Link>
            <Link href="/">
              <span className="lg:inline-flex lg:w-auto cursor-pointer mx-3 rounded text-lg text-darkblue  font-semibold items-center justify-center hover:opacity-60 underline-offset-1">
                events
              </span>
            </Link>
            <Link href="/challenges">
              <span className="lg:inline-flex lg:w-auto cursor-pointer mx-3 rounded text-lg text-darkblue font-semibold items-center justify-center hover:opacity-60 underline-offset-1">
                challenges
              </span>
            </Link>
            <Link href="/">
              <span className="lg:inline-flex lg:w-auto cursor-pointer mx-3 rounded text-lg text-darkblue font-semibold items-center justify-center hover:opacity-60 underline-offset-1">
                about
              </span>
            </Link>
            <Link href="/">
              <span className="lg:inline-flex lg:w-auto cursor-pointer mx-3 rounded text-lg text-darkblue font-semibold items-center justify-center hover:opacity-60 underline-offset-1">
                contact
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
