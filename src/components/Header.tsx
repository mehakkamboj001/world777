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
  onOpenApkModal,
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
    <header className="sticky top-0 z-40 w-full bg-navy-950/95 backdrop-blur-md border-b border-navy-800 shadow-xl">
      {/* Top micro bar for announcements & trust */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 px-4 py-1 text-xs border-b border-navy-800/60 hidden sm:flex justify-between items-center text-slate-300">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1.5" />
            24x7 Instant UPI Withdrawal (Avg 90s)
          </span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Minimum Deposit: ₹100</span>
          <span className="text-slate-500">|</span>
          <span className="text-gold-400 font-semibold">
            0% Commission on Cricket Exchange
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenSeoModal}
            className="flex items-center space-x-1 px-2 py-0.5 rounded bg-navy-800 hover:bg-navy-700 text-gold-400 text-[11px] font-medium border border-gold-500/30 transition-colors"
            title="SEO Manager & Meta Inspector"
          >
            <Sliders className="w-3 h-3 text-gold-400" />
            <span>SEO Manager</span>
          </button>
          <a
            href={siteSEO.contactTelegram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3">
          <a href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gold-400 via-amber-500 to-amber-700 p-0.5 shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                <span className="text-lg font-black tracking-tighter gold-gradient-text">
                  777
                </span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-navy-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white flex items-center">
                WORLD<span className="gold-gradient-text ml-1">777</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-gold-400/90 font-semibold -mt-1 hidden sm:block">
                Exchange & Live Casino
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Quick Login Form */}
        <div className="hidden lg:flex items-center space-x-2">
          <form
            onSubmit={handleQuickLogin}
            className="flex items-center space-x-2 bg-navy-900/90 p-1 rounded-lg border border-navy-700/80 shadow-inner"
          >
            <input
              type="text"
              placeholder="Username / ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="bg-navy-950 text-xs px-3 py-1.5 rounded border border-navy-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-500 w-32 xl:w-36 transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-navy-950 text-xs px-3 py-1.5 rounded border border-navy-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-500 w-28 xl:w-32 transition-colors"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-navy-950 font-bold text-xs px-4 py-1.5 rounded shadow-md transition-all active:scale-95"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onOpenSignup}
              className="bg-navy-800 hover:bg-navy-700 text-gold-400 font-semibold text-xs px-3 py-1.5 rounded border border-gold-500/40 transition-colors"
            >
              Sign Up
            </button>
          </form>

          {/* Quick Demo ID button */}
          <button
            onClick={onOpenLogin}
            className="text-xs text-slate-400 hover:text-white px-2.5 py-1.5 rounded bg-navy-800/60 hover:bg-navy-800 border border-slate-700/50 transition-colors flex items-center space-x-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Demo ID</span>
          </button>

          {/* WhatsApp Direct */}
          <button
            onClick={onOpenWhatsApp}
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg shadow-md flex items-center space-x-1.5 transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>WhatsApp ID</span>
          </button>
        </div>

        {/* Mobile Action Buttons */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={onOpenLogin}
            className="bg-gradient-to-r from-gold-500 to-amber-600 text-navy-950 font-bold text-xs px-3 py-1.5 rounded shadow"
          >
            Login
          </button>
          <button
            onClick={onOpenWhatsApp}
            className="bg-emerald-600 text-white font-bold text-xs px-2.5 py-1.5 rounded shadow flex items-center space-x-1"
          >
            <span>Get ID</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-300 hover:text-white bg-navy-800 rounded border border-navy-700"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950 border-b border-navy-800 px-4 py-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              className="w-full py-2 bg-navy-800 rounded text-center text-xs font-semibold text-slate-200 border border-navy-700"
            >
              Member Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSignup();
              }}
              className="w-full py-2 bg-gradient-to-r from-gold-500 to-amber-600 text-navy-950 font-bold rounded text-center text-xs"
            >
              Create Account
            </button>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApkModal();
              }}
              className="flex-1 py-2 bg-navy-900 border border-slate-700 text-emerald-400 font-semibold text-xs rounded text-center"
            >
              Download Android APK
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSeoModal();
              }}
              className="py-2 px-3 bg-navy-800 border border-gold-500/30 text-gold-400 text-xs rounded"
            >
              SEO Manage
            </button>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenWhatsApp();
            }}
            className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg text-center flex items-center justify-center space-x-2"
          >
            <span>Instant WhatsApp ID (2 Mins)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </header>
  );
};

