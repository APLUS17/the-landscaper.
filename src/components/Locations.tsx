import React from 'react';
import { MapPin, ArrowRight, Building2, Home } from 'lucide-react';

const cities = [
  "Springdale", "Cincinnati", "West Chester", "Fairfield", "Mason", 
  "Hyde Park", "Oakley", "Sharonville", "Blue Ash", "Kenwood",
  "Loveland", "Montgomery", "Middletown", "Hamilton"
];

const neighborhoods = [
  "Glendale", "Forest Park", "Wyoming", "Finneytown", "Liberty Township", 
  "Beckett Ridge", "Pleasant Ridge", "Mount Lookout", "Mariemont", "Indian Hill"
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-neutral-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-500/10 -skew-x-12 transform translate-x-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Service Areas</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Serving our <span className="text-lime-500">Neighbors</span> across Greater Cincinnati
            </h2>
            <p className="text-neutral-400 text-lg mb-10 max-w-xl">
              Based in Springdale, OH, we are proud to provide premium landscaping, lawn care, 
              and hardscaping to residential and commercial properties throughout Butler and Hamilton County.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="flex items-start space-x-4">
                <div className="bg-lime-500/20 p-3 rounded-sm">
                  <Home className="text-lime-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Residential</h4>
                  <p className="text-neutral-500 text-sm">Expert lawn care for homeowners.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-lime-500/20 p-3 rounded-sm">
                  <Building2 className="text-lime-500" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Commercial</h4>
                  <p className="text-neutral-500 text-sm">Full property maintenance.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center space-x-2 bg-lime-500 hover:bg-lime-600 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-colors rounded-sm shadow-xl">
              <span>Check your area</span>
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 border border-white/10 rounded-sm">
            <div className="flex items-center space-x-3 mb-8">
              <MapPin className="text-lime-500" size={28} />
              <h3 className="text-2xl font-bold">Primary Locations</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 mb-10 text-neutral-300">
              {cities.map(city => (
                <div key={city} className="flex items-center space-x-2 group cursor-default">
                  <div className="w-1.5 h-1.5 rounded-full bg-lime-500 group-hover:scale-150 transition-transform" />
                  <span className="text-sm hover:text-white transition-colors">{city}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-8">
              <h4 className="text-lime-500 font-bold text-sm uppercase tracking-widest mb-4">Nearby Neighborhoods</h4>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-neutral-400 text-xs uppercase tracking-wider">
                {neighborhoods.map((n, i) => (
                  <span key={n}>
                    {n}{i < neighborhoods.length - 1 && <span className="text-neutral-700 ml-4">|</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
