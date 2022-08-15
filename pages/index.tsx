import Landing from "../components/home/landing";
import Body from "../components/home/body";
import Discord from "../components/home/discord";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>GRAMOLY - Bringing STEM to the World.</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon"  />
        <link href="https://gramoly.org/" rel="canonical" />
        
        <meta name="theme-color" content="#73fcea" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#73fcea" />
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
        <meta property="og:image" content="/gramoly.png" />
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
      <Landing />
      <Body />
    </>
  );
}
