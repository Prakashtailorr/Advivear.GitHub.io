import React from 'react';
import { TaskCard } from './TaskCard';
import { OfferCard } from './OfferCard';
import { LuckySpin } from './LuckySpin';
import { ReferCard } from './ReferCard';
import { GiftIcon } from './icons/GiftIcon';
import { VideoIcon } from './icons/VideoIcon';
import { WalletIcon } from './icons/WalletIcon';
import { SurveyIcon } from './icons/SurveyIcon';
import { DownloadIcon } from './icons/DownloadIcon';
import type { Offer } from '../types';

interface DashboardProps {
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  onWatchAd: () => void;
  onWithdraw: () => void;
  canClaimBonus: boolean;
  onClaimBonus: () => void;
}

const mockOffers: Offer[] = [
  { id: 1, title: "सर्वे पूरा करें", description: "एक त्वरित सर्वेक्षण पूरा करें और अंक अर्जित करें।", points: 150, icon: <SurveyIcon className="w-8 h-8 text-cyan-400"/> },
  { id: 2, title: "ऐप इंस्टॉल करें", description: "'SuperApp' इंस्टॉल करें और 5 मिनट तक उपयोग करें।", points: 300, icon: <DownloadIcon className="w-8 h-8 text-green-400" /> },
];

export const Dashboard: React.FC<DashboardProps> = ({ points, setPoints, onWatchAd, onWithdraw, canClaimBonus, onClaimBonus }) => {
  return (
    <div className="space-y-8">
      {/* Main Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <TaskCard
          icon={<VideoIcon className="w-8 h-8 text-red-400" />}
          title="विडियो एड देखें"
          description="30 सेकंड का एड देखें और 10 पॉइंट्स कमाएं"
          buttonText="अभी देखें"
          onClick={onWatchAd}
        />
        <TaskCard
          icon={<GiftIcon className="w-8 h-8 text-yellow-400" />}
          title="डेली बोनस"
          description="रोजाना लॉगिन करने पर 50 पॉइंट्स का बोनस"
          buttonText={canClaimBonus ? "क्लेम करें" : "आज क्लेम किया"}
          onClick={onClaimBonus}
          disabled={!canClaimBonus}
        />
        <TaskCard
          icon={<WalletIcon className="w-8 h-8 text-green-400" />}
          title="पैसे निकालें"
          description="अपने पॉइंट्स को कैश या गिफ्ट कार्ड में बदलें"
          buttonText="विथड्रॉ करें"
          onClick={onWithdraw}
        />
      </div>

      {/* Lucky Spin */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-purple-300">लकी स्पिन</h2>
        <LuckySpin points={points} setPoints={setPoints} />
      </div>

      {/* Offer Wall */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-cyan-300">ऑफरवॉल - ज्यादा कमाई करें</h2>
        <div className="space-y-4">
          {mockOffers.map(offer => (
            <OfferCard key={offer.id} offer={offer} onComplete={(pts) => setPoints(prev => prev + pts)} />
          ))}
        </div>
      </div>
      
      {/* Refer & Earn */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-pink-300">रेफर करें और कमाएं</h2>
        <ReferCard />
      </div>

    </div>
  );
};
