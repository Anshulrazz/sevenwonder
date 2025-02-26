'use client'
import React, { useState } from 'react';
import LocationSearchInput from './inputcom';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = async (e:any) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        alert('Subscription failed. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="py-24 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Subscribe to Basaani Travels</h2>
        <p className="mb-8 text-lg md:text-xl">
          Stay updated with the latest travel deals, offers, and updates from Royal Jat Travels. Enter your email below to subscribe to our newsletter.
        </p>
        <form onSubmit={handleSubscribe} className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <div className="relative w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg shadow-md focus:outline-none text-black border border-gray-300"
              required
            />
          </div>
          <button type="submit" className="px-6 py-3 font-bold transition bg-yellow-500 rounded-lg shadow-lg hover:bg-yellow-600">
            Subscribe
          </button>
          <LocationSearchInput/>
        </form>
        {submitted && (
          <p className="mt-4 font-medium text-green-500">Thank you for subscribing! 🎉</p>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
