"use client";

import React, { useState } from "react";
import {
  Trophy,
  Trash2,
  CheckCircle2,
  TrendingUp,
  CircleDot,
  Spade,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";
import { initialWinners, Match } from "@/data/mockData";

export interface SelectedBet {
  match: Match;
  selection: string;
  type: "BACK" | "LAY";
  odds: number;
}

interface RightSidebarProps {
  selectedBet: SelectedBet | null;
  onClearBet: () => void;
  onOpenWhatsApp: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  selectedBet,
  onClearBet,
  onOpenWhatsApp,
}) => {
  const [stake, setStake] = useState<number>(500);
  const [betSuccess, setBetSuccess] = useState<boolean>(false);
  const winners = initialWinners;

  const chipValues = [100, 500, 1000, 2500, 5000, 10000];

  const handleAddStake = (amount: number) => {
    setStake((prev) => prev + amount);
  };

  const calculateReturn = () => {
    if (!selectedBet) return 0;
    if (selectedBet.type === "BACK") {
      return (stake * selectedBet.odds).toFixed(2);
    } else {
      // Lay bet profit is the backer's stake
      return stake.toFixed(2);
    }
  };

  const calculateLiability = () => {
    if (!selectedBet) return 0;
    if (selectedBet.type === "LAY") {
      return (stake * (selectedBet.odds - 1)).toFixed(2);
    }
    return stake.toFixed(2);
  };

  const handlePlaceBet = () => {
    if (stake <= 0) return;
    setBetSuccess(true);

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }

    setTimeout(() => {
      setBetSuccess(false);
      onClearBet();
    }, 3500);
  };

  return (
    <aside className="w-full flex flex-col gap-2">
      {/* 1. Interactive Bet Slip */}
      <div className={selectedBet ? "order-2 bg-obsidian-900 rounded-sm border border-cyan-500/15 shadow-md overflow-hidden" : "hidden"}>
        {/* Bet Slip Header */}
        <div className="bg-gradient-to-r from-obsidian-950 to-obsidian-900 p-3.5 border-b border-cyan-500/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Exchange Bet Slip
            </h3>
          </div>
          {selectedBet && (
            <button
              onClick={onClearBet}
              className="text-[11px] text-slate-400 hover:text-rose-400 flex items-center space-x-1"
            >
              <Trash2 className="w-3 h-3" />
              <span>Clear</span>
            </button>
          )}
        </div>

        {/* Bet Slip Content */}
        <div className="p-3.5 space-y-3">
          {betSuccess ? (
            <div className="p-4 bg-emerald-950/70 rounded-xl border border-emerald-500/40 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
              <p className="text-xs font-bold text-white">Bet Placed Successfully!</p>
              <p className="text-[11px] text-emerald-300">
                Matched on Exchange with 0s latency.
              </p>
            </div>
          ) : selectedBet ? (
            <div className="space-y-3">
              {/* Selected Match Card */}
              <div
                className={`p-3 rounded-xl border ${
                  selectedBet.type === "BACK"
                    ? "bg-sky-950/40 border-sky-500/40"
                    : "bg-rose-950/40 border-rose-500/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                      selectedBet.type === "BACK"
                        ? "bg-sky-500 text-obsidian-950"
                        : "bg-rose-500 text-white"
                    }`}
                  >
                    {selectedBet.type}
                  </span>
                  <span className="text-xs font-extrabold text-cyan-300">
                    Odds: {selectedBet.odds.toFixed(2)}
                  </span>
                </div>
                <p className="text-xs font-bold text-white truncate">
                  {selectedBet.selection}
                </p>
                <p className="text-[10px] text-slate-400 truncate">
                  {selectedBet.match.tournament}
                </p>
              </div>

              {/* Stake input */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Stake Amount (₹)</span>
                  <button
                    onClick={() => setStake(0)}
                    className="text-[10px] text-slate-400 hover:text-cyan-400"
                  >
                    Reset
                  </button>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400 font-bold text-xs">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={stake}
                    onChange={(e) => setStake(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-obsidian-950 text-xs font-bold pl-7 pr-3 py-2 rounded-xl border border-cyan-500/20 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Quick Chip increments */}
              <div className="grid grid-cols-3 gap-1.5">
                {chipValues.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleAddStake(chip)}
                    className="py-1 bg-obsidian-950 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 text-[10px] font-bold rounded-lg border border-cyan-500/15 transition-colors"
                  >
                    +{chip >= 1000 ? `${chip / 1000}k` : chip}
                  </button>
                ))}
              </div>

              {/* Potential payout calculation */}
              <div className="p-2.5 bg-obsidian-950 rounded-xl border border-cyan-500/15 space-y-1 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>
                    {selectedBet.type === "BACK" ? "Potential Return:" : "Profit on Win:"}
                  </span>
                  <span className="font-extrabold text-emerald-400">
                    ₹{calculateReturn()}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>
                    {selectedBet.type === "BACK" ? "Risk / Stake:" : "Liability (Risk):"}
                  </span>
                  <span className="font-bold text-slate-300">
                    ₹{calculateLiability()}
                  </span>
                </div>
              </div>

              {/* Place Bet Action Button */}
              <button
                onClick={handlePlaceBet}
                className="w-full py-2.5 brand-btn-primary font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-95"
              >
                Place Bet (₹{stake})
              </button>
            </div>
          ) : (
            <div className="py-6 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-obsidian-950 border border-cyan-500/15 flex items-center justify-center mx-auto text-slate-500">
                <TrendingUp className="w-5 h-5 text-cyan-500/60" />
              </div>
              <p className="text-xs font-semibold text-slate-300">
                Your Bet Slip is Empty
              </p>
              <p className="text-[11px] text-slate-500 max-w-[200px] mx-auto">
                Click any <span className="text-sky-400 font-bold">Back</span> or{" "}
                <span className="text-rose-400 font-bold">Lay</span> odds to place a bet.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 2. Live Winner Announcement Ticker */}
      <div className="order-1 bg-obsidian-900 rounded-sm border border-white/5 shadow-md overflow-hidden">
        <div className="bg-[#116e52] px-2 py-2 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-cyan-400" />
            <h3 className="text-[11px] font-bold text-white">
              Winner Announcement
            </h3>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>

        <div className="divide-y divide-white/5 max-h-64 overflow-y-auto no-scrollbar">
          {winners.map((winner) => (
            <div
              key={winner.id}
              className="px-2 py-2 hover:bg-obsidian-850/60 transition-colors flex items-start justify-between gap-1 text-[10px]"
            >
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-bold text-slate-200">{winner.username}</span>
                </div>
                <span className="text-[9px] text-slate-500 block truncate max-w-[120px]">
                  {winner.timeAgo}
                </span>
              </div>
              <div className="text-right">
                <span className="font-black text-slate-100 text-[10px] block">
                  {winner.amount}
                </span>
                <span className="text-[9px] text-slate-500 uppercase">Won</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="order-3 bg-obsidian-900 rounded-sm border border-white/5 shadow-md overflow-hidden">
        <div className="bg-[#116e52] px-2 py-2 text-[11px] font-bold text-white">New Launched</div>
        <div className="grid grid-cols-1 gap-1 p-1">
          {[
            ["Roulette", "/images/games/casino-slots.webp", CircleDot],
            ["Teen Patti", "/images/games/playing-cards.webp", Spade],
            ["Race to 2nd", "/images/games/cricket-ground.webp", Zap],
            ["Poker", "/images/games/playing-cards.webp", Spade],
          ].map(([title, image, Icon]) => (
            <button
              key={title as string}
              onClick={onOpenWhatsApp}
              className="group relative h-[78px] w-full overflow-hidden rounded-sm border border-white/10 bg-cover bg-center text-left text-white shadow-sm"
              style={{
                backgroundImage: `linear-gradient(90deg, rgba(7, 12, 14, 0.72), rgba(7, 12, 14, 0.08)), url("${image}")`,
              }}
            >
              <span className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute bottom-2 left-2 flex items-center gap-1 text-xs font-black drop-shadow-lg">
                <Icon className="h-3.5 w-3.5" />
                {title as string}
              </span>
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
};
