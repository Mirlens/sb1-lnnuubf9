import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { BookingForm } from './components/BookingForm';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Gallery />
      <BookingForm />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;