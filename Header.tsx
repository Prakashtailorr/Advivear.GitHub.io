
import React from 'react';
import { StarIcon } from './icons/StarIcon';

interface HeaderProps {
  points: number;
}

export const Header: React.FC<HeaderProps> = ({ points }) => {
  return (
    <header className="bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Ad Viewer ऐप
        </h1>
        <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-4 py-2">
          <StarIcon className="w-5 h-5 text-yellow-400" />
          <span className="font-bold text-lg">{points}</span>
          <span className="text-sm text-gray-400">पॉइंट्स</span>
        </div>
      </div>
    </header>
  );
};
