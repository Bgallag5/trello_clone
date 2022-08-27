import Head from 'next/head';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import AppView from '../components/AppView/AppView';
import Companies from '../components/Companies/Companies';
import Features from '../components/Features/Features';
import CTA from '../components/CTA/CTA';
import Slider from '../components/Slider/Slider';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <div className="app-container">
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;1,200;1,500&family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,100;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;1,300;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Hero />
      <About />
      <AppView />
      <Companies />
      <Features />
      <Slider />
      <CTA />
      <Footer />
    </div>
  );
}
