import Vercel from "../public/vercel.svg";
import Link from "next/link";
import {
  Twitter,
  GitHub,
  Youtube,
  Instagram,
  Linkedin,
  Mail,
} from "react-feather";

const footer = () => {
  return (
    <>
      <footer className="py-7 mt-16 bg-lightblue">
        <div className="flex flex-col align-center justify-center items-center align-middle w-full gap-2">
          <Link href="/">
            <svg
              className="cursor-pointer self-center"
              width="50"
              height="50"
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
            <h2 className="text-darkblue cursor-pointer font-semibold uppercase tracking-wide hover:opacity-60 rounded underline-offset-1 self-center">
              GRAM
            </h2>
          </Link>
          <div className="flex flex-col md:flex-row text-center text-darkblue gap-x-5 pb-2">
            <Link href="/" className="hover:opacity-80">
              <span className="hover:opacity-80 cursor-pointer">home</span>
            </Link>
            <Link href="/discord" className="hover:opacity-80">
              <span className="hover:opacity-80 cursor-pointer">discord</span>
            </Link>
            <Link href="/youtube" className="hover:opacity-80">
              <span className="hover:opacity-80 cursor-pointer">youtube</span>
            </Link>
            <Link href="/timeline" className="hover:opacity-80">
              <span className="hover:opacity-80 cursor-pointer">timeline</span>
            </Link>
            <Link href="/challenges" className="hover:opacity-80">
              <span className="hover:opacity-80 cursor-pointer">
                challenges
              </span>
            </Link>
            <Link href="/about" className="hover:opacity-80">
              <span className="hover:opacity-80 cursor-pointer">about</span>
            </Link>
            <Link href="/fizika" className="hover:opacity-80">
              <span className="hover:opacity-80 cursor-pointer">fizika</span>
            </Link>
          </div>
          <div className="flex flex-row text-center cursor-pointer text-darkblue gap-x-5 pb-2">
            <a
              target="_blank"
              rel="noreferrer"
              className="opacity-80 hover:opacity-100 cursor-pointer"
              href="mailto:admin@gramoly.org"
            >
              <Mail size="20" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="opacity-80 hover:opacity-100 cursor-pointer"
              href="https://youtube.com/c/gramoly"
            >
              <Youtube size="20" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="opacity-80 hover:opacity-100 cursor-pointer"
              href="https://github.com/gramoly-org"
            >
              <GitHub size="20" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="opacity-80 hover:opacity-100 cursor-pointer"
              href="https://linkedin.com/company/gramoly"
            >
              <Linkedin size="20" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="opacity-80 hover:opacity-100 cursor-pointer"
              href="https://twitter.com/gramoly_"
            >
              <Twitter size="20" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              className="opacity-80 hover:opacity-100 cursor-pointer"
              href="https://instagram.com/gramoly"
            >
              <Instagram size="20" />
            </a>
          </div>
          <div className="text-sm text-darkblue text-opacity-80 py-1">
            Website by&nbsp;
            <a href="https://github.com/theblapse">
              <span className="hover:opacity-80 text-darkblue hover:font-semibold text-opacity-100 cursor-pointer underline underline-offset-1">
                @TheBlapse.
              </span>
            </a>
            &nbsp;Open source on&nbsp;
            <a href="https://github.com/gramoly-org/v3">
              <span className="hover:opacity-80 text-darkblue text-opacity-100 hover:font-semibold cursor-pointer underline underline-offset-1">
              GitHub
              </span>.
            </a>
          </div>

          <a
            href="https://vercel.com/?utm_source=gramoly&utm_campaign=oss"
            target="_blank"
            rel="noreferrer"
          >
            <Vercel />
          </a>
        </div>
      </footer>
    </>
  );
};

export default footer;
