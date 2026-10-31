"use client";

import React, { useState } from "react";
import {
  PhoneCall,
  Menu,
  X,
  Sparkles,
  Sliders,
  ExternalLink,
} from "lucide-react";
import { siteSEO } from "@/config/seo";

interface HeaderProps {
  onOpenLogin: () => void;
  onOpenSignup: () => void;
  onOpenSeoModal: () => void;
  onOpenApkModal: () => void;
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLogin,
  onOpenSignup,
  onOpenSeoModal,
  onOpenWhatsApp,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleQuickLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenLogin();
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-obsidian-950/95 backdrop-blur-md border-b border-cyan-500/15 shadow-xl">
      {/* Top micro bar for announcements & trust */}
      <div className="hidden">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-emerald-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1.5" />
            24x7 Instant UPI Withdrawal (Avg 90s)
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">Min Deposit: ₹100</span>
          <span className="text-slate-600">|</span>
          <span className="text-cyan-400 font-semibold">
            0% Commission on In-Play Cricket Exchange
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenSeoModal}
            className="flex items-center space-x-1 px-2 py-0.5 rounded-md bg-obsidian-850 hover:bg-obsidian-800 text-cyan-300 text-[11px] font-medium border border-cyan-500/30 transition-colors"
            title="SEO Manager & Meta Inspector"
          >
            <Sliders className="w-3 h-3 text-cyan-400" />
            <span>SEO Manager</span>
          </button>
          <a
            href={siteSEO.contactTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-300 transition-colors"
          >
            Telegram Channel
          </a>
          <button
            onClick={onOpenWhatsApp}
            className="text-emerald-400 hover:text-emerald-300 flex items-center space-x-1 font-medium transition-colors"
          >
            <PhoneCall className="w-3 h-3" />
            <span>24x7 VIP Support</span>
          </button>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-[1440px] mx-auto px-3 sm:px-5 h-14 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center space-x-2.5 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500 p-0.5 shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-obsidian-950 rounded-[10px] flex items-center justify-center">
                <span className="text-lg font-black tracking-tighter brand-gradient-text">
                  777
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-obsidian-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white flex items-center">
                WORLD<span className="brand-gradient-text ml-1">777</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-cyan-400/90 font-bold -mt-1 hidden sm:block">
                Exchange & Live Casino
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Quick Login Form */}
        <div className="hidden lg:flex items-center space-x-2">
          <form
            onSubmit={handleQuickLogin}
            className="flex items-center space-x-2 bg-obsidian-900 p-1 rounded-xl border border-cyan-500/20 shadow-inner"
          >
            <input
              type="text"
              placeholder="Username / ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-obsidian-950 text-xs px-3 py-1.5 rounded-lg border border-obsidian-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 w-32 xl:w-36 transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-obsidian-950 text-xs px-3 py-1.5 rounded-lg border border-obsidian-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-400 w-28 xl:w-32 transition-colors"
            />
            <button
              type="submit"
              className="brand-btn-primary text-xs px-4 py-1.5 rounded-lg shadow-md transition-all active:scale-95"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onOpenSignup}
              className="bg-obsidian-850 hover:bg-obsidian-800 text-cyan-300 font-semibold text-xs px-3 py-1.5 rounded-lg border border-cyan-500/30 transition-colors"
            >
              Sign Up
            </button>
          </form>

          {/* Quick Demo ID button */}
          <button
            onClick={onOpenLogin}
            className="text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-obsidian-900 hover:bg-obsidian-800 border border-cyan-500/20 transition-colors flex items-center space-x-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Demo ID</span>
          </button>

          {/* WhatsApp Direct */}
          <button
            onClick={onOpenWhatsApp}
            className="bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-md flex items-center space-x-1.5 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>WhatsApp ID</span>
          </button>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={onOpenLogin}
            className="brand-btn-primary text-xs px-3 py-1.5 rounded-lg shadow font-bold"
          >
            Login
          </button>
          <button
            onClick={onOpenWhatsApp}
            className="bg-[#25D366] text-white font-bold text-xs px-2.5 py-1.5 rounded-lg shadow flex items-center space-x-1"
          >
            <span>Get ID</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-300 hover:text-white bg-obsidian-900 rounded-lg border border-cyan-500/20"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-obsidian-950 border-b border-cyan-500/20 px-4 py-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2 bg-obsidian-900 rounded-xl text-center text-xs font-semibold text-slate-200 border border-cyan-500/20"
            >
              Member Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignup();
              }}
              className="w-full py-2 brand-btn-primary rounded-xl text-center text-xs font-bold"
            >
              Create Account
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSeoModal();
              }}
              className="py-2 px-3 bg-obsidian-900 border border-cyan-500/30 text-cyan-300 text-xs rounded-xl"
            >
              SEO Manage
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWhatsApp();
            }}
            className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl text-center flex items-center justify-center space-x-2"
          >
            <span>Instant WhatsApp ID (2 Mins)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};
