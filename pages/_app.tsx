import '../styles/global.css'
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import type { AppProps } from "next/app";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
