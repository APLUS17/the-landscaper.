import React from 'react';
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
