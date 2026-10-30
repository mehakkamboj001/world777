"use client";

import React, { useState } from "react";
import { X, Smartphone, Download, CheckCircle, ShieldCheck, Zap } from "lucide-react";

interface ApkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ApkModal: React.FC<ApkModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);

  if (!isOpen) return null;

  const handleStartDownload = () => {
    setDownloading(true);
    setDownloadProgress(10);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md bg-navy-900 rounded-3xl border border-navy-700 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-950 to-navy-900 p-5 border-b border-navy-800 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-white">Download Android App</h3>
              <p className="text-[11px] text-slate-400">World777 Official APK (v3.8.4)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-center">
          {/* App Specs Card */}
          <div className="p-4 bg-navy-950 rounded-2xl border border-navy-800 text-left space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Version:</span>
              <span className="font-bold text-white">3.8.4 (Latest Build)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">File Size:</span>
              <span className="font-bold text-white">14.2 MB</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">OS Compatibility:</span>
              <span className="font-bold text-emerald-400">Android 7.0+ (All Phones)</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Security Audit:</span>
              <span className="font-bold text-gold-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                No Malware & Virus Free
              </span>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="grid grid-cols-2 gap-2 text-left text-xs">
            <div className="p-2.5 bg-navy-950/60 rounded-xl border border-navy-800 flex items-start space-x-2">
              <Zap className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span className="text-slate-300 text-[11px]">
                0s Latency on In-Play Cricket Odds
              </span>
            </div>
            <div className="p-2.5 bg-navy-950/60 rounded-xl border border-navy-800 flex items-start space-x-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-slate-300 text-[11px]">
                Instant Push Alerts on Matches
              </span>
            </div>
          </div>

          {/* Download Action */}
          {downloading ? (
            <div className="space-y-2 pt-2">
              <div className="w-full bg-navy-950 rounded-full h-3 overflow-hidden border border-navy-700">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>
              <p className="text-xs font-bold text-white">
                {downloadProgress === 100
                  ? "APK Downloaded! Tap to Install."
                  : `Downloading World777 APK... ${downloadProgress}%`}
              </p>
            </div>
          ) : (
            <button
              onClick={handleStartDownload}
              className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center justify-center space-x-2 transition-transform active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Download APK Now (14.2 MB)</span>
            </button>
          )}

          {/* Install Instructions */}
          <div className="text-[11px] text-slate-500 text-left pt-2 space-y-1">
            <p className="font-bold text-slate-400">Easy Installation Instructions:</p>
            <p>1. Tap Download APK above.</p>
            <p>2. In your device Settings, toggle &quot;Allow Unknown Sources&quot; if prompted.</p>
            <p>3. Tap Install and open World777 to bet with ultra-fast speed.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

