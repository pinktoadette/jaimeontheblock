import Footer from '@components/Footer';
import Jaime from '@components/Jaime';
import '@styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ParticlesCard from '@components/utilities/Particles'

import type { AppProps } from 'next/app'
import Script from 'next/script';


export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
   <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-170103870-1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-170103870-1');
        `}
      </Script>
    
    <ParticlesCard />
    <Jaime />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}
