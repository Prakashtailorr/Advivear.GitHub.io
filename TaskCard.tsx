
import React from 'react';

interface TaskCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
  disabled?: boolean;
}

export const TaskCard: React.FC<TaskCardProps> = ({ icon, title, description, buttonText, onClick, disabled = false }) => {
  return (
    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 shadow-lg flex flex-col items-start h-full">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300
          ${disabled 
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
            : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-1'}`}
      >
        {buttonText}
      </button>
    </div>
  );
};
