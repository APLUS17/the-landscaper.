import React from 'react';
import { Phone, MapPin, Clock, Mail, Leaf } from 'lucide-react';

const services = [
  'Paver Patios & Retaining Walls',
  'Lawn Mowing & Clean Up',
  'Tree Cutting & Removal',
];

const serviceAreas = [
  'Cincinnati, OH',
  'Fairfield, OH',
  'West Chester, OH',
  'Mason, OH',
  'Butler County, OH',
  'Hyde Park, OH',
  'Oakley, OH',
];

const hours = [
  { day: 'Monday', time: '7:00 AM – 5:00 PM' },
  { day: 'Tuesday', time: '7:00 AM – 5:00 PM' },
  { day: 'Wednesday', time: '7:00 AM – 5:00 PM' },
  { day: 'Thursday', time: '7:00 AM – 5:00 PM' },
  { day: 'Friday', time: '7:00 AM – 5:00 PM' },
  { day: 'Saturday', time: '7:00 AM – 5:00 PM' },
  { day: 'Sunday', time: '7:00 AM – 5:00 PM' },
];

export default function Footer() {
  return (
    <footer className="footer bg-[#1a1c18] text-[#999999] text-sm">
      
      {/* Main Footer (4 Columns) */}
      <div className="main-footer py-16">
        <div className="container mx-auto px-4">
          <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            {/* Col 1: Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="text-lime-500" size={28} />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg leading-none mb-1">Lopez Lawncare</span>
                  <span className="text-lime-500 text-[10px] font-semibold tracking-widest uppercase">& Landscaping LLC</span>
                </div>
              </div>
              <p className="leading-relaxed mb-6 text-[#777777]">
                Cincinnati's top choice for custom hardscaping, routine lawn care, and large cleanups. We let our hard work speak for itself.
              </p>
              <div className="space-y-3">
                <a href="tel:5135161439" className="flex items-center space-x-2 hover:text-lime-500 transition-colors">
                  <Phone size={14} className="text-lime-500 shrink-0" />
                  <span className="font-semibold text-white">(513) 516-1439</span>
                </a>
                <a href="mailto:info@lopezlandscapingcincinnati.com" className="flex items-center space-x-2 hover:text-lime-500 transition-colors">
                  <Mail size={14} className="text-lime-500 shrink-0" />
                  <span>info@lopezlandscapingcincinnati.com</span>
                </a>
                <div className="flex items-center space-x-2 text-[#777777]">
                  <MapPin size={14} className="text-lime-500 shrink-0" />
                  <span>Serving the Greater Cincinnati Area</span>
                </div>
              </div>
            </div>

            {/* Col 2: Services */}
            <div>
              <h6 className="widget-title text-white text-base font-bold mb-6 uppercase tracking-wider">
                <span className="font-light">Our</span> Services
              </h6>
              <ul className="space-y-3">
                {services.map((item, i) => (
                  <li key={i}>
                    <a href="/#services" className="hover:text-lime-500 transition-colors flex items-center space-x-2">
                      <span className="text-lime-500">›</span>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Service Areas */}
            <div>
              <h6 className="widget-title text-white text-base font-bold mb-6 uppercase tracking-wider">
                <span className="font-light">Service</span> Areas
              </h6>
              <ul className="space-y-3">
                {serviceAreas.map((item, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="text-lime-500">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Hours */}
            <div>
              <h6 className="widget-title text-white text-base font-bold mb-6 uppercase tracking-wider">
                <span className="font-light">Working</span> Hours
              </h6>
              <div className="opening-times">
                <ul className="space-y-2">
                  {hours.map((item, i) => (
                    <li key={i} className="weekday flex justify-between border-b border-neutral-800 pb-2">
                      <span>{item.day}</span>
                      <span className="text-lime-500 font-semibold">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom-footer bg-[#111311] py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="m-0 text-[#777777]">© 2026 Lopez Lawncare & Landscaping LLC · Cincinnati, OH · All Rights Reserved</p>
            <div className="flex items-center space-x-2">
              <span className="text-[#777777]">Need a Free Estimate?</span>
              <Phone size={14} className="text-lime-500" />
              <a href="tel:5135161439" className="text-white font-bold hover:text-lime-500 transition-colors">(513) 516-1439</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
