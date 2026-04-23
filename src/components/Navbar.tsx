import React, { useState, useEffect } from 'react';
import logoImg from '../assets/img/hero/img002.webp';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center transition-transform duration-300 hover:scale-105">
          <img src={logoImg} alt="Andrés Soto Logo" className="h-12 w-auto object-contain" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-gold transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gold/10 border border-gold text-gold font-medium hover:bg-gold hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(233,193,82,0.15)] hover:shadow-[0_0_20px_rgba(233,193,82,0.4)]"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-200 hover:text-gold transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass border-t border-white/5 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-gray-200 hover:text-gold transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center w-full mt-4 px-6 py-3 rounded-full bg-gold text-primary font-bold hover:bg-white transition-all duration-300"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
