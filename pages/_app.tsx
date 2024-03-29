import '../styles/global.css'
import { AppProps, NextWebVitalsMetric } from 'next/app';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import { useEffect, FC } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/analytics';


export default function NextApp({
  pageProps,
  Component
}: AppProps) {
  useEffect(() => {
      document.body.classList?.remove('loading');
  }, []);

  const router = useRouter();

  useEffect(() => {
      const handleRouteChange = (url: URL) => {
          gtag.pageview(url);
      };
      router.events.on(
          'routeChangeComplete',
          handleRouteChange
      );
      return () => {
          router.events.off(
              'routeChangeComplete',
              handleRouteChange
          );
      };
  }, [router.events]);

  return (
      <>
      <Component {...pageProps} />
      <Footer />
      </>
  );
}

export function reportWebVitals(
  metric: NextWebVitalsMetric
): void {
  switch (metric.name) {
      case 'FCP':
          console.log('FCP: ', metric);
          break;
      case 'LCP':
          console.log('LCP: ', metric);
          break;
      case 'CLS':
          console.log('CLS: ', metric);
          break;
      case 'FID':
          console.log('FID: ', metric);
          break;
      case 'TTFB':
          console.log('TTFB: ', metric);
          break;
      case 'Next.js-hydration':
          console.log('Next.js-hydration: ', metric);
          break;
      case 'Next.js-route-change-to-render':
          console.log('Next.js-route-change-to-render: ', metric);
          break;
      case 'Next.js-render':
          console.log('Next.js-render: ', metric);
          break;
      default:
          break;
  }
}
