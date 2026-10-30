"use client";

import React, { useState } from "react";
import { X, User, MessageCircle, Gift, CheckCircle2 } from "lucide-react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
  onOpenWhatsApp: () => void;
}

export const SignupModal: React.FC<SignupModalProps> = ({
  isOpen,
  onClose,
  onOpenLogin,
  onOpenWhatsApp,
}) => {
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onClose();
      onOpenWhatsApp();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md bg-obsidian-900 rounded-3xl border border-cyan-500/20 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-obsidian-950 to-obsidian-900 p-5 border-b border-cyan-500/15 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold text-sm">
              777
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Create Online ID</h3>
              <p className="text-[11px] text-slate-400">Join World777 Sports Exchange</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-obsidian-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Bonus Promotion Banner */}
        <div className="bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-teal-500/20 px-5 py-3 border-b border-cyan-500/30 flex items-center space-x-3">
          <Gift className="w-6 h-6 text-cyan-400 shrink-0" />
          <div>
            <p className="text-xs font-black text-white">200% First Deposit Match Bonus</p>
            <p className="text-[10px] text-cyan-200">
              Valid on minimum deposit of ₹100. Instant activation!
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {success ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-white">Application Received!</h4>
              <p className="text-xs text-slate-300">
                Opening verified WhatsApp desk to assign your unique Online ID in 90s...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Full Name / Preferred Nickname
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-obsidian-950 text-xs pl-9 pr-3 py-2.5 rounded-xl border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  WhatsApp Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full bg-obsidian-950 text-xs pl-11 pr-3 py-2.5 rounded-xl border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="text-[11px] text-slate-400 leading-tight">
                By continuing, you confirm that you are at least 18 years old and agree to our
                Fair Play & Responsible Gaming policies.
              </div>

              <button
                type="submit"
                className="w-full py-3 brand-btn-primary font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-95"
              >
                Get Online ID & Claim Bonus
              </button>

              <div className="relative flex items-center justify-center pt-2">
                <div className="border-t border-cyan-500/10 w-full" />
                <span className="bg-obsidian-900 px-3 text-[11px] text-slate-500 uppercase font-semibold absolute">
                  or get faster via
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenWhatsApp();
                }}
                className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-xl flex items-center justify-center space-x-2 shadow transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant 1-Click WhatsApp Registration</span>
              </button>

              <p className="text-center text-xs text-slate-400 pt-1">
                Already registered?{" "}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenLogin();
                  }}
                  className="text-cyan-400 font-bold hover:underline"
                >
                  Login Here
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
