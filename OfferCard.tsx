
import React, { useState } from 'react';
import type { Offer } from '../types';
import { StarIcon } from './icons/StarIcon';

interface OfferCardProps {
  offer: Offer;
  onComplete: (points: number) => void;
}

export const OfferCard: React.FC<OfferCardProps> = ({ offer, onComplete }) => {
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleComplete = () => {
    setLoading(true);
    // Simulate API call or task completion
    setTimeout(() => {
      onComplete(offer.points);
      setCompleted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-800/60 p-4 rounded-xl border border-gray-700 flex items-center justify-between transition-all hover:bg-gray-700/80 hover:border-cyan-500/50">
      <div className="flex items-center space-x-4">
        {offer.icon}
        <div>
          <h4 className="font-bold text-white">{offer.title}</h4>
          <p className="text-sm text-gray-400">{offer.description}</p>
        </div>
      </div>
      <div className="flex flex-col items-end space-y-2">
         <div className="flex items-center space-x-1 text-yellow-400">
            <StarIcon className="w-4 h-4"/>
            <span className="font-bold text-lg">{offer.points}</span>
         </div>
         <button
            onClick={handleComplete}
            disabled={completed || loading}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 w-32
              ${completed ? 'bg-green-500 text-white cursor-default' : 
               loading ? 'bg-cyan-700 text-white animate-pulse' :
              'bg-cyan-600 hover:bg-cyan-500 text-white'}`}
          >
            {completed ? 'पूर्ण' : loading ? 'प्रोसेसिंग...' : 'शुरू करें'}
          </button>
      </div>
    </div>
  );
};
