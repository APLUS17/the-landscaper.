import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Galleries from './components/Galleries';
import Process from './components/Process';
import AboutCompany from './components/AboutCompany';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Map from './components/Map';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="layout-boxed min-h-screen font-sans text-neutral-800">
      <TopBar />
      <Header />
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
      <Footer />
    </div>
  );
}
