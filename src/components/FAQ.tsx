import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const faqs = [
  {
    question: "Do you offer free estimates in Cincinnati?",
    answer: "Yes, we provide 100% free, no-obligation estimates for all our services, including lawn mowing, paver patios, and tree removal across Greater Cincinnati, West Chester, and Fairfield."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Absolutely. Lopez Lawncare & Landscaping LLC is fully licensed and carries comprehensive liability insurance to protect your property and our team during every project."
  },
  {
    question: "When is the best time to install a paver patio?",
    answer: "In Ohio, the best time for hardscaping like patios and retaining walls is from early spring through late fall. We can install as long as the ground isn't frozen."
  },
  {
    question: "How often should my lawn be mowed?",
    answer: "For most Cincinnati lawns, we recommend weekly mowing during the peak growing season (April - October) to maintain optimal grass health and prevent weed overgrowth."
  },
  {
    question: "Do you handle emergency tree removal?",
    answer: "Yes, we provide emergency tree assessments and removal services for hazardous or fallen trees caused by Cincinnati's frequent storms."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-lime-500 font-bold uppercase tracking-widest text-sm mb-2 block">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Expert <span className="font-light italic text-lime-600">Landscaping Insights</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-sm transition-all ${openIndex === index ? 'border-lime-500 shadow-md' : 'border-neutral-200 hover:border-lime-500'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center space-x-4">
                  <HelpCircle className={`text-lime-500 transition-transform ${openIndex === index ? 'scale-110' : ''}`} size={24} />
                  <span className="font-bold text-neutral-900 text-lg">{faq.question}</span>
                </div>
                {openIndex === index ? <ChevronUp className="text-lime-500" size={20} /> : <ChevronDown className="text-neutral-400" size={20} />}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0 animate-fade-in">
                  <div className="pl-10 text-neutral-600 leading-relaxed border-l-2 border-lime-500/20">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-neutral-900 rounded-sm p-8 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-neutral-400 mb-8">We're happy to discuss your specific property goals over the phone or email.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="tel:5135161439" className="bg-lime-500 hover:bg-lime-600 text-white font-bold px-8 py-3 rounded-sm transition-colors w-full sm:w-auto">
                Call (513) 516-1439
              </a>
              <a href="#contact" className="border border-white/20 hover:border-lime-500 hover:text-lime-500 text-white font-bold px-8 py-3 rounded-sm transition-colors w-full sm:w-auto">
                Send a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
