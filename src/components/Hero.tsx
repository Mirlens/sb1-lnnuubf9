import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSlider } from '../hooks/useSlider';

const images = [
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1455156218388-5e61b526818b?auto=format&fit=crop&q=80&w=2000'
];

export const Hero = () => {
  const { currentIndex, next, prev } = useSlider(images.length);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
      
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="mb-4 text-5xl font-light tracking-wide md:text-7xl">
            Mirlens
          </h1>
          <p className="text-xl font-light tracking-wider md:text-2xl">
            Capturing Your Coastal Memories
          </p>
          <button className="mt-8 rounded-full bg-white/20 px-8 py-3 text-lg backdrop-blur-sm transition hover:bg-white/30">
            Book Now
          </button>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition hover:bg-white/30"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition hover:bg-white/30"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>
    </div>
  );
};