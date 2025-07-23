import React from "react";

const GiftIcon = () => {
  return (
    <svg
      className="w-6 h-6 text-green-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2v-7"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 8h16v4H4z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8V4m0 0a2 2 0 114 0 2 2 0 11-4 0zm0 0a2 2 0 10-4 0 2 2 0 004 0z"
      />
    </svg>
  );
};

export default GiftIcon;
