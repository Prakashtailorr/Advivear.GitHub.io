"use client";

import React from "react";
import Dashboard from "@/components/Dashboard";
import ReferCard from "@/components/ReferCard";
import OfferCard from "@/components/OfferCard";
import TaskCard from "@/components/TaskCard";
import UserCard from "@/components/UserCard";
import WalletIcon from "@/components/WalletIcon";
import GiftIcon from "@/components/GiftIcon";
import UsersIcon from "@/components/UsersIcon";
import StarIcon from "@/components/StarIcon";
import VideoIcon from "@/components/VideoIcon";

export default function Home() {
  return (
    <main className="p-6 space-y-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold">🎯 Welcome to Ad Viewer App</h1>
      <Dashboard />
      <ReferCard />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <OfferCard title="Watch Ads" description="Earn coins by watching ads" icon={<VideoIcon />} />
        <OfferCard title="Invite Friends" description="Get bonus for referrals" icon={<UsersIcon />} />
        <OfferCard title="Daily Bonus" description="Login daily to get rewards" icon={<GiftIcon />} />
        <OfferCard title="Rate Us" description="Give 5-star and earn" icon={<StarIcon />} />
        <OfferCard title="Check Wallet" description="Track your earnings" icon={<WalletIcon />} />
      </div>
      <TaskCard title="Watch 3 ads" completed={false} />
      <TaskCard title="Refer 1 friend" completed={true} />
      <UserCard name="Rahul Sharma" email="rahul@example.com" />
    </main>
  );
}
