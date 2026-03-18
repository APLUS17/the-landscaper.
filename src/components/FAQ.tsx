import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you offer free estimates?",
    answer: "Yes! We always provide honest, no-obligation free estimates for all our services across the Greater Cincinnati, Fairfield, and West Chester areas."
  },
  {
    question: "Do you service specific neighborhoods in Fairfield and West Chester?",
    answer: "Yes! We frequently work in neighborhoods across Fairfield (including the Pleasant Ave area) and throughout West Chester and Liberty Township. We are local to Butler County and know the area well."
  },
  {
    question: "Do you build paver patios and retaining walls?",
    answer: "Absolutely. Hardscaping is a core part of our business. We design and build custom paver patios, walkways, and structural retaining walls tailored to the Tri-State's climate and soil."
  },
  {
    question: "What areas do you serve?",
    answer: "We proudly serve the Greater Cincinnati area and Butler County, including Fairfield, West Chester, Mason, Hyde Park, Oakley, and surrounding communities."
  },
  {
    question: "Do you offer routine lawn mowing?",
    answer: "Yes, we offer reliable, recurring lawn mowing and edging services, in addition to our larger landscaping and hardscaping projects."
  },
  {
    question: "Do you remove trees?",
    answer: "Yes, we provide safe and efficient tree cutting and removal services for overgrown or hazardous trees on your property."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16 fade-in-up">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-3 block">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Frequently Asked <span className="text-lime-500">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-lime-500 mx-auto mt-6" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-sm transition-all duration-300 ${openIndex === index ? 'border-lime-500 bg-lime-500/5' : 'border-neutral-100 hover:border-lime-500'}`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold text-neutral-900">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-lime-500 shrink-0 ml-4" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
