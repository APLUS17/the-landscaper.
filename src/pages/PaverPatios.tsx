import React from 'react';
import { Hammer, CheckCircle2 } from 'lucide-react';

export default function PaverPatios() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <div className="bg-neutral-900 text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Premium Hardscaping</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Paver Patios & Retaining Walls</h1>
          <p className="text-lg md:text-xl max-w-2xl text-neutral-300 mb-8">
            Transform your backyard into a stunning, functional oasis. We build durable structures that last a lifetime in Cincinnati's climate.
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
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Expert Hardscaping Services</h2>
            <div className="w-16 h-1 bg-lime-500 mb-8" />
            <p className="text-neutral-600 mb-6 leading-relaxed">
              At Lopez Lawncare, our hardscaping services are designed to improve the usability and aesthetics of your outdoor living space. From custom-designed paver patios perfect for summer entertainment to structural retaining walls that prevent soil erosion and level out uneven terrain, we ensure high-quality craftsmanship.
            </p>
            <ul className="space-y-4 mb-8">
              {['Custom Paver Patios', 'Retaining Walls built to Code', 'Walkways & Pathways', 'Fire Pits & Outdoor Living', 'Premium Materials & Stones'].map((item, i) => (
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
                <Hammer size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Built to Last</h3>
                <p className="text-neutral-500 text-sm">Engineered for Ohio weather</p>
              </div>
            </div>
            <p className="text-neutral-600 leading-relaxed mb-6">
              A poorly built patio or wall will eventually sink, separate, or collapse. We follow industry best practices for excavation, base preparation, and drainage so that your investment remains solid and beautiful year after year.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
