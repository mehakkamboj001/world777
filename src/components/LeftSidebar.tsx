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
        return <Trophy className="w-4 h-4 text-cyan-400" />;
      case "Flame":
        return <Flame className="w-4 h-4 text-rose-400" />;
      case "Activity":
        return <Activity className="w-4 h-4 text-emerald-400" />;
      case "Shield":
        return <Shield className="w-4 h-4 text-sky-400" />;
      case "Vote":
        return <Vote className="w-4 h-4 text-purple-400" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-pink-400" />;
      case "Gamepad2":
        return <Gamepad2 className="w-4 h-4 text-teal-400" />;
      case "CircleDot":
        return <CircleDot className="w-4 h-4 text-indigo-400" />;
      case "Dumbbell":
        return <Dumbbell className="w-4 h-4 text-amber-400" />;
      case "Zap":
        return <Zap className="w-4 h-4 text-cyan-300" />;
      default:
        return <Trophy className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredSports = sportsCategories.filter((sport) =>
    sport.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <aside className="w-full bg-obsidian-900 rounded-sm border border-white/5 p-2 shadow-md space-y-2">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between bg-[#116e52] -mx-2 -mt-2 px-2.5 py-2">
        <div className="flex items-center space-x-2">
          <div className="hidden" />
          <h3 className="text-xs font-bold tracking-wide text-white">
            All Sports
          </h3>
        </div>
        <span className="hidden">Exchange Live</span>
      </div>

      {/* Sport Search */}
      <div className="relative hidden">
        <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search Sports / Events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-obsidian-950 text-xs pl-8 pr-3 py-2 rounded-xl border border-cyan-500/20 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      {/* Sports Navigation List */}
      <nav className="space-y-0.5">
        <button
          onClick={() => setSelectedSport("all")}
          className={`hidden w-full flex items-center justify-between px-2 py-1.5 rounded-sm text-xs font-semibold transition-all ${
            selectedSport === "all"
              ? "bg-obsidian-800 text-white border-l-2 border-emerald-500"
              : "text-slate-300 hover:text-white hover:bg-obsidian-850"
          }`}
        >
          <div className="flex items-center space-x-2.5">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span>All Live Markets</span>
          </div>
          <span className="text-[10px] text-slate-400 px-1 font-bold">
            68+
          </span>
        </button>

        {filteredSports.map((sport) => {
          const isSelected = selectedSport === sport.id;
          return (
            <button
              key={sport.id}
              onClick={() => setSelectedSport(sport.id)}
              className={`w-full flex items-center justify-between px-2 py-1.5 rounded-sm text-xs font-medium transition-all ${
                isSelected
                  ? "bg-obsidian-800 text-white font-semibold border-l-2 border-emerald-500"
                  : "text-slate-300 hover:text-white hover:bg-obsidian-850/60"
              }`}
            >
              <div className="flex items-center space-x-2.5">
                {getIcon(sport.iconName)}
                <span className="truncate">{sport.name}</span>
              </div>
              <span className="text-[10px] text-slate-500 px-1 font-bold">{sport.liveCount} examples</span>
            </button>
          );
        })}
      </nav>

      {/* Useful Quick Shortcuts */}
      <div className="hidden">
        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 px-2 mb-1">
          Quick Links
        </p>
        <a
          href="#rules"
          className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-cyan-300 hover:bg-obsidian-850 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
          <span>Exchange Rules & FAQ</span>
        </a>
        <a
          href="#faq"
          className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-cyan-300 hover:bg-obsidian-850 transition-colors"
        >
          <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
          <span>How to Get Online ID</span>
        </a>
      </div>

      <div className="hidden" onClick={onOpenApkModal}>
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase">
            Official App
          </span>
          <Smartphone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
        </div>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Fast In-Play betting with 0s latency & instant notifications.
        </p>
      </div>

      <div className="hidden">
        <div className="flex items-center justify-center space-x-1.5 text-slate-400 text-[11px]">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>100% Verified Exchange</span>
        </div>
      </div>
    </aside>
  );
};
