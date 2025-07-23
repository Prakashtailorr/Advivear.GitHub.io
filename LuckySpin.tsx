
import React, { useState } from 'react';
import { SPIN_COST, SPIN_REWARDS } from '../../constants';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface LuckySpinProps {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
}

export const LuckySpin: React.FC<LuckySpinProps> = ({ points, setPoints }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [lastSpinDate, setLastSpinDate] = useLocalStorage<string | null>('lastSpinDate', null);

  const today = new Date().toDateString();
  const canSpin = lastSpinDate !== today;

  const handleSpin = () => {
    if (isSpinning || !canSpin) return;

    setIsSpinning(true);
    setPoints(p => p - SPIN_COST);

    const randomIndex = Math.floor(Math.random() * SPIN_REWARDS.length);
    const reward = SPIN_REWARDS[randomIndex];
    const degreesPerSegment = 360 / SPIN_REWARDS.length;
    
    // Add extra rotations for visual effect
    const randomOffset = (Math.random() - 0.5) * degreesPerSegment * 0.8;
    const targetRotation = 360 * 5 - (randomIndex * degreesPerSegment + randomOffset);

    setRotation(rotation + targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setPoints(prev => prev + reward);
      setLastSpinDate(today);
      alert(`आपने ${reward} पॉइंट्स जीते!`);
    }, 4000); // Corresponds to the transition duration
  };
  
  const segments = SPIN_REWARDS;

  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 flex flex-col md:flex-row items-center justify-center gap-8">
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
        <div 
          className="absolute w-full h-full rounded-full border-4 border-purple-500 transition-transform duration-[4000ms] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {segments.map((segment, i) => (
            <div
              key={i}
              className="absolute w-1/2 h-1/2"
              style={{
                transform: `rotate(${i * (360 / segments.length)}deg) skewY(-${90 - (360/segments.length)}deg)`,
                transformOrigin: '100% 100%',
                backgroundColor: i % 2 === 0 ? '#4a044e' : '#2e1065',
              }}
            >
               <div className="absolute w-full h-full flex items-center justify-center" style={{transform: `skewY(${90 - (360/segments.length)}deg) rotate(${(360 / segments.length) / 2}deg)`}}>
                 <span className="text-white font-bold text-xl -translate-y-1/2">{segment}</span>
               </div>
            </div>
          ))}
        </div>
        <div className="absolute top-[-10px] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-yellow-400 z-10"></div>
        <div className="absolute w-16 h-16 bg-gray-800 rounded-full border-4 border-purple-400"></div>
      </div>
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-2">अपनी किस्मत आजमाएं!</h3>
        <p className="text-gray-400 mb-4">प्रतिदिन एक बार स्पिन करें और अतिरिक्त अंक जीतें।</p>
        <p className="text-lg font-semibold text-yellow-400 mb-4">स्पिन की लागत: {SPIN_COST} पॉइंट्स</p>
        <button 
          onClick={handleSpin} 
          disabled={isSpinning || points < SPIN_COST || !canSpin}
          className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSpinning ? 'स्पिन हो रहा है...' : !canSpin ? 'आज हो गया' : 'स्पिन करें'}
        </button>
      </div>
    </div>
  );
};