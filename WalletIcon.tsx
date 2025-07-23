import React from "react";

const WalletIcon = () => {
  return (
    <svg
      className="w-6 h-6 text-blue-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v4z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 13h2v2h-2z"
      />
    </svg>
  );
};

export default WalletIcon;
