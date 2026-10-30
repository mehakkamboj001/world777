"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

interface HeroCarouselProps {
  onOpenWhatsApp: () => void;
  onOpenSignup: () => void;
  onOpenApkModal: () => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onOpenWhatsApp,
  onOpenSignup,
  onOpenApkModal,
}) => {
  const slides = [
    {
      id: 1,
      badge: "ICC & IPL SPECIAL 2026",
      title: "INDIA'S PREMIER CRICKET & SPORTS EXCHANGE",
      subtitle:
        "Experience ultra-competitive Back & Lay odds on live cricket, football & tennis with 0% exchange commission and instant settlements.",
      ctaPrimary: "Get ID on WhatsApp",
      ctaSecondary: "Free Demo ID",
      bgGradient: "from-blue-950 via-navy-900 to-slate-950",
      accentColor: "border-blue-500/40",
      tagText: "⚡ Live In-Play Odds",
      stat1: "99.8%",
      stat1Label: "Fast Payout Rate",
      stat2: "100k+",
      stat2Label: "Active Bettors",
    },
    {
      id: 2,
      badge: "LIVE CASINO ROYALE",
      title: "TEEN PATTI, ANDAR BAHAR & LIVE ROULETTE",
      subtitle:
        "Stream crystal-clear HD tables with native Hindi-speaking dealers, lightning multipliers up to 500x, and high-stakes VIP rooms.",
      ctaPrimary: "Join Live Tables",
      ctaSecondary: "View Games",
      bgGradient: "from-amber-950 via-navy-900 to-slate-950",
      accentColor: "border-gold-500/40",
      tagText: "🎰 Real Indian Dealers",
      stat1: "500+",
      stat1Label: "Live Casino Tables",
      stat2: "₹1 Cr+",
      stat2Label: "Daily Jackpots",
    },
    {
      id: 3,
      badge: "MEGA WELCOME REWARD",
      title: "GET 200% FIRST DEPOSIT BONUS UP TO ₹25,000",
      subtitle:
        "Double your starting bankroll on your first refill. Instant activation via verified WhatsApp agents with 24x7 priority support.",
      ctaPrimary: "Claim 200% Bonus",
      ctaSecondary: "Download App",
      bgGradient: "from-emerald-950 via-navy-900 to-slate-950",
      accentColor: "border-emerald-500/40",
      tagText: "🎁 Instant Bonus",
      stat1: "2 Min",
      stat1Label: "Deposit & Withdrawal",
      stat2: "₹100",
      stat2Label: "Min Deposit",
    },
    {
      id: 4,
      badge: "GUARANTEED SECURITY",
      title: "100% SAFE, 256-BIT SSL ENCRYPTED & FAST PAYOUTS",
      subtitle:
        "Instant withdrawals directly to your UPI, Google Pay, PhonePe, Paytm, or NetBanking within 90 seconds. Zero hassle, zero hold.",
      ctaPrimary: "Instant Withdrawal ID",
      ctaSecondary: "Chat Support",
      bgGradient: "from-purple-950 via-navy-900 to-slate-950",
      accentColor: "border-purple-500/40",
      tagText: "🔒 Bank-Grade Security",
      stat1: "24/7",
      stat1Label: "Human Support",
      stat2: "100%",
      stat2Label: "RNG Fair Play",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-navy-700/80 shadow-2xl bg-gradient-to-br from-navy-900 to-navy-950 mb-6">
      {/* Background ambient lighting */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-90 transition-all duration-700`}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Content */}
      <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-12 flex flex-col justify-between min-h-[320px] sm:min-h-[360px]">
        <div>
          {/* Top Tag */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider uppercase bg-gold-500/20 text-gold-400 border border-gold-500/30">
              {slide.badge}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-navy-800/80 text-emerald-400 border border-navy-700 flex items-center gap-1">
              {slide.tagText}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            {slide.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {slide.subtitle}
          </p>
        </div>

        {/* Footer info & CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10 pt-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-emerald-900/30 flex items-center space-x-2 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{slide.ctaPrimary}</span>
            </button>
            <button
              onClick={() => {
                if (slide.ctaSecondary === "Download App") {
                  onOpenApkModal();
                } else {
                  onOpenSignup();
                }
              }}
              className="px-4 py-2.5 bg-navy-800/80 hover:bg-navy-700 text-gold-300 font-bold text-xs sm:text-sm rounded-xl border border-gold-500/30 transition-all"
            >
              {slide.ctaSecondary}
            </button>
          </div>

          {/* Live quick stats */}
          <div className="flex items-center space-x-6 text-right">
            <div>
              <p className="text-lg sm:text-xl font-black text-white">{slide.stat1}</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                {slide.stat1Label}
              </p>
            </div>
            <div className="h-8 w-px bg-slate-700" />
            <div>
              <p className="text-lg sm:text-xl font-black gold-gradient-text">
                {slide.stat2}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium">
                {slide.stat2Label}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-navy-950/70 hover:bg-navy-900 text-white flex items-center justify-center border border-white/10 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-navy-950/70 hover:bg-navy-900 text-white flex items-center justify-center border border-white/10 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all ${
              currentSlide === idx ? "w-6 bg-gold-400" : "w-1.5 bg-slate-600"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

