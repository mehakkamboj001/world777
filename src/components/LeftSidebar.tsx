"use client";

import React, { useState } from "react";
import {
  Trophy,
  Flame,
  Activity,
  Shield,
  Vote,
  Sparkles,
  Gamepad2,
  CircleDot,
  Dumbbell,
  Zap,
  Search,
  BookOpen,
  HelpCircle,
  Smartphone,
  CheckCircle,
} from "lucide-react";
import { sportsCategories } from "@/data/mockData";

interface LeftSidebarProps {
  selectedSport: string;
  setSelectedSport: (sport: string) => void;
  onOpenApkModal: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  selectedSport,
  setSelectedSport,
  onOpenApkModal,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const getIcon = (name: string) => {
    switch (name) {
      case "Trophy":
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case "Flame":
        return <Flame className="w-4 h-4 text-orange-400" />;
      case "Activity":
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case "Shield":
        return <Shield className="w-4 h-4 text-blue-400" />;
      case "Vote":
        return <Vote className="w-4 h-4 text-purple-400" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-pink-400" />;
      case "Gamepad2":
        return <Gamepad2 className="w-4 h-4 text-cyan-400" />;
      case "CircleDot":
        return <CircleDot className="w-4 h-4 text-indigo-400" />;
      case "Dumbbell":
        return <Dumbbell className="w-4 h-4 text-rose-400" />;
      case "Zap":
        return <Zap className="w-4 h-4 text-yellow-400" />;
      default:
        return <Trophy className="w-4 h-4 text-amber-400" />;
    }
  };

  const filteredSports = sportsCategories.filter((sport) =>
    sport.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-full bg-navy-900/80 rounded-2xl border border-navy-800 p-3 sm:p-4 shadow-xl space-y-4">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between border-b border-navy-800 pb-3">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <h3 className="text-sm font-extrabold tracking-wide text-white uppercase">
            All Sports
          </h3>
        </div>
        <span className="text-[11px] font-semibold text-slate-400 bg-navy-950 px-2 py-0.5 rounded border border-navy-800">
          Exchange Live
        </span>
      </div>

      {/* Sport Search */}
      <div className="relative">
        <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search Sports / Events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-navy-950 text-xs pl-8 pr-3 py-2 rounded-lg border border-navy-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-500 transition-colors"
        />
      </div>

      {/* Sports Navigation List */}
      <nav className="space-y-1">
        <button
          onClick={() => setSelectedSport("all")}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
            selectedSport === "all"
              ? "bg-gradient-to-r from-gold-500/20 to-amber-500/10 text-gold-300 border border-gold-500/30"
              : "text-slate-300 hover:text-white hover:bg-navy-800/60"
          }`}
        >
          <div className="flex items-center space-x-2.5">
            <Zap className="w-4 h-4 text-gold-400" />
            <span>All Live Markets</span>
          </div>
          <span className="text-[10px] bg-navy-950 text-gold-400 px-1.5 py-0.5 rounded font-bold border border-navy-800">
            68+
          </span>
        </button>

        {filteredSports.map((sport) => {
          const isSelected = selectedSport === sport.id;
          return (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                isSelected
                  ? "bg-navy-800 text-white font-semibold border-l-4 border-gold-400 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-navy-800/50"
              }`}
            >
              <div className="flex items-center space-x-2.5">
                {getIcon(sport.iconName)}
                <span>{sport.name}</span>
              </div>
              <span className="text-[10px] bg-navy-950 text-emerald-400 px-1.5 py-0.5 rounded font-bold border border-navy-800">
                {sport.liveCount} Live
              </span>
            </button>
          );
        })}
      </nav>

      {/* Useful Quick Shortcuts */}
      <div className="border-t border-navy-800 pt-3 space-y-1">
        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 px-2 mb-1">
          Quick Links
        </p>
        <a
          href="#rules"
          className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-gold-300 hover:bg-navy-800/40 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
          <span>Exchange Rules & FAQ</span>
        </a>
        <a
          href="#faq"
          className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-gold-300 hover:bg-navy-800/40 transition-colors"
        >
          <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
          <span>How to Get Online ID</span>
        </a>
      </div>

      {/* APK Banner */}
      <div
        onClick={onOpenApkModal}
        className="cursor-pointer p-3 rounded-xl bg-gradient-to-br from-emerald-950 to-navy-950 border border-emerald-500/30 hover:border-emerald-500/50 transition-all text-left group"
      >
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase">
            Official App
          </span>
          <Smartphone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        </div>
        <p className="text-xs font-bold text-white">Download Android APK</p>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Fast In-Play betting with 0s latency & instant notifications.
        </p>
      </div>

      {/* Certified Badge */}
      <div className="p-2.5 rounded-xl bg-navy-950 border border-navy-800/80 text-center">
        <div className="flex items-center justify-center space-x-1.5 text-slate-400 text-[11px]">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>100% Verified Exchange</span>
        </div>
      </div>
    </aside>
  );
};

