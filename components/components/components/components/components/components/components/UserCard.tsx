import React from "react";

interface UserCardProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, avatarUrl }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white shadow-md rounded-lg">
      <img
        src={avatarUrl || "/default-avatar.png"}
        alt={name}
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h4 className="text-md font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{email}</p>
      </div>
    </div>
  );
};

export default UserCard;
