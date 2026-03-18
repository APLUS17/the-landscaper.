import React from 'react';

export default function AboutCompany() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: About */}
          <div className="pr-0 lg:pr-8">
            <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Our Story</span>
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              <span className="font-light text-neutral-700">About</span> <span className="text-lime-500">Lopez Lawncare</span>
            </h2>
            <div className="border-b-4 border-lime-500 w-16 mb-6"></div>
            
            <div className="space-y-4 text-neutral-500 leading-relaxed mb-8">
              <p>
                Based in Southwest Ohio, <strong className="text-neutral-700">Lopez Lawncare & Landscaping LLC</strong> is a hard-working, local team dedicated to delivering high-quality outdoor transformations for our neighbors in Cincinnati, Fairfield, and West Chester.
              </p>
              <p>
                As a primary service provider in <strong className="text-neutral-700">Butler County and the Greater Cincinnati Area</strong>, whether you need a complete backyard overhaul with custom paver patios and retaining walls, or just need reliable, routine lawn mowing and cleanup, we handle it all with precision and care. 
              </p>
              <p>
                We believe in providing honest, free estimates and letting the quality of our hardscaping and landscaping work speak for itself.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-neutral-600 mb-8">
              {[
                { label: 'Location', value: 'Cincinnati, OH' },
                { label: 'Service Area', value: 'Greater Cincinnati' },
                { label: 'Availability', value: 'Mon–Sat' },
                { label: 'Estimates', value: 'Always Free' },
              ].map(item => (
                <div key={item.label}>
                  <div className="font-bold text-neutral-900">{item.value}</div>
                  <div className="text-neutral-400 uppercase tracking-wider text-xs">{item.label}</div>
                </div>
              ))}
            </div>

            <a href="tel:5135550199" className="inline-flex items-center bg-lime-500 hover:bg-lime-600 text-white font-bold uppercase tracking-wider text-sm px-6 py-3 transition-colors rounded-sm">
              Call Us: (513) 555-0199
            </a>
          </div>

          {/* Right Column: Quote Form */}
          <div id="contact" className="border-[12px] border-neutral-100 p-8 md:p-10">
            <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-2 block text-center">It's Free</span>
            <h3 className="text-3xl font-bold text-neutral-900 mb-4 text-center">
              <span className="font-light text-neutral-700">Request</span> <span className="text-lime-500">An Estimate</span>
            </h3>
            <div className="border-b-4 border-lime-500 w-16 mb-8"></div>
            
            <form action="mailto:info@groundselite.com" method="get">
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1 flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    className="w-full p-3 bg-white border-2 border-neutral-200 text-sm focus:outline-none focus:border-lime-500 transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-3 bg-white border-2 border-neutral-200 text-sm focus:outline-none focus:border-lime-500 transition-colors"
                  />
                  <div className="relative">
                    <select
                      name="service"
                      className="w-full p-3 bg-white border-2 border-neutral-200 text-sm text-neutral-500 focus:outline-none focus:border-lime-500 transition-colors appearance-none"
                    >
                      <option value="">Select a Service</option>
                      <option value="Paver Patio">Paver Patio</option>
                      <option value="Retaining Wall">Retaining Wall</option>
                      <option value="Tree Cutting">Tree Cutting / Removal</option>
                      <option value="Lawn Mowing & Clean Up">Lawn Mowing & Clean Up</option>
                      <option value="Other">Other / Not Sure</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-neutral-400">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex">
                  <textarea
                    name="body"
                    placeholder="Tell us about your yard and what you need..."
                    className="w-full flex-1 min-h-[150px] p-3 bg-white border-2 border-neutral-200 text-sm focus:outline-none focus:border-lime-500 transition-colors resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-lime-500 hover:bg-lime-600 text-white font-bold uppercase tracking-wider text-sm px-8 py-3.5 transition-colors rounded-sm w-full"
                >
                  Send My Free Estimate Request
                </button>
              </div>
              <p className="text-center text-neutral-400 text-xs mt-4">Or call us directly: <a href="tel:5135550199" className="text-lime-500 font-bold">(513) 555-0199</a></p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
