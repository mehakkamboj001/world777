"use client";

import React, { useState } from "react";
import { X, Lock, User, Sparkles, CheckCircle2, MessageCircle } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSignup: () => void;
  onOpenWhatsApp: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  onOpenSignup,
  onOpenWhatsApp,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isOpen) return null;

  const handleFillDemo = () => {
    setUsername("WORLD777_DEMO");
    setPassword("World777@Pass");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) return;
    setIsLoggedIn(true);
    setTimeout(() => {
      setIsLoggedIn(false);
      onClose();
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
              <h3 className="text-base font-extrabold text-white">Member Login</h3>
              <p className="text-[11px] text-slate-400">Access your World777 Sports Exchange</p>
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
          {isLoggedIn ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h4 className="text-lg font-bold text-white">Welcome back, {username}!</h4>
              <p className="text-xs text-slate-300">
                Logged in successfully. Redirecting to Exchange dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Demo ID auto fill banner */}
              <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-xl border border-cyan-500/30 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold text-cyan-300">
                    Want to test first?
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleFillDemo}
                  className="px-2.5 py-1 bg-cyan-500 hover:bg-cyan-400 text-obsidian-950 font-black text-[11px] rounded-lg shadow transition-colors"
                >
                  Fill Demo ID
                </button>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Username / Online ID
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your registered username"
                    className="w-full bg-obsidian-950 text-xs pl-9 pr-3 py-2.5 rounded-xl border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full bg-obsidian-950 text-xs pl-9 pr-3 py-2.5 rounded-xl border border-cyan-500/20 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="rounded bg-obsidian-950 border-cyan-500/20 text-cyan-500 focus:ring-0"
                  />
                  <span>Remember my ID</span>
                </label>
                <button
                  type="button"
                  onClick={onOpenWhatsApp}
                  className="text-cyan-400 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="w-full py-3 brand-btn-primary font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-transform active:scale-95"
              >
                Login to Account
              </button>

              <div className="relative flex items-center justify-center pt-2">
                <div className="border-t border-cyan-500/10 w-full" />
                <span className="bg-obsidian-900 px-3 text-[11px] text-slate-500 uppercase font-semibold absolute">
                  or
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
                <span>Get Instant ID on WhatsApp</span>
              </button>

              <p className="text-center text-xs text-slate-400 pt-1">
                Don&apos;t have an ID yet?{" "}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenSignup();
                  }}
                  className="text-cyan-400 font-bold hover:underline"
                >
                  Sign Up Here
                </button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
