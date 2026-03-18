import React from 'react';
import { Star, PhoneCall, ClipboardList, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="jumbotron relative h-[640px] md:h-[780px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558904541-efa843a96f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
      >
        {/* Dark overlay with slight green tint for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
      </div>

      <div className="container mx-auto px-4 h-full relative z-10 flex items-center justify-center">
        <div className="text-center max-w-4xl pt-10">
          
          {/* Top Geo Badge */}
          <div className="inline-flex items-center space-x-2 bg-neutral-900 border-2 border-lime-500 text-white rounded-full px-5 py-2 mb-8 shadow-lg shadow-black/20">
            <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
            <span className="text-sm font-bold tracking-wide uppercase">Serving Cincinnati, Fairfield & West Chester</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Hardscaping & Lawn <br className="hidden md:block" />
            <span className="text-lime-400"> Experts</span>
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            From routine lawn mowing and tree cutting to fully custom paver patios and retaining walls, Lopez Lawncare & Landscaping LLC delivers quality work across Cincinnati.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              className="btn btn-primary bg-lime-500 hover:bg-lime-400 text-white px-8 py-4 font-bold transition-all uppercase tracking-wider text-sm w-full sm:w-auto flex items-center justify-center space-x-2 rounded-sm shadow-lg"
            >
              <ClipboardList size={18} />
              <span>Free Estimate</span>
            </a>
            <a
              href="tel:5135550199"
              className="btn btn-outline border-2 border-white text-white hover:bg-white hover:text-neutral-900 px-8 py-4 font-bold transition-all uppercase tracking-wider text-sm w-full sm:w-auto flex items-center justify-center space-x-2 rounded-sm"
            >
              <PhoneCall size={18} />
              <span>Call (513) 555-0199</span>
            </a>
          </div>

        </div>
      </div>
      
      {/* Visual Trust Indicator Strip (Phase 2 Enhancement) */}
      <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10 py-4 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 lg:gap-12 items-center text-xs lg:text-sm font-semibold tracking-widest uppercase text-white/90">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-500" /> Serving Cincinnati</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-500" /> Paver Patios & Retaining Walls</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-500" /> Free Estimates</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-lime-500" /> Full Service Lawn Care</span>
          </div>
        </div>
      </div>
    </div>
  );
}
