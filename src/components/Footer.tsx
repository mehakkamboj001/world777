"use client";

import React from "react";
import { Lock, PhoneCall, Send, Sparkles } from "lucide-react";
import { siteSEO } from "@/config/seo";

interface FooterProps {
  onOpenLogin: () => void;
  onOpenSignup: () => void;
  onOpenSeoModal: () => void;
  onOpenApkModal: () => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLogin,
  onOpenSignup,
  onOpenSeoModal,
  onOpenWhatsApp,
}) => {
  return (
    <footer className="w-full bg-obsidian-950 border-t border-cyan-500/15 text-slate-400 text-xs mt-12">
      {/* 1. Support Banner */}
      <div className="bg-gradient-to-r from-obsidian-950 via-obsidian-900 to-obsidian-950 border-b border-cyan-500/10 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-black text-sm">24x7 Customer Care Desk</p>
              <p className="text-[11px] text-slate-400">
                Instant World 777 Online Cricket ID, Deposit & Withdrawal Resolution via WhatsApp & Telegram
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenWhatsApp}
              className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold rounded-xl text-xs flex items-center space-x-1.5 shadow-md transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </button>
            <a
              href={siteSEO.contactTelegram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl text-xs flex items-center space-x-1.5 shadow-md transition-all"
            >
              <span>Telegram Official</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Mission */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-500 p-0.5">
              <div className="w-full h-full bg-obsidian-950 rounded-[9px] flex items-center justify-center font-black text-xs brand-gradient-text">
                777
              </div>
            </div>
            <span className="text-lg font-black text-white tracking-wider">
              WORLD<span className="brand-gradient-text">777</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-medium">
            World777 is India&apos;s most reliable sports exchange and online entertainment portal,
            offering high liquidity Back & Lay betting, live casino tables, and guaranteed 90-second
            UPI withdrawals.
          </p>
          <div className="pt-1 flex items-center space-x-2 text-slate-500 text-[11px]">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            <span>256-Bit SSL Encrypted Gaming</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
            Quick Navigation
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#exchange" className="hover:text-cyan-300 transition-colors">
                Sports Betting Exchange
              </a>
            </li>
            <li>
              <a href="#casino" className="hover:text-cyan-300 transition-colors">
                Live Casino & Roulette
              </a>
            </li>
            <li>
              <button
                onClick={onOpenLogin}
                className="hover:text-cyan-300 transition-colors text-left"
              >
                Member Login
              </button>
            </li>
            <li>
              <button
                onClick={onOpenSignup}
                className="hover:text-cyan-300 transition-colors text-left"
              >
                Create Online ID
              </button>
            </li>
            <li>
              <button
                onClick={onOpenSeoModal}
                className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center space-x-1"
              >
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>SEO Management Center</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Legal & Policies */}
        <div>
          <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
            Policies & Security
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#rules" className="hover:text-cyan-300 transition-colors">
                Exchange Betting Rules
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-cyan-300 transition-colors">
                FAQ & Getting Online ID
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-cyan-300 transition-colors">
                Privacy Policy & KYC
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-cyan-300 transition-colors">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="/sitemap.xml" className="hover:text-cyan-300 transition-colors">
                XML Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* Security & Compliance Badges */}
        <div className="space-y-3">
          <h4 className="text-xs font-black uppercase tracking-wider text-white mb-3">
            Security & Licensing
          </h4>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2.5 rounded-xl bg-obsidian-900 border border-cyan-500/15 text-center">
              <span className="block text-sm font-black text-white">18+ ONLY</span>
              <span className="text-[10px] text-slate-400">Responsible Play</span>
            </div>
            <div className="p-2.5 rounded-xl bg-obsidian-900 border border-cyan-500/15 text-center">
              <span className="block text-sm font-black text-emerald-400">100% SAFE</span>
              <span className="text-[10px] text-slate-400">SSL Certified</span>
            </div>
            <div className="p-2.5 rounded-xl bg-obsidian-900 border border-cyan-500/15 text-center">
              <span className="block text-xs font-bold text-cyan-300">RNG TESTED</span>
              <span className="text-[10px] text-slate-400">Fair Play Shield</span>
            </div>
            <div className="p-2.5 rounded-xl bg-obsidian-900 border border-cyan-500/15 text-center">
              <span className="block text-xs font-bold text-emerald-400">DMCA</span>
              <span className="text-[10px] text-slate-400">Protected Hub</span>
            </div>
          </div>
          <p className="text-[11px] text-slate-500">
            Participation is restricted to individuals aged 18 and older. Play responsibly.
          </p>
        </div>
      </div>

      {/* 3. Supported Payment Gateways */}
      <div className="border-t border-cyan-500/10 py-4 px-4 bg-obsidian-950">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center space-x-2">
            <span className="text-[11px] font-semibold text-slate-400">Instant Payments:</span>
            <div className="flex flex-wrap gap-1.5">
              {["UPI", "Google Pay", "PhonePe", "Paytm", "IMPS NetBanking", "USDT"].map((pm) => (
                <span
                  key={pm}
                  className="px-2 py-0.5 rounded-md bg-obsidian-900 border border-cyan-500/15 text-[10px] font-bold text-slate-300"
                >
                  {pm}
                </span>
              ))}
            </div>
          </div>
          <div className="text-slate-400 text-[11px]">
            © {new Date().getFullYear()} World777. All Rights Reserved. (World 777 Online ID & Sports Exchange)
          </div>
        </div>
      </div>
    </footer>
  );
};
