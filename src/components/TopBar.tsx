import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="topbar bg-neutral-900 text-neutral-400 text-sm py-3 hidden lg:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <span className="tagline font-medium text-neutral-300">Cincinnati's Most Trusted Lawn Care — Rated 4.8★ on Google</span>
        
        <div className="widgets flex items-center space-x-8">
          <div className="widget widget-icon-box flex items-center space-x-2">
            <MapPin size={16} className="text-lime-500 shrink-0" />
            <h6 className="title m-0 text-neutral-300 font-semibold">565 Waycross Rd, Cincinnati, OH 45240</h6>
          </div>
          
          <a href="tel:5136022727" className="widget widget-icon-box flex items-center space-x-2 hover:text-lime-500 transition-colors">
            <Phone size={16} className="text-lime-500 shrink-0" />
            <h6 className="title m-0 text-neutral-300 font-semibold">(513) 602-2727</h6>
          </a>
          
          <div className="widget widget-icon-box flex items-center space-x-2">
            <Clock size={16} className="text-lime-500 shrink-0" />
            <h6 className="title m-0 text-neutral-300 font-semibold">Mon–Sun: 7:00 AM – 5:00 PM</h6>
          </div>

          <div className="flex items-center space-x-1 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            <span className="text-neutral-300 ml-1">4.8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
