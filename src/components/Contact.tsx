import React from 'react';
import { Instagram, MessageCircle, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="bg-white py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-light tracking-wide">Get in Touch</h2>
        
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-light">Contact Us</h3>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-200 p-3 focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-lg border border-gray-200 p-3 focus:border-blue-400 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message"
                  className="h-32 w-full rounded-lg border border-gray-200 p-3 focus:border-blue-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center rounded-lg bg-blue-500 px-6 py-3 text-white transition hover:bg-blue-600"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="mb-6 text-2xl font-light">Connect With Us</h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 p-4 transition hover:border-blue-400"
              >
                <Instagram className="mr-4 h-6 w-6" />
                <span>Follow us on Instagram</span>
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-gray-200 p-4 transition hover:border-green-400"
              >
                <MessageCircle className="mr-4 h-6 w-6" />
                <span>Message us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};