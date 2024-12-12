import React, { useState, useEffect } from 'react';
import { Camera, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center">
            <Camera className={`mr-2 h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            <span className={`text-xl font-light ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Mirlens
            </span>
          </a>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>

          <div className="hidden space-x-8 lg:flex">
            {['Home', 'Gallery', 'Book Now', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className={`transition hover:text-blue-400 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } absolute left-0 right-0 bg-white shadow-lg`}
        >
          <div className="space-y-4 p-4">
            {['Home', 'Gallery', 'Book Now', 'Testimonials', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block text-gray-900 transition hover:text-blue-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};