import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: 'Mirlens captured our beach wedding perfectly. Every photo tells a story and brings back beautiful memories.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Mike Thompson',
    text: 'The sunset family photoshoot exceeded our expectations. Professional, creative, and such a joy to work with!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    name: 'Emily Davis',
    text: 'Amazing eye for detail and composition. Our beach portraits are absolutely stunning!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  }
];

export const Testimonials = () => {
  return (
    <section className="bg-neutral-50 py-20" id="testimonials">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-light tracking-wide">Client Stories</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
            >
              <div className="mb-4 flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};