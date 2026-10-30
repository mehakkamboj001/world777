"use client";

import React, { useState } from "react";
import { Clock, Flame } from "lucide-react";
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
    <div className="space-y-4 mb-8" id="exchange">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-obsidian-900/90 p-4 rounded-2xl border border-cyan-500/15 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Flame className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
            <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
              <span>Live Sports Exchange</span>
              <span className="text-[10px] bg-rose-500/20 text-rose-400 border border-rose-500/40 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
                In-Play
              </span>
            </h2>
            <p className="text-xs text-slate-400 font-medium">
              Direct Back & Lay peer-to-peer betting with highest liquidity
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center space-x-1.5 bg-obsidian-950 p-1 rounded-xl border border-cyan-500/20 self-start sm:self-auto">
          <button
            onClick={() => setFilter("ALL")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              filter === "ALL"
                ? "bg-obsidian-850 text-cyan-300 shadow-sm border border-cyan-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            All ({mockMatches.length})
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
            Live Now
          </button>
          <button
            onClick={() => setFilter("UPCOMING")}
            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
              filter === "UPCOMING"
                ? "bg-obsidian-850 text-slate-200 shadow-sm border border-obsidian-700"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Upcoming
          </button>
        </div>
      </div>

      {/* Matches List */}
      <div className="space-y-3">
        {filteredMatches.length === 0 ? (
          <div className="text-center py-10 bg-obsidian-900/50 rounded-2xl border border-cyan-500/15 text-slate-400 text-sm">
            No matches found in this category right now. Select &quot;All Live Markets&quot; above.
          </div>
        ) : (
          filteredMatches.map((match) => (
            <div
              key={match.id}
              className="bg-obsidian-900/90 rounded-2xl border border-cyan-500/15 hover:border-cyan-500/40 p-4 shadow-lg transition-all"
            >
              {/* Match Top Bar */}
              <div className="flex items-center justify-between border-b border-cyan-500/10 pb-2.5 mb-3 text-xs">
                <div className="flex items-center space-x-2">
                  <span className="text-[11px] font-bold text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                    {match.tournament}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 font-medium">{match.marketName}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {match.status === "LIVE" ? (
                    <span className="flex items-center space-x-1 text-emerald-400 font-bold text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>IN-PLAY</span>
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
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                {/* Teams & Score Info */}
                <div className="lg:col-span-6 space-y-2">
                  {/* Team A */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {match.teamA}
                    </span>
                    {match.scoreA && (
                      <span className="text-xs sm:text-sm font-black text-cyan-300 bg-obsidian-950 px-2 py-0.5 rounded-md border border-cyan-500/20">
                        {match.scoreA}
                      </span>
                    )}
                  </div>

                  {/* Team B */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm sm:text-base font-bold text-white tracking-wide">
                      {match.teamB}
                    </span>
                    {match.scoreB && (
                      <span className="text-xs sm:text-sm font-black text-cyan-300 bg-obsidian-950 px-2 py-0.5 rounded-md border border-cyan-500/20">
                        {match.scoreB}
                      </span>
                    )}
                  </div>

                  {/* Status / Overs ticker */}
                  {(match.overs || match.statusText) && (
                    <div className="text-[11px] text-slate-400 flex items-center space-x-2 pt-1 font-medium">
                      {match.overs && (
                        <span className="text-emerald-400 font-semibold">{match.overs}</span>
                      )}
                      {match.overs && match.statusText && <span>•</span>}
                      {match.statusText && <span>{match.statusText}</span>}
                    </div>
                  )}
                </div>

                {/* Back / Lay Betting Odds Buttons */}
                <div className="lg:col-span-6">
                  {/* Column Headers */}
                  <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-black uppercase tracking-wider mb-1">
                    <span className="text-slate-400">Team</span>
                    <span className="text-sky-300 bg-sky-950/60 rounded-md py-0.5 border border-sky-800/40">
                      Back
                    </span>
                    <span className="text-rose-300 bg-rose-950/60 rounded-md py-0.5 border border-rose-800/40">
                      Lay
                    </span>
                    <span className="text-slate-400">Action</span>
                  </div>

                  {/* Team A Odds Row */}
                  <div className="grid grid-cols-4 gap-1.5 items-center mb-1.5">
                    <span className="text-xs font-semibold text-slate-300 truncate">
                      {match.teamA}
                    </span>
                    {/* Back button */}
                    <button
                      onClick={() =>
                        onSelectBet(match, match.teamA, "BACK", match.teamAOdds.back)
                      }
                      className="exchange-back rounded-lg py-1.5 px-2 flex flex-col items-center justify-center shadow transition-all active:scale-95"
                    >
                      <span className="text-xs sm:text-sm leading-tight font-black">
                        {match.teamAOdds.back.toFixed(2)}
                      </span>
                      <span className="text-[9px] opacity-80 leading-none">
                        {match.teamAOdds.backSize}
                      </span>
                    </button>
                    {/* Lay button */}
                    <button
                      onClick={() =>
                        onSelectBet(match, match.teamA, "LAY", match.teamAOdds.lay)
                      }
                      className="exchange-lay rounded-lg py-1.5 px-2 flex flex-col items-center justify-center shadow transition-all active:scale-95"
                    >
                      <span className="text-xs sm:text-sm leading-tight font-black">
                        {match.teamAOdds.lay.toFixed(2)}
                      </span>
                      <span className="text-[9px] opacity-80 leading-none">
                        {match.teamAOdds.laySize}
                      </span>
                    </button>
                    {/* Quick Bet */}
                    <button
                      onClick={() =>
                        onSelectBet(match, match.teamA, "BACK", match.teamAOdds.back)
                      }
                      className="bg-obsidian-950 hover:bg-cyan-500 hover:text-obsidian-950 text-cyan-300 text-[11px] font-bold py-1.5 rounded-lg border border-cyan-500/20 transition-colors"
                    >
                      Slip +
                    </button>
                  </div>

                  {/* Team B Odds Row */}
                  <div className="grid grid-cols-4 gap-1.5 items-center">
                    <span className="text-xs font-semibold text-slate-300 truncate">
                      {match.teamB}
                    </span>
                    {/* Back button */}
                    <button
                      onClick={() =>
                        onSelectBet(match, match.teamB, "BACK", match.teamBOdds.back)
                      }
                      className="exchange-back rounded-lg py-1.5 px-2 flex flex-col items-center justify-center shadow transition-all active:scale-95"
                    >
                      <span className="text-xs sm:text-sm leading-tight font-black">
                        {match.teamBOdds.back.toFixed(2)}
                      </span>
                      <span className="text-[9px] opacity-80 leading-none">
                        {match.teamBOdds.backSize}
                      </span>
                    </button>
                    {/* Lay button */}
                    <button
                      onClick={() =>
                        onSelectBet(match, match.teamB, "LAY", match.teamBOdds.lay)
                      }
                      className="exchange-lay rounded-lg py-1.5 px-2 flex flex-col items-center justify-center shadow transition-all active:scale-95"
                    >
                      <span className="text-xs sm:text-sm leading-tight font-black">
                        {match.teamBOdds.lay.toFixed(2)}
                      </span>
                      <span className="text-[9px] opacity-80 leading-none">
                        {match.teamBOdds.laySize}
                      </span>
                    </button>
                    {/* Quick Bet */}
                    <button
                      onClick={() =>
                        onSelectBet(match, match.teamB, "BACK", match.teamBOdds.back)
                      }
                      className="bg-obsidian-950 hover:bg-cyan-500 hover:text-obsidian-950 text-cyan-300 text-[11px] font-bold py-1.5 rounded-lg border border-cyan-500/20 transition-colors"
                    >
                      Slip +
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
