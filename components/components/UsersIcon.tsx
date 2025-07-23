import React from "react";

const UsersIcon = () => {
  return (
    <svg
      className="w-6 h-6 text-purple-500"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87"
      />
      <circle cx="9" cy="7" r="4" />
      <circle cx="17" cy="7" r="4" />
    </svg>
  );
};

export default UsersIcon;
