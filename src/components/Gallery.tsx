import React from 'react';
import { categories } from './categories';

export const Gallery = () => {
  return (
    <section className="bg-neutral-50 py-20" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-light tracking-wide">Gallery</h2>
        
        {categories.map((category) => (
          <div key={category.name} className="mb-16">
            <h3 className="mb-6 text-2xl font-light">{category.name}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {category.images.map((image) => (
                <div
                  key={image}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg"
                >
                  <img
                    src={image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 to-transparent p-4 opacity-0 transition duration-300 group-hover:opacity-100">
                    <p className="text-white">{category.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};