import Footer from '@components/Footer';
import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import type { AppProps } from 'next/app'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-170103870-1');
ReactGA.pageview(window.location.pathname + window.location.search);


export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
  )
}
