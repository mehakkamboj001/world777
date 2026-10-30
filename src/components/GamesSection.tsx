"use client";

import React, { useState } from "react";
import {
  Gamepad2,
  Tv,
  Sparkles,
  Users,
  Play,
  Zap,
} from "lucide-react";
import { fantasyGames, liveCasinoGames, slotGames, GameItem } from "@/data/mockData";

interface GamesSectionProps {
  onOpenLogin: () => void;
  onOpenWhatsApp: () => void;
}

export const GamesSection: React.FC<GamesSectionProps> = ({
  onOpenLogin,
  onOpenWhatsApp,
}) => {
  const [activeTab, setActiveTab] = useState<"fantasy" | "casino" | "slots">("fantasy");

  const getGamesList = (): GameItem[] => {
    if (activeTab === "fantasy") return fantasyGames;
    if (activeTab === "casino") return liveCasinoGames;
    return slotGames;
  };

  const getTabTitle = () => {
    if (activeTab === "fantasy") return "Fantasy & Instant Multiplier Games";
    if (activeTab === "casino") return "Live Casino & Real Dealer Tables";
    return "Jackpot Slots & Megaways";
  };

  const games = getGamesList();

  return (
    <div className="space-y-6 mb-10" id="casino">
      {/* Category selector & header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-obsidian-900/90 p-4 rounded-2xl border border-cyan-500/15 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            {activeTab === "fantasy" ? (
              <Gamepad2 className="w-5 h-5 text-cyan-400" />
            ) : activeTab === "casino" ? (
              <Tv className="w-5 h-5 text-emerald-400" />
            ) : (
              <Sparkles className="w-5 h-5 text-pink-400" />
            )}
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-white">{getTabTitle()}</h2>
            <p className="text-xs text-slate-400">
              Live streamed 24x7 with fair play RNG and instant auto settlements
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center space-x-2 bg-obsidian-950 p-1 rounded-xl border border-cyan-500/20">
          <button
            onClick={() => setActiveTab("fantasy")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "fantasy"
                ? "brand-btn-primary shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Fantasy (8)
          </button>
          <button
            onClick={() => setActiveTab("casino")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "casino"
                ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-obsidian-950 shadow-md font-extrabold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Live Casino (6)
          </button>
          <button
            onClick={() => setActiveTab("slots")}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "slots"
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md font-extrabold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Slots (4)
          </button>
        </div>
      </div>

      {/* Games Card Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="group relative bg-obsidian-900 rounded-2xl border border-cyan-500/15 hover:border-cyan-400/60 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/10"
          >
            {/* Card Background Gradient Artwork */}
            <div
              className={`h-36 sm:h-40 bg-gradient-to-br ${game.bgGradient} p-4 flex flex-col justify-between relative overflow-hidden`}
            >
              {/* Top Row: Badge & Players */}
              <div className="flex items-center justify-between z-10">
                {game.badge ? (
                  <span className="text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-full bg-cyan-400 text-obsidian-950 shadow">
                    {game.badge}
                  </span>
                ) : (
                  <span />
                )}
                <span className="text-[10px] bg-obsidian-950/85 backdrop-blur-md text-emerald-400 font-semibold px-2 py-0.5 rounded-full border border-cyan-500/20 flex items-center gap-1">
                  <Users className="w-2.5 h-2.5" />
                  {game.playersCount}
                </span>
              </div>

              {/* Center Game Graphic Element */}
              <div className="flex items-center justify-center py-2">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-cyan-500/20 transition-transform">
                  <Zap className="w-7 h-7 text-cyan-300 animate-pulse" />
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="z-10">
                <span className="text-[11px] font-medium text-slate-300 bg-obsidian-950/70 px-2 py-0.5 rounded-md border border-white/10">
                  {game.tag}
                </span>
              </div>

              {/* Hover overlay with Action Buttons */}
              <div className="absolute inset-0 bg-obsidian-950/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3 z-20">
                <button
                  onClick={onOpenWhatsApp}
                  className="w-full py-2 brand-btn-primary font-black text-xs rounded-xl shadow flex items-center justify-center space-x-1 transition-transform active:scale-95"
                >
                  <Play className="w-3.5 h-3.5 fill-obsidian-950" />
                  <span>Play Real Cash</span>
                </button>
                <button
                  onClick={onOpenLogin}
                  className="w-full py-1.5 bg-obsidian-850 hover:bg-obsidian-800 text-cyan-300 text-xs font-bold rounded-xl border border-cyan-500/30 transition-colors"
                >
                  Play Free Demo
                </button>
              </div>
            </div>

            {/* Card Footer Info */}
            <div className="p-3 bg-obsidian-950/90 border-t border-cyan-500/10 flex items-center justify-between">
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                {game.title}
              </h3>
              <span className="text-[10px] text-slate-400 font-semibold uppercase">
                {game.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
