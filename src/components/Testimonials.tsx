import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "They did an incredible job building a custom paver patio for our backyard. The crew was fast, clean, and the final result exceeded our expectations.",
    author: "Cincinnati Resident",
    location: "Cincinnati, OH",
    stars: 5,
    service: "Hardscaping / Patio"
  },
  {
    quote: "Lopez Lawncare & Landscaping has been maintaining our lawn all season. They show up exactly when they say they will and the yard looks perfect.",
    author: "Local Homeowner",
    location: "Cincinnati, OH",
    stars: 5,
    service: "Lawn Care"
  },
  {
    quote: "We needed an old, overgrown tree cut and removed, plus a massive clean up. They took care of everything efficiently and left the area spotless. Highly recommend!",
    author: "Verified Customer",
    location: "Cincinnati, OH",
    stars: 5,
    service: "Tree Cutting / Clean Up"
  },
  {
    quote: "Their retaining wall construction is top-notch. It solved our erosion issues and looks beautiful. Great local team that isn't afraid of hard labor.",
    author: "Property Owner",
    location: "Cincinnati, OH",
    stars: 5,
    service: "Retaining Wall"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);

  // Auto‑advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[active];

  return (
    <section id="testimonials" className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Header */}
        <div className="text-center mb-14 fade-in-up">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-2 block">What Clients Say</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            <span className="font-light">Real Reviews from</span> Real Neighbors
          </h2>
          <div className="flex justify-center items-center space-x-2 mt-4">
            <div className="flex bg-white px-3 py-1.5 rounded-full shadow-sm items-center border border-neutral-100">
              <span className="font-bold text-neutral-800 mr-2 text-sm flex items-center">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="text-neutral-500 text-xs font-semibold ml-2">4.8 Rating</span>
            </div>
          </div>
        </div>

        {/* Single Testimonial Card */}
        <div className="relative">
          <div
            key={active}
            className="bg-white p-10 md:p-14 rounded-sm border border-neutral-100 shadow-sm text-center transition-all duration-500 animate-fade-in"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                  {t.author.charAt(0)}
                </div>
                <div className="text-left">
                  <cite className="font-bold text-neutral-900 not-italic block leading-tight">{t.author}</cite>
                  <span className="text-neutral-500 text-xs">Local Guide · 12 reviews</span>
                </div>
              </div>
              <div className="flex bg-neutral-50 rounded-full p-2">
                <span className="font-bold text-xl flex items-center">
                  <span className="text-blue-500">G</span>
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-1 mb-4 border-b border-neutral-100 pb-4">
              <div className="flex">
                {[...Array(t.stars)].map((_, s) => <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <span className="text-neutral-400 text-xs ml-2">• a month ago</span>
            </div>

            <blockquote className="text-neutral-700 text-left text-sm md:text-base leading-relaxed mb-6">
              {t.quote}
            </blockquote>

            <div className="bg-neutral-50 p-3 rounded-sm flex justify-between items-center text-left">
              <span className="text-neutral-500 text-xs font-semibold uppercase tracking-wider block">Service Rendered</span>
              <span className="text-lime-600 font-bold text-sm block">{t.service}</span>
            </div>
          </div>

          {/* Nav arrows — placed outside the card */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-11 h-11 flex items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-400 hover:bg-lime-500 hover:text-white hover:border-lime-500 transition-colors cursor-pointer shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-11 h-11 flex items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-400 hover:bg-lime-500 hover:text-white hover:border-lime-500 transition-colors cursor-pointer shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === active ? 'bg-lime-500 w-8' : 'bg-neutral-300 hover:bg-neutral-400'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
