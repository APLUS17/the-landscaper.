import React from 'react';
import { Leaf, Scissors, Droplets } from 'lucide-react';

export default function Intro() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Side */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              We provide landscaping services since 1978
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              We provide exceptional landscaping services to a wide range of commercial and residential properties for over 35 years, including large corporate environments, city parks, shopping malls and apartments.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-sm font-bold transition-colors uppercase text-sm tracking-wider shadow-sm"
              >
                See our Services
              </a>
              <a
                href="#"
                className="border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white px-6 py-3 rounded-sm font-bold transition-colors uppercase text-sm tracking-wider"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 md:p-12 border-2 border-neutral-100 rounded-sm relative">
              <div className="absolute -top-6 -left-6 bg-neutral-900 border-2 border-lime-500 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md">
                <Leaf size={24} className="text-lime-500" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">
                The grass is always greener on your side of the fence
              </h3>
              <p className="text-neutral-600 mb-8">
                Our experienced landscapers set the standard each day in landscape design, paving, hardscaping. We will whip your yard into shape in no time.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <Scissors className="text-lime-500 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-neutral-900">Lawn Care</h4>
                    <p className="text-sm text-neutral-500">Professional mowing and maintenance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Droplets className="text-lime-500 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="font-bold text-neutral-900">Irrigation</h4>
                    <p className="text-sm text-neutral-500">Water management solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
