'use client'; // Add this line at the top of your file

import { Gamja_Flower } from 'next/font/google';
import React, { useState } from 'react';
import localFont from "next/font/local";

// Correct font import without weight (optional styling can be applied later in CSS)
const font = localFont({src: '../../fonts/Gamja/GamjaFlower-Regular.ttf'})

const WordList = () => {
  const words = [
    { "word": "Pangabuhi", "meaning": "Life, livelihood." },
    { "word": "Kalipay", "meaning": "Happiness, joy." },
    { "word": "Bantay", "meaning": "To guard, watch over." },
    { "word": "Gugma", "meaning": "Love." },
    { "word": "Salamat", "meaning": "Thank you." },
    { "word": "Himakas", "meaning": "Struggle, effort." },
    { "word": "Sakit", "meaning": "Pain, illness." },
    { "word": "Kahimtang", "meaning": "Condition, situation." },
    { "word": "Tawo", "meaning": "Person, human." },
    { "word": "Paglaum", "meaning": "Hope." }
  ];

  const [search, setSearch] = useState('');

  // Filter the word list based on search input
  const filteredWords = words.filter(item =>
    item.word.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg border border-gray-300 relative">
      <h1 className={`text-3xl font-bold text-center mb-4 ${font.className}`}>Word List | Listahan sang mga Pulong</h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for a word...✏️"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div>
        {filteredWords.map((item, index) => (
          <div
            key={index}
            className={`flex items-center py-4 relative border-b border-gray-300`}
          >
            <div
              className={`flex-1 text-2xl font-semibold text-gray-800 ${font.className} ${
                search && item.word.toLowerCase().includes(search.toLowerCase()) ? 'bg-yellow-200' : ''
              }`}
            >
              {item.word}
            </div>

            <div className="absolute inset-y-0 left-1/4 transform -translate-x-1/2 w-px bg-blue-400 opacity-60"></div>

            <div className={`flex-1 text-gray-800 ${font.className}`}>
              {item.meaning}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordList;
