import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus } from 'lucide-react';

const projects = [
  { img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&w=800&q=80', title: 'Hyde Park Pavers', service: 'Hardscaping' },
  { img: 'https://images.unsplash.com/photo-1592424001807-1c458216598b?ixlib=rb-4.0.3&w=800&q=80', title: 'West Chester Retaining Wall', service: 'Structural' },
  { img: 'https://images.unsplash.com/photo-1558904541-efa843a96f0f?ixlib=rb-4.0.3&w=800&q=80', title: 'Mason Clean Up', service: 'Maintenance' },
  { img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&w=800&q=80', title: 'Fairfield Trim', service: 'Tree Cutting' },
  { img: 'https://images.unsplash.com/photo-1416879590666-4e5cb0de70eb?ixlib=rb-4.0.3&w=800&q=80', title: 'Oakley Fire Pit', service: 'Hardscaping' },
  { img: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&w=800&q=80', title: 'Cincinnati Sod Install', service: 'Lawn Care' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  
  const filtered = filter === 'All' ? projects : projects.filter(p => p.service === filter);

  return (
    <main className="flex-1">
      <Helmet>
        <title>Our Portfolio & Projects | Lopez Lawncare Cincinnati</title>
        <meta name="description" content="View our gallery of custom paver patios, retaining walls, and lawn transformations across Greater Cincinnati." />
      </Helmet>

      <div className="bg-neutral-900 text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1416879590666-4e5cb0de70eb?ixlib=rb-4.0.3&w=2000&q=80")' }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Real Results</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work Gallery</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8">
            Take a look at the outdoor spaces we’ve transformed across Cincinnati, Fairfield, and West Chester.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {['All', 'Hardscaping', 'Maintenance', 'Structural', 'Lawn Care', 'Tree Cutting'].map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`uppercase tracking-wider font-bold text-xs px-6 py-3 border-2 transition-colors ${filter === cat ? 'bg-lime-500 text-white border-lime-500' : 'bg-transparent text-neutral-600 border-neutral-200 hover:border-lime-500'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => (
              <div key={idx} className="group relative h-80 overflow-hidden rounded-sm cursor-pointer shadow-sm">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-90 transition-opacity">
                  <div className="absolute bottom-6 left-6 text-white transform group-hover:-translate-y-2 transition-transform">
                    <p className="text-lime-400 font-bold uppercase tracking-wider text-xs mb-1">{project.service}</p>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-lime-500 text-white p-3 rounded-full">
                      <Plus size={20} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
