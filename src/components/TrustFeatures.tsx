"use client";

import React from "react";
import { ShieldCheck, Zap, PhoneCall, Award } from "lucide-react";

export const TrustFeatures: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant 90-Sec Payouts",
      desc: "Fast auto-withdrawals directly via UPI, Google Pay, PhonePe, and IMPS Bank Transfer.",
      badge: "LIGHTNING FAST",
      color: "text-amber-400",
    },
    {
      icon: ShieldCheck,
      title: "Bank-Grade 256-Bit SSL",
      desc: "End-to-end encrypted transactions and strict zero-logging data privacy protocols.",
      badge: "100% SAFE",
      color: "text-emerald-400",
    },
    {
      icon: PhoneCall,
      title: "24/7 Human WhatsApp Support",
      desc: "Dedicated VIP relationship managers available round-the-clock for assistance.",
      badge: "VERIFIED DESK",
      color: "text-blue-400",
    },
    {
      icon: Award,
      title: "Certified Fair Play RNG",
      desc: "Globally verified random number generator ensuring transparent, unmanipulated outcomes.",
      badge: "AUDITED",
      color: "text-purple-400",
    },
  ];

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={idx}
              className="bg-navy-900/90 rounded-2xl border border-navy-800 p-5 shadow-lg relative overflow-hidden group hover:border-gold-500/40 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2.5 rounded-xl bg-navy-950 border border-navy-800 ${feat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-black tracking-wider uppercase px-2 py-0.5 rounded bg-navy-950 text-slate-400 border border-navy-800">
                  {feat.badge}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

