"use client";

import React, { useState } from "react";
import { X, MessageCircle, Send, ShieldCheck } from "lucide-react";
import { siteSEO } from "@/config/seo";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [selectedIntent, setSelectedIntent] = useState("NEW_ID");

  if (!isOpen) return null;

  const getPresetMessage = () => {
    switch (selectedIntent) {
      case "NEW_ID":
        return "Hello World777 Support, I want to create a new Online Cricket ID with 200% Welcome Bonus.";
      case "DEMO_ID":
        return "Hello World777 Support, please send me a Free Demo ID to test the sports exchange and live casino.";
      case "WITHDRAWAL":
        return "Hello World777 Support, I need help with instant UPI withdrawal.";
      case "DEPOSIT":
        return "Hello World777 Support, please provide the latest verified UPI / QR code for deposit refill.";
      default:
        return "Hello World777 Support, I need assistance.";
    }
  };

  const handleLaunchWhatsApp = () => {
    const encoded = encodeURIComponent(getPresetMessage());
    const cleanNumber = siteSEO.contactWhatsApp.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/${cleanNumber}?text=${encoded}`;
    window.open(waUrl, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md bg-obsidian-900 rounded-3xl border border-emerald-500/40 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 via-obsidian-900 to-obsidian-950 p-5 border-b border-cyan-500/15 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
              <MessageCircle className="w-5 h-5 fill-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">24x7 Verified WhatsApp Desk</h3>
              <p className="text-[11px] text-slate-400">Instant Online ID in under 2 minutes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-2 text-xs text-emerald-400 font-bold bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-800/40">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Agent Status: Online (Avg response: 15 seconds)</span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-2">
              Select Purpose of Contact:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "NEW_ID", label: "Get New ID (+200% Bonus)" },
                { id: "DEMO_ID", label: "Get Free Demo ID" },
                { id: "DEPOSIT", label: "Deposit / Add Funds" },
                { id: "WITHDRAWAL", label: "Instant Cashout" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIntent(item.id)}
                  className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all ${
                    selectedIntent === item.id
                      ? "bg-emerald-600/20 border border-emerald-500 text-emerald-300"
                      : "bg-obsidian-950 border border-cyan-500/15 text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Message Preview */}
          <div className="p-3 bg-obsidian-950 rounded-xl border border-cyan-500/15 space-y-1">
            <span className="text-[10px] uppercase font-black tracking-wider text-slate-500 block">
              Pre-filled Message:
            </span>
            <p className="text-xs text-slate-300 italic">&quot;{getPresetMessage()}&quot;</p>
          </div>

          {/* Launch Button */}
          <button
            onClick={handleLaunchWhatsApp}
            className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-transform active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Open Verified WhatsApp Chat</span>
          </button>

          <div className="flex items-center justify-center space-x-2 text-[11px] text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% Confidential & Secure Chat</span>
          </div>
        </div>
      </div>
    </div>
  );
};
