"use client";

import React, { useState } from "react";
import { Clock } from "lucide-react";
import { Match, mockMatches } from "@/data/mockData";

interface ExchangeMatchesProps {
  selectedSport: string;
  onSelectBet: (
    match: Match,
    selection: string,
    type: "BACK" | "LAY",
    odds: number
  ) => void;
}

export const ExchangeMatches: React.FC<ExchangeMatchesProps> = ({
  selectedSport,
  onSelectBet,
}) => {
  const [filter, setFilter] = useState<"ALL" | "LIVE" | "UPCOMING">("ALL");

  const filteredMatches = mockMatches.filter((match) => {
    if (selectedSport !== "all" && match.sport !== selectedSport) {
      return false;
    }
    if (filter === "LIVE" && match.status !== "LIVE") return false;
    if (filter === "UPCOMING" && match.status !== "UPCOMING") return false;
    return true;
  });

  return (
    <div className="space-y-2 mb-4" id="exchange">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-obsidian-900 px-2 py-1 rounded-sm border border-cyan-500/15 shadow-md">
        <div className="flex items-center space-x-2">
          <div>
            <h2 className="text-sm font-extrabold text-white flex items-center gap-2">
              <span>Sports Exchange</span>
              <span className="text-[9px] bg-amber-500/10 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded-sm font-bold uppercase">
                Example data — not live
              </span>
            </h2>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center space-x-1 bg-obsidian-950 p-0.5 rounded-sm border border-cyan-500/20 self-start sm:self-auto">
          <button
            onClick={() => setFilter("ALL")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              filter === "ALL"
                ? "bg-obsidian-850 text-cyan-300 shadow-sm border border-cyan-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            All examples ({mockMatches.length})
          </button>
          <button
            onClick={() => setFilter("LIVE")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
              filter === "LIVE"
                ? "bg-rose-950/80 text-rose-300 border border-rose-800/50"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping mr-1" />
            Live examples
          </button>
          <button
            onClick={() => setFilter("UPCOMING")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              filter === "UPCOMING"
                ? "bg-obsidian-850 text-slate-200 shadow-sm border border-obsidian-700"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Upcoming examples
          </button>
        </div>
      </div>

      {/* Matches List */}
      <div className="space-y-1">
        {filteredMatches.length === 0 ? (
          <div className="text-center py-10 bg-obsidian-900/50 rounded-2xl border border-cyan-500/15 text-slate-400 text-sm">
            No example matches found in this category. Select &quot;All examples&quot; above.
          </div>
        ) : (
          filteredMatches.map((match) => (
            <div
              key={match.id}
              className="bg-obsidian-900 rounded-sm border border-cyan-500/15 hover:border-cyan-500/40 px-2 py-1 shadow-sm transition-all"
            >
              {/* Match Top Bar */}
              <div className="flex items-center justify-between border-b border-cyan-500/10 pb-1 mb-1.5 text-[10px]">
                <div className="flex items-center space-x-1.5 min-w-0">
                  <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded-sm truncate">
                    {match.tournament}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 font-medium">{match.marketName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {match.status === "LIVE" ? (
                    <span className="flex items-center space-x-1 text-emerald-400 font-bold text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Example in-play status</span>
                    </span>
                  ) : (
                    <span className="flex items-center space-x-1 text-slate-400 text-[11px]">
                      <Clock className="w-3 h-3 text-slate-500" />
                      <span>{match.startTime}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Match Content & Odds Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 items-center">
                <div className="lg:col-span-5 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-white truncate">{match.teamA}</span>
                    {match.scoreA && <span className="text-[10px] font-black text-cyan-300 bg-obsidian-950 px-1.5 py-0.5 rounded-sm">{match.scoreA}</span>}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-bold text-white truncate">{match.teamB}</span>
                    {match.scoreB && <span className="text-[10px] font-black text-cyan-300 bg-obsidian-950 px-1.5 py-0.5 rounded-sm">{match.scoreB}</span>}
                  </div>
                  {(match.overs || match.statusText) && (
                    <div className="text-[9px] text-slate-400 truncate">
                      {match.overs}{match.overs && match.statusText ? " | " : ""}{match.statusText}
                    </div>
                  )}
                </div>
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-2 gap-1 text-center text-[9px] font-black uppercase tracking-wider mb-0.5">
                    <span className="text-sky-300 bg-sky-950/60 rounded-sm py-0.5">Back</span>
                    <span className="text-rose-300 bg-rose-950/60 rounded-sm py-0.5">Lay</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 items-center mb-0.5">
                    <button title={`Available: ${match.teamAOdds.backSize}`} onClick={() => onSelectBet(match, match.teamA, "BACK", match.teamAOdds.back)} className="exchange-back rounded-sm py-0.5 px-1 flex items-center justify-center shadow-sm active:scale-95">
                      <span className="text-xs leading-tight font-black">{match.teamAOdds.back.toFixed(2)}</span>
                    </button>
                    <button title={`Available: ${match.teamAOdds.laySize}`} onClick={() => onSelectBet(match, match.teamA, "LAY", match.teamAOdds.lay)} className="exchange-lay rounded-sm py-0.5 px-1 flex items-center justify-center shadow-sm active:scale-95">
                      <span className="text-xs leading-tight font-black">{match.teamAOdds.lay.toFixed(2)}</span>
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-1 items-center">
                    <button title={`Available: ${match.teamBOdds.backSize}`} onClick={() => onSelectBet(match, match.teamB, "BACK", match.teamBOdds.back)} className="exchange-back rounded-sm py-0.5 px-1 flex items-center justify-center shadow-sm active:scale-95">
                      <span className="text-xs leading-tight font-black">{match.teamBOdds.back.toFixed(2)}</span>
                    </button>
                    <button title={`Available: ${match.teamBOdds.laySize}`} onClick={() => onSelectBet(match, match.teamB, "LAY", match.teamBOdds.lay)} className="exchange-lay rounded-sm py-0.5 px-1 flex items-center justify-center shadow-sm active:scale-95">
                      <span className="text-xs leading-tight font-black">{match.teamBOdds.lay.toFixed(2)}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
