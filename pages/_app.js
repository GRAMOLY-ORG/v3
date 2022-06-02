import '../styles/global.css'
import Navbar from '../components/Navbar'
import "@fontsource/lexend-exa"; 
import "@fontsource/lexend-exa/variable.css"; 


function MyApp({ Component, pageProps }) {
  return <>
  <Navbar />
  <Component {...pageProps} />
  </>
}

export default MyApp
