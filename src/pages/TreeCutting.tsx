import React from 'react';
import { TreePine, CheckCircle2 } from 'lucide-react';

export default function TreeCutting() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1592424001807-1c458216598b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Specialized Services</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Tree Cutting & Removal</h1>
          <p className="text-lg md:text-xl max-w-2xl text-neutral-300 mb-8">
            Safe, fast, and thorough tree cutting, pruning, and removal services to protect your property and enhance your landscape.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-lime-500 hover:bg-lime-600 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-colors rounded-sm"
          >
            Get a Free Quote
          </a>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Safe & Efficient Tree Services</h2>
            <div className="w-16 h-1 bg-lime-500 mb-8" />
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Dead, diseased, or overgrown trees can pose a huge danger to your home and family. Our tree cutting experts take down hazardous trees safely and efficiently. We also handle large-limb pruning to get more sunlight to your yard.
            </p>
            <ul className="space-y-4 mb-8">
              {['Full Tree Removal', 'Hazardous Limb Pruning', 'Brush & Limb Clean Up', 'Wood Haul-Away', 'Emergency Assessment'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-neutral-700">
                  <CheckCircle2 className="text-lime-500 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-neutral-50 p-8 border-2 border-neutral-100 flex flex-col justify-center">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center text-white shrink-0">
                <TreePine size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Safety First</h3>
                <p className="text-neutral-500 text-sm">Protecting your property</p>
              </div>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Taking down a tree is dangerous work that requires experience and the right equipment. We carefully plan our drops, use proven rigging techniques where necessary, and clean up the entire mess so your yard is ready to enjoy immediately.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
