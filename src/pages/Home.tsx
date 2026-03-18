import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Galleries from '../components/Galleries';
import Process from '../components/Process';
import AboutCompany from '../components/AboutCompany';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Map from '../components/Map';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Lopez Lawncare & Landscaping LLC | Cincinnati</title>
        <meta name="description" content="Expert landscaping and hardscaping services in Cincinnati, OH. Free estimates available!" />
      </Helmet>
      <Hero />
      <Services />
      <Process />
      <Galleries />
      <AboutCompany />
      <About />
      <Testimonials />
      <FAQ />
      <Map />
    </main>
  );
}
