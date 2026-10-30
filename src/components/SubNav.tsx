"use client";

import React from "react";
import {
  Flame,
  Gamepad2,
  Tv,
  Trophy,
  Smartphone,
  Sparkles,
  Zap,
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
  onOpenApkModal,
}) => {
  const tabs = [
    { id: "exchange", label: "Exchange", icon: Flame },
    { id: "in-play", label: "In-Play (Live)", icon: Zap, badge: "LIVE" },
    { id: "cricket", label: "Cricket Special", icon: Trophy },
    { id: "casino", label: "Live Casino", icon: Tv },
    { id: "fantasy", label: "Fantasy Games", icon: Gamepad2 },
    { id: "slots", label: "Slots", icon: Sparkles },
  ];

  return (
    <div className="w-full bg-obsidian-900/90 border-b border-cyan-500/15">
      {/* Category Tabs & APK Button */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto no-scrollbar">
        <div className="flex space-x-1 sm:space-x-2 py-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isActive
                    ? "brand-btn-primary shadow-md font-bold"
                    : "text-slate-300 hover:text-cyan-300 hover:bg-obsidian-850"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-obsidian-950" : "text-cyan-400"}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="px-1.5 py-0.2 bg-rose-500 text-white text-[9px] rounded-full font-black animate-pulse">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* APK Download Button */}
        <div className="hidden md:flex items-center pl-4 py-2">
          <button
            onClick={onOpenApkModal}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-xl text-xs font-bold shadow-md transition-all whitespace-nowrap group"
          >
            <Smartphone className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
            <span>Download APK</span>
            <span className="text-[10px] bg-black/30 px-1 rounded text-emerald-200">
              v3.8
            </span>
          </button>
        </div>
      </div>

      {/* Ticker / Marquee Banner */}
      <div className="bg-obsidian-950 border-t border-cyan-500/10 px-3 py-1.5 flex items-center text-xs">
        <div className="flex items-center space-x-1 bg-cyan-500/10 text-cyan-300 font-bold px-2 py-0.5 rounded-md text-[11px] uppercase tracking-wider shrink-0 border border-cyan-500/30 mr-3">
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
