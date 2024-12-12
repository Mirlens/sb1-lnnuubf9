import React from 'react';
import { Calendar, Clock, MessageSquare } from 'lucide-react';

export const BookingForm = () => {
  return (
    <section className="bg-white py-20" id="booking">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-light tracking-wide">Book Your Session</h2>
        
        <form className="mx-auto max-w-2xl space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-600">First Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-blue-400 focus:outline-none"
                placeholder="John"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">Last Name</label>
              <input
                type="text"
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-blue-400 focus:outline-none"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-600">Email</label>
            <input
              type="email"
              className="w-full rounded-lg border border-gray-200 p-3 focus:border-blue-400 focus:outline-none"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-600">Session Type</label>
            <select className="w-full rounded-lg border border-gray-200 p-3 focus:border-blue-400 focus:outline-none">
              <option>Beach Portrait Session</option>
              <option>Sunset Photography</option>
              <option>Event Coverage</option>
              <option>Family Session</option>
            </select>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                <Calendar className="mr-2 inline-block h-4 w-4" />
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-gray-600">
                <Clock className="mr-2 inline-block h-4 w-4" />
                Preferred Time
              </label>
              <input
                type="time"
                className="w-full rounded-lg border border-gray-200 p-3 focus:border-blue-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm text-gray-600">
              <MessageSquare className="mr-2 inline-block h-4 w-4" />
              Special Requests
            </label>
            <textarea
              className="h-32 w-full rounded-lg border border-gray-200 p-3 focus:border-blue-400 focus:outline-none"
              placeholder="Tell us about your vision for the shoot..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 py-3 text-white transition hover:bg-blue-600"
          >
            Book Session
          </button>
        </form>
      </div>
    </section>
  );
};