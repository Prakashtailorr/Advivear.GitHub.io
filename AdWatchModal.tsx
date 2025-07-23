
import React, { useState, useEffect } from 'react';
import { ADMOB_REWARDED_AD_UNIT_ID, AD_REWARD_POINTS } from '../constants';

interface AdWatchModalProps {
  onClose: () => void;
  onComplete: () => void;
}

const AD_DURATION = 30; // in seconds

export const AdWatchModal: React.FC<AdWatchModalProps> = ({ onClose, onComplete }) => {
  const [countdown, setCountdown] = useState(AD_DURATION);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => prev - 1);
        setProgress(prev => prev - (100 / AD_DURATION));
      }, 1000);
      return () => clearInterval(timer);
    } else {
      // Use a short timeout to allow the "congratulations" message to be seen before closing.
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
  }, [countdown, onComplete]);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-2xl w-full max-w-lg border border-purple-700/50 shadow-xl overflow-hidden">
        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-purple-300">विज्ञापन चल रहा है...</h2>
          <p className="text-gray-400 mt-2">पुरस्कार पाने के लिए कृपया प्रतीक्षा करें</p>
          <p className="text-xs text-gray-500 mt-4 px-4">
            (यह एक सिमुलेशन है। एक वास्तविक मोबाइल ऐप में, AdMob यूनिट '{ADMOB_REWARDED_AD_UNIT_ID}' का उपयोग किया जाएगा।)
          </p>
        </div>

        <div className="p-6">
            <img src={`https://picsum.photos/400/225?random=${Math.random()}`} alt="Ad placeholder" className="rounded-lg shadow-lg"/>
        </div>

        <div className="p-6">
          <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000 linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-gray-300">
            {countdown > 0 ? `${countdown} सेकंड बचे हैं...` : `बधाई हो! आपने ${AD_REWARD_POINTS} पॉइंट्स कमाए!`}
          </p>
        </div>

        {countdown > 0 && (
             <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 bg-gray-800/50 rounded-full w-8 h-8 flex items-center justify-center hover:text-white hover:bg-gray-700 transition-colors">
                &times;
             </button>
        )}
      </div>
    </div>
  );
};
