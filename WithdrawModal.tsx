
import React, { useState } from 'react';
import type { WithdrawalOption } from '../types';

interface WithdrawModalProps {
  points: number;
  onClose: () => void;
  onWithdraw: (option: WithdrawalOption, amount: number) => void;
  minimumWithdrawalPoints: number;
}

const withdrawalOptions: WithdrawalOption[] = [
  { id: 'paytm', name: 'Paytm Wallet', logo: 'https://i.imgur.com/u0iLeB9.png', minPoints: 500 },
  { id: 'upi', name: 'UPI Transfer', logo: 'https://i.imgur.com/2U5H5C9.png', minPoints: 500 },
  { id: 'amazon', name: 'Amazon Gift Card', logo: 'https://i.imgur.com/9T1Jjfx.png', minPoints: 1000 },
  { id: 'googleplay', name: 'Google Play Balance', logo: 'https://i.imgur.com/3Y2d62p.png', minPoints: 1000 },
];

export const WithdrawModal: React.FC<WithdrawModalProps> = ({ points, onClose, onWithdraw, minimumWithdrawalPoints }) => {
  const [selectedOption, setSelectedOption] = useState<WithdrawalOption | null>(null);
  const [amount, setAmount] = useState(minimumWithdrawalPoints);

  const handleWithdrawClick = () => {
    if (selectedOption && points >= amount && amount >= selectedOption.minPoints) {
      onWithdraw(selectedOption, amount);
    }
  };

  const pointsToRupees = (pts: number) => `₹${(pts / 10).toFixed(2)}`;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl w-full max-w-md border border-gray-700 shadow-xl">
        <div className="p-6 border-b border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold">पैसे निकालें</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">&times;</button>
        </div>
        <div className="p-6">
          <div className="text-center mb-6">
            <p className="text-gray-400">आपकी शेष राशि</p>
            <p className="text-3xl font-bold text-yellow-400">{points} पॉइंट्स</p>
            <p className="text-lg text-green-400">({pointsToRupees(points)})</p>
          </div>
          
          <h3 className="font-semibold mb-3">विथड्रॉल का तरीका चुनें:</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {withdrawalOptions.map(option => (
              <button
                key={option.id}
                onClick={() => {
                    setSelectedOption(option);
                    setAmount(option.minPoints);
                }}
                className={`p-3 rounded-lg border-2 transition-all ${selectedOption?.id === option.id ? 'border-purple-500 bg-purple-500/10' : 'border-gray-600 hover:border-purple-400'}`}
              >
                <img src={option.logo} alt={option.name} className="h-8 mx-auto mb-2"/>
                <p className="text-sm font-semibold">{option.name}</p>
                <p className="text-xs text-gray-400">न्यूनतम {option.minPoints} pts</p>
              </button>
            ))}
          </div>
          
          {selectedOption && (
            <div className="mt-4">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
                राशि (पॉइंट्स में)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min={selectedOption.minPoints}
                step="10"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:ring-purple-500 focus:border-purple-500"
              />
              <p className="text-sm text-green-400 mt-1">बराबर {pointsToRupees(amount)}</p>
            </div>
          )}

          <button
            onClick={handleWithdrawClick}
            disabled={!selectedOption || points < amount || amount < (selectedOption?.minPoints ?? 0) }
            className="w-full mt-6 py-3 px-4 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            अभी विथड्रॉ करें
          </button>
        </div>
      </div>
    </div>
  );
};
