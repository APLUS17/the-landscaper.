import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck, CalendarCheck, Clock, CheckCircle2 } from 'lucide-react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Galleries from '../components/Galleries';
import Process from '../components/Process';
import AboutCompany from '../components/AboutCompany';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Locations from '../components/Locations';
import Map from '../components/Map';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Lopez Lawncare & Landscaping LLC | Cincinnati</title>
        <meta name="description" content="Expert landscaping and hardscaping services in Cincinnati, OH. Free estimates available!" />
      </Helmet>
      <Hero />
      
      {/* Trust Banner Section */}
      <section className="bg-white border-y border-neutral-100 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="flex items-center space-x-3 group justify-center border-r border-neutral-100 last:border-0 pr-6">
              <ShieldCheck className="text-lime-500 transform group-hover:scale-110 transition-transform" size={32} />
              <div>
                <p className="font-bold text-neutral-900 text-sm md:text-base leading-tight">Fully Insured</p>
                <p className="text-neutral-500 text-xs hidden md:block">Active Protection</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group justify-center border-r border-neutral-100 last:border-0 pr-6">
              <CheckCircle2 className="text-lime-500 transform group-hover:scale-110 transition-transform" size={32} />
              <div>
                <p className="font-bold text-neutral-900 text-sm md:text-base leading-tight">Free Estimates</p>
                <p className="text-neutral-500 text-xs hidden md:block">No Obligation</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group justify-center border-r border-neutral-100 last:border-0 pr-6">
              <CalendarCheck className="text-lime-500 transform group-hover:scale-110 transition-transform" size={32} />
              <div>
                <p className="font-bold text-neutral-900 text-sm md:text-base leading-tight">Reliable Weekly</p>
                <p className="text-neutral-500 text-xs hidden md:block">Lawn Mowing</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group justify-center last:border-0">
              <Clock className="text-lime-500 transform group-hover:scale-110 transition-transform" size={32} />
              <div>
                <p className="font-bold text-neutral-900 text-sm md:text-base leading-tight">Prompt Reply</p>
                <p className="text-neutral-500 text-xs hidden md:block">Within 24hrs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Process />
      <Galleries />
      <About />
      <Testimonials />
      <Locations />
      <Map />
      <FAQ />
      <AboutCompany />
    </main>
  );
}
