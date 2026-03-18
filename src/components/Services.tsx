import React from 'react';
import { Scissors, Hammer, TreePine, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Hammer size={28} />,
    title: 'Paver Patios & Retaining Walls',
    description: 'Transform your backyard with beautiful, durable hardscaping. We design and build custom paver patios and structural retaining walls built to last.',
    category: 'Hardscaping',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <Scissors size={28} />,
    title: 'Lawn Mowing & Clean Up',
    description: 'Keep your property pristine with our reliable lawn mowing, mulching, and comprehensive seasonal cleanup services.',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <TreePine size={28} />,
    title: 'Tree Cutting & Removal',
    description: 'Safe and efficient tree cutting and removal services to clear out overgrown or hazardous trees from your property.',
    category: 'Specialty Service',
    image: 'https://images.unsplash.com/photo-1592424001807-1c458216598b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Services That Actually <span className="text-lime-500">Get Done Right</span>
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            From custom hardscape installations to routine yard maintenance, Lopez Lawncare & Landscaping handles it all. We take pride in delivering top-notch physical labor and stunning results to properties across the Greater Cincinnati area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border-2 border-neutral-100 hover:border-lime-500 transition-colors duration-200 overflow-hidden flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56 border-b-2 border-neutral-100 group-hover:border-lime-500 transition-colors duration-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-0 left-0 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-2">
                  {service.category}
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <div className="text-lime-500 mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed mb-5">{service.description}</p>
                <a href="#contact" className="inline-flex items-center space-x-1 text-lime-500 font-bold uppercase tracking-wider text-xs hover:text-lime-600 transition-colors group/link">
                  <span>Get a Free Quote</span>
                  <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
