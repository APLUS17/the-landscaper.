import React from 'react';
import { Leaf, CheckCircle, Clock, Star, MessageCircle, MapPin } from 'lucide-react';

const trustItems = [
  {
    icon: <Leaf size={24} />,
    title: 'Hardscape & Landscape',
    subtitle: 'From custom paver patios and retaining walls to routine lawn mowing, we handle your entire property.'
  },
  {
    icon: <CheckCircle size={24} />,
    title: 'Reliable Local Team',
    subtitle: 'We show up on schedule, work clean, and follow through — no rescheduling headaches.'
  },
  {
    icon: <Clock size={24} />,
    title: 'Prompt Service',
    subtitle: 'We respond quickly to inquiries so your yard gets the attention it needs when it needs it.'
  },
  {
    icon: <Star size={24} />,
    title: 'Quality Focused',
    subtitle: 'We take immense pride in our craftsmanship, ensuring every patio is level and every lawn is pristine.'
  },
  {
    icon: <MessageCircle size={24} />,
    title: 'Always Free Estimates',
    subtitle: 'Get an honest quote with no strings attached. We will walk through your needs and give you a fair price.'
  },
  {
    icon: <MapPin size={24} />,
    title: 'Cincinnati Based',
    subtitle: 'Operating directly in Cincinnati, OH — we are your dedicated local crew, not a faceless franchise.'
  }
];

export default function About() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Why Homeowners Choose Us</span>
          <h2 className="widget-title text-3xl md:text-4xl font-bold text-neutral-900">
            <span className="font-light">The Lopez Lawncare</span> Difference
          </h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-6" />
        </div>

        {/* 3-Column Grid */}
        <div className="panel-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="panel-grid-cell space-y-8">
            <div className="widget-icon-box flex items-start space-x-4">
              <div className="icon-box icon-small bg-white text-lime-500 w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-neutral-200">
                {trustItems[0].icon}
              </div>
              <div>
                <h6 className="title text-lg font-bold text-neutral-900 mb-2">{trustItems[0].title}</h6>
                <span className="subtitle text-neutral-600 leading-relaxed block">{trustItems[0].subtitle}</span>
              </div>
            </div>
            <div className="widget-icon-box flex items-start space-x-4">
              <div className="icon-box icon-small bg-white text-lime-500 w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-neutral-200">
                {trustItems[3].icon}
              </div>
              <div>
                <h6 className="title text-lg font-bold text-neutral-900 mb-2">{trustItems[3].title}</h6>
                <span className="subtitle text-neutral-600 leading-relaxed block">{trustItems[3].subtitle}</span>
              </div>
            </div>
          </div>

          <div className="panel-grid-cell space-y-8">
            <div className="widget-icon-box flex items-start space-x-4">
              <div className="icon-box icon-small bg-white text-lime-500 w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-neutral-200">
                {trustItems[1].icon}
              </div>
              <div>
                <h6 className="title text-lg font-bold text-neutral-900 mb-2">{trustItems[1].title}</h6>
                <span className="subtitle text-neutral-600 leading-relaxed block">{trustItems[1].subtitle}</span>
              </div>
            </div>
            <div className="widget-icon-box flex items-start space-x-4">
              <div className="icon-box icon-small bg-white text-lime-500 w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-neutral-200">
                {trustItems[4].icon}
              </div>
              <div>
                <h6 className="title text-lg font-bold text-neutral-900 mb-2">{trustItems[4].title}</h6>
                <span className="subtitle text-neutral-600 leading-relaxed block">{trustItems[4].subtitle}</span>
              </div>
            </div>
          </div>

          <div className="panel-grid-cell space-y-8">
            <div className="widget-icon-box flex items-start space-x-4">
              <div className="icon-box icon-small bg-white text-lime-500 w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-neutral-200">
                {trustItems[2].icon}
              </div>
              <div>
                <h6 className="title text-lg font-bold text-neutral-900 mb-2">{trustItems[2].title}</h6>
                <span className="subtitle text-neutral-600 leading-relaxed block">{trustItems[2].subtitle}</span>
              </div>
            </div>
            <div className="widget-icon-box flex items-start space-x-4">
              <div className="icon-box icon-small bg-white text-lime-500 w-14 h-14 rounded-full flex items-center justify-center shrink-0 border border-neutral-200">
                {trustItems[5].icon}
              </div>
              <div>
                <h6 className="title text-lg font-bold text-neutral-900 mb-2">{trustItems[5].title}</h6>
                <span className="subtitle text-neutral-600 leading-relaxed block">{trustItems[5].subtitle}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
