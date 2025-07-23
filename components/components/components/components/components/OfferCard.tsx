import React from "react";

interface OfferCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const OfferCard: React.FC<OfferCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <div className="text-blue-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default OfferCard;
