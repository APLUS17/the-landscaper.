import React from 'react';
import { Phone, CalendarCheck, Home } from 'lucide-react';

const steps = [
  {
    icon: <Phone className="w-8 h-8 text-white" />,
    title: '1. Free Estimate',
    description: 'Call us at (513) 516-1439 or fill out our online form. We’ll discuss your needs and provide a transparent, no-obligation quote.',
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-white" />,
    title: '2. Project Execution',
    description: 'Our hard-working Cincinnati team arrives on schedule to transform your property, whether it’s a retaining wall, paver patio, or weekly mowing.',
  },
  {
    icon: <Home className="w-8 h-8 text-white" />,
    title: '3. Enjoy Your Yard',
    description: 'Step outside into your beautiful, upgraded outdoor space. We clean up perfectly after ourselves, leaving you to just relax and enjoy.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Simple Process. <span className="text-lime-500">Stunning Results.</span>
          </h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connector Line (visible on md screens) */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-neutral-200 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="w-24 h-24 rounded-full bg-lime-500 flex items-center justify-center p-2 mb-6 shadow-xl border-4 border-white">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h3>
              <p className="text-neutral-500 leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
