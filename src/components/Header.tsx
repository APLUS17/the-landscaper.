import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#gallery' },
    { name: 'About Us', href: '#about' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`header header-default w-full z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 bg-white shadow-md' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="navigation flex justify-between items-center py-4">
            
            <div className="navbar-header flex items-center justify-between w-full lg:w-auto">
              <a href="#home" aria-label="Lopez Lawncare & Landscaping LLC" className="navbar-brand flex items-center space-x-2">
                <Leaf className="text-lime-500" size={32} />
                {/* Company Info */}
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-neutral-900 tracking-tight leading-none mb-1">
                    Lopez Lawncare
                  </span>
                  <span className="text-sm font-medium text-lime-500 tracking-wide uppercase">
                    & Landscaping LLC
                  </span>
                </div>
              </a>
              
              <button
                type="button"
                className="navbar-toggle lg:hidden text-neutral-600 hover:text-lime-500 flex items-center space-x-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="navbar-toggle-text font-bold text-sm tracking-wider">MENU</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <nav id="navbar" className="hidden lg:flex items-center space-x-8">
              <ul className="main-navigation flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name} className="menu-item">
                    <a href={link.href} className="text-neutral-600 hover:text-lime-500 font-bold transition-colors uppercase text-sm tracking-wider">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="tel:5138700400"
                className="ml-4 bg-lime-500 hover:bg-lime-600 text-white px-5 py-2.5 font-bold text-sm tracking-wider transition-colors rounded-sm uppercase"
              >
                (513) 870-0400
              </a>
            </nav>
            
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-100 absolute w-full left-0 shadow-lg">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block px-6 py-3 text-neutral-600 hover:bg-neutral-50 hover:text-lime-500 font-bold uppercase text-sm tracking-wider"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a href="tel:5138700400" className="block px-6 py-3 text-lime-500 font-bold uppercase text-sm tracking-wider">
                  📞 (513) 870-0400
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
      
      {/* Sticky Offset to prevent layout jump when header becomes fixed */}
      {isSticky && <div className="sticky-offset h-[80px]"></div>}
    </>
  );
}
