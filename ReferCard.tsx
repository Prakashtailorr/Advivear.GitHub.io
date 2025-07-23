
import React, { useState, useEffect } from 'react';
import { UsersIcon } from './icons/UsersIcon';

export const ReferCard: React.FC = () => {
  const [referralCode, setReferralCode] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Generate a pseudo-random referral code
    setReferralCode(`EARN${Math.random().toString(36).substring(2, 8).toUpperCase()}`);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-6 rounded-2xl border border-pink-400/50 text-center">
      <UsersIcon className="w-12 h-12 text-pink-300 mx-auto mb-4" />
      <h3 className="text-xl font-bold mb-2">5 दोस्तों को जोड़ो और 100 पॉइंट्स फ्री पाओ!</h3>
      <p className="text-gray-300 mb-4">अपने दोस्तों को आमंत्रित करें और उनकी कमाई का 10% कमीशन पाएं।</p>
      <div className="flex justify-center items-center space-x-2">
        <span className="border-2 border-dashed border-gray-500 bg-gray-900/50 rounded-lg px-6 py-2 font-mono text-lg tracking-widest">{referralCode}</span>
        <button onClick={handleCopy} className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors">
          {copied ? 'कॉपी हुआ!' : 'कॉपी करें'}
        </button>
      </div>
    </div>
  );
};
