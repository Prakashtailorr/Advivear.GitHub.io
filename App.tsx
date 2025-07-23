
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { WithdrawModal } from './components/WithdrawModal';
import { AdWatchModal } from './components/AdWatchModal';
import { useLocalStorage } from './hooks/useLocalStorage';
import { MINIMUM_WITHDRAWAL_POINTS, AD_REWARD_POINTS } from './constants';
import type { WithdrawalOption } from './types';

const App: React.FC = () => {
  const [points, setPoints] = useLocalStorage<number>('userPoints', 0);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [isAdModalOpen, setAdModalOpen] = useState(false);
  const [lastBonusClaim, setLastBonusClaim] = useLocalStorage<string | null>('lastBonusClaim', null);

  const today = new Date().toDateString();
  const canClaimBonus = lastBonusClaim !== today;

  const handleWatchAd = () => {
    setAdModalOpen(true);
  };
  
  const handleAdComplete = () => {
    setPoints(prev => prev + AD_REWARD_POINTS);
    setAdModalOpen(false);
  };
  
  const handleClaimBonus = () => {
    if (canClaimBonus) {
      setPoints(prev => prev + 50); // Daily bonus points
      setLastBonusClaim(today);
    }
  };

  const handleWithdraw = (option: WithdrawalOption, amount: number) => {
    if (points >= amount) {
        setPoints(prev => prev - amount);
        // In a real app, you would process the withdrawal here.
        console.log(`Withdrawn ${amount} points to ${option.name}`);
        setWithdrawModalOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black font-sans">
      <Header points={points} />
      <main className="p-4 sm:p-6 max-w-4xl mx-auto">
        <Dashboard
          points={points}
          setPoints={setPoints}
          onWatchAd={handleWatchAd}
          onWithdraw={() => setWithdrawModalOpen(true)}
          canClaimBonus={canClaimBonus}
          onClaimBonus={handleClaimBonus}
        />
      </main>
      
      {isWithdrawModalOpen && (
        <WithdrawModal
          points={points}
          onClose={() => setWithdrawModalOpen(false)}
          onWithdraw={handleWithdraw}
          minimumWithdrawalPoints={MINIMUM_WITHDRAWAL_POINTS}
        />
      )}
      
      {isAdModalOpen && (
        <AdWatchModal
          onClose={() => setAdModalOpen(false)}
          onComplete={handleAdComplete}
        />
      )}
    </div>
  );
};

export default App;
