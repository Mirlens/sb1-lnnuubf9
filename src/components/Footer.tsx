import React from 'react';
import { Camera, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-center">
          <Camera className="mr-2 h-8 w-8" />
          <span className="text-2xl font-light">Mirlens</span>
        </div>
        
        <div className="mb-8 flex justify-center space-x-6">
          <a href="#" className="transition hover:text-blue-400">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="transition hover:text-blue-400">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="transition hover:text-blue-400">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        
        <nav className="mb-8 flex flex-wrap justify-center gap-6 text-sm">
          <a href="#" className="transition hover:text-blue-400">Home</a>
          <a href="#gallery" className="transition hover:text-blue-400">Gallery</a>
          <a href="#booking" className="transition hover:text-blue-400">Book Now</a>
          <a href="#testimonials" className="transition hover:text-blue-400">Testimonials</a>
          <a href="#contact" className="transition hover:text-blue-400">Contact</a>
        </nav>
        
        <div className="text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Mirlens Photography. All rights reserved.
        </div>
      </div>
    </footer>
  );
};