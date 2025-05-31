// components/HeroSection.jsx
import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white text-center py-12 px-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Discover Free-to-Play Games
      </h1>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Your ultimate destination for exploring the best free games across PC and browser platforms.
      </p>
      <div className="flex justify-center gap-4 mb-2">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Browse Games
        </button>
        <input
          type="text"
          placeholder="Search games..."
          className="border px-3 py-2 rounded w-64"
        />
      </div>
      <p className="text-xs text-gray-400 mt-2">Powered by FreeToGame API</p>
    </section>
  );
}