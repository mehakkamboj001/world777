"use client";

import React from "react";
import {
  Flame,
  Gamepad2,
  Tv,
  Sparkles,
  Volume2,
} from "lucide-react";

interface SubNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenApkModal: () => void;
}

export const SubNav: React.FC<SubNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: "exchange", label: "Exchange", icon: Flame },
    { id: "casino", label: "Live Casino", icon: Tv },
    { id: "slots", label: "Slots", icon: Sparkles },
    { id: "fantasy", label: "Fantasy Games", icon: Gamepad2 },
  ];

  return (
    <div className="w-full bg-[#116e52] border-b border-black/20">
      {/* Category Tabs & APK Button */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex justify-center items-center overflow-x-auto no-scrollbar">
        <div className="flex justify-center space-x-1 sm:space-x-2 py-1.5">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-white/15 text-white shadow-sm font-bold"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-obsidian-950" : "text-cyan-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Ticker / Marquee Banner */}
      <div className="bg-obsidian-950 border-t border-white/10 px-3 py-1 flex items-center text-xs">
      <div className="flex items-center space-x-1 bg-white/10 text-white font-bold px-2 py-0.5 rounded-sm text-[10px] uppercase tracking-wider shrink-0 border border-white/20 mr-3">
          <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Notice</span>
        </div>
        <div className="overflow-hidden relative w-full">
          <div className="inline-block whitespace-nowrap animate-marquee text-slate-300 font-medium text-[12px]">
            ⚡ Welcome to World777 (World 777): Get 200% First Deposit Match Bonus up to ₹25,000! &nbsp;&bull;&nbsp;
            🏏 Live IPL & International T20 Exchange Open: 0% Commission on Back/Lay &nbsp;&bull;&nbsp;
            💸 24x7 Instant Automatic Withdrawals via UPI (Google Pay, PhonePe, Paytm, IMPS) in under 90 seconds &nbsp;&bull;&nbsp;
            🎰 Real Live Casino Hindi Dealers, Teen Patti 20-20, Aviator Crash, Roulette & Baccarat Live Now &nbsp;&bull;&nbsp;
            🛡️ 100% Secure SSL Certified & Fair Play RNG Verified.
          </div>
        </div>
      </div>
    </div>
  );
};
