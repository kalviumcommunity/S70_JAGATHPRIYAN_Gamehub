import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">GAMEHUB</div>
      <ul className="flex gap-6 text-sm font-medium text-gray-700">
        <li className="hover:text-blue-500 cursor-pointer">Home</li>
        <li className="hover:text-blue-500 cursor-pointer">All Games</li>
        <li className="hover:text-blue-500 cursor-pointer">PC Games</li>
        <li className="hover:text-blue-500 cursor-pointer">Browser Games</li>
      </ul>
      <input
        type="text"
        placeholder="Search games..."
        className="border rounded px-3 py-1 text-sm w-52"
      />
    </nav>
  );
}