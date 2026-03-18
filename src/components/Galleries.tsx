import React from 'react';
import { Plus } from 'lucide-react';

const projects = [
  {
    title: 'Custom Paver Patio',
    category: 'Hardscaping',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Retaining Wall',
    category: 'Structural Landscaping',
    image: 'https://images.unsplash.com/photo-1592424001807-1c458216598b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Spring Clean Up',
    category: 'Maintenance',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
];

export default function Galleries() {
  return (
    <section id="gallery" className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="text-lime-400 font-bold uppercase tracking-widest text-sm mb-3 block">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Cincinnati Yards We've Transformed
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto mb-6" />
          <p className="text-neutral-400 text-lg">
            We believe results speak louder than promises. Here's a sample of what Lopez Lawncare & Landscaping delivers to Cincinnati homeowners every season.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-96 overflow-hidden rounded-sm cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-lime-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                <div className="bg-white text-lime-500 rounded-full p-3 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                  <Plus size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.title}
                </h3>
                <p className="text-white/80 uppercase tracking-wider text-sm transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-lime-500 hover:bg-lime-400 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-colors rounded-sm"
          >
            Get Your Yard Looking Like This →
          </a>
        </div>
      </div>
    </section>
  );
}
