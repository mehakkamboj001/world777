"use client";

import React, { useState } from "react";
import {
  Trophy,
  Trash2,
  CheckCircle2,
  TrendingUp,
  MessageCircle,
  PhoneCall,
  UserPlus,
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
  onOpenSignup: () => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  selectedBet,
  onClearBet,
  onOpenWhatsApp,
  onOpenSignup,
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
    <aside className="w-full space-y-4">
      {/* 1. Interactive Bet Slip */}
      <div className="bg-navy-900 rounded-2xl border border-navy-800 shadow-xl overflow-hidden">
        {/* Bet Slip Header */}
        <div className="bg-gradient-to-r from-navy-850 to-navy-900 p-3.5 border-b border-navy-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-gold-400" />
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Exchange Bet Slip
            </h3>
          </div>
          {selectedBet && (
            <button
              onClick={onClearBet}
              className="text-[11px] text-slate-400 hover:text-red-400 flex items-center space-x-1"
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
                    ? "bg-blue-950/40 border-blue-600/40"
                    : "bg-pink-950/40 border-pink-600/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                      selectedBet.type === "BACK"
                        ? "bg-blue-600 text-white"
                        : "bg-pink-600 text-white"
                    }`}
                  >
                    {selectedBet.type}
                  </span>
                  <span className="text-xs font-extrabold text-gold-400">
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
                    className="text-[10px] text-slate-400 hover:text-gold-400"
                  >
                    Reset
                  </button>
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gold-400 font-bold text-xs">
                    ₹
                  </span>
                  <input
                    type="number"
                    value={stake}
                    onChange={(e) => setStake(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-navy-950 text-xs font-bold pl-7 pr-3 py-2 rounded-lg border border-navy-700 text-white focus:outline-none focus:border-gold-500"
                  />
                </div>
              </div>

              {/* Quick Chip increments */}
              <div className="grid grid-cols-3 gap-1.5">
                {chipValues.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleAddStake(chip)}
                    className="py-1 bg-navy-950 hover:bg-navy-800 text-slate-300 hover:text-gold-300 text-[10px] font-bold rounded border border-navy-800 transition-colors"
                  >
                    +{chip >= 1000 ? `${chip / 1000}k` : chip}
                  </button>
                ))}
              </div>

              {/* Potential payout calculation */}
              <div className="p-2.5 bg-navy-950 rounded-xl border border-navy-800 space-y-1 text-xs">
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
                className="w-full py-2.5 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-navy-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-95"
              >
                Place Bet (₹{stake})
              </button>
            </div>
          ) : (
            <div className="py-6 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-navy-950 border border-navy-800 flex items-center justify-center mx-auto text-slate-500">
                <TrendingUp className="w-5 h-5 text-slate-500" />
              </div>
              <p className="text-xs font-semibold text-slate-300">
                Your Bet Slip is Empty
              </p>
              <p className="text-[11px] text-slate-500 max-w-[200px] mx-auto">
                Click any <span className="text-blue-400 font-bold">Back</span> or{" "}
                <span className="text-pink-400 font-bold">Lay</span> odds to place a bet.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 2. Live Winner Announcement Ticker */}
      <div className="bg-navy-900 rounded-2xl border border-navy-800 shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-navy-850 to-navy-900 p-3 border-b border-navy-800 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Trophy className="w-4 h-4 text-gold-400" />
            <h3 className="text-xs font-black uppercase tracking-wider text-white">
              Live Winner Announcements
            </h3>
          </div>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </div>

        <div className="divide-y divide-navy-800/60 max-h-64 overflow-y-auto no-scrollbar">
          {winners.map((winner) => (
            <div
              key={winner.id}
              className="p-2.5 hover:bg-navy-800/40 transition-colors flex items-center justify-between text-xs"
            >
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-bold text-slate-200">{winner.username}</span>
                  <span className="text-[9px] text-slate-500">• {winner.timeAgo}</span>
                </div>
                <span className="text-[10px] text-slate-400 block truncate max-w-[140px]">
                  {winner.game}
                </span>
              </div>
              <div className="text-right">
                <span className="font-black text-emerald-400 text-xs block">
                  +{winner.amount}
                </span>
                <span className="text-[9px] text-slate-500 uppercase">Won</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Fast WhatsApp & Sign Up Online ID Card */}
      <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-950 via-navy-900 to-navy-950 border border-emerald-500/40 shadow-xl text-center space-y-3">
        <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center mx-auto text-emerald-400">
          <MessageCircle className="w-5 h-5 fill-emerald-400" />
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-wider text-white">
            Get Verified Cricket ID
          </h4>
          <p className="text-[11px] text-slate-300 mt-0.5">
            Instant 24x7 creation via WhatsApp. Minimum deposit ₹100.
          </p>
        </div>
        <div className="space-y-2">
          <button
            onClick={onOpenWhatsApp}
            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center space-x-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Connect on WhatsApp</span>
          </button>
          <button
            onClick={onOpenSignup}
            className="w-full py-2 bg-navy-800 hover:bg-navy-700 text-gold-300 font-bold text-xs rounded-xl border border-gold-500/30 transition-all flex items-center justify-center space-x-1.5"
          >
            <UserPlus className="w-3.5 h-3.5" />
            <span>Create Account Online</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
