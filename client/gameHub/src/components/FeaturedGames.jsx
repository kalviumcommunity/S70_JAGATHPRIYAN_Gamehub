// components/FeaturedGames.jsx
import React from 'react';

const games = [
  {
    title: 'Dauntless',
    description: 'A free-to-play co-op action RPG with gameplay similar to Monster Hunter.',
    image: 'https://www.freetogame.com/g/1/thumbnail.jpg',
    platform: 'PC (Windows)',
    genre: 'MMORPG',
    developer: 'Phoenix Labs'
  },
  {
    title: 'World of Tanks',
    description: 'A team-based free-to-play PC tank shooter with over 600 vehicles to choose from.',
    image: 'https://www.freetogame.com/g/2/thumbnail.jpg',
    platform: 'PC (Windows)',
    genre: 'Shooter',
    developer: 'Wargaming'
  },
  {
    title: 'Warframe',
    description: 'A cooperative free-to-play third person online action shooter set in an evolving sci-fi world.',
    image: 'https://www.freetogame.com/g/3/thumbnail.jpg',
    platform: 'PC (Windows)',
    genre: 'Shooter',
    developer: 'Digital Extremes'
  },
  {
    title: 'CRSED: F.O.A.D.',
    description: 'A brutal battle royale game with high-powered abilities and supernatural elements.',
    image: 'https://www.freetogame.com/g/4/thumbnail.jpg',
    platform: 'PC (Windows)',
    genre: 'Shooter',
    developer: 'Gaijin Entertainment'
  }
];

export default function FeaturedGames() {
  return (
    <section className="px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Featured Games</h2>
        <button className="text-sm text-blue-600 hover:underline">View All Games</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {games.map((game, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
            <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-md font-bold text-gray-700 mb-1">{game.title}</h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{game.description}</p>
              <span className="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mr-2">
                {game.platform}
              </span>
              <span className="inline-block text-xs text-gray-500">{game.developer}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}