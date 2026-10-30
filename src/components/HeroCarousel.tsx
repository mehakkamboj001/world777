"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
      badge: "IPL & ICC T20 IN-PLAY EXCHANGE",
      title: "LIVE CRICKET BACK & LAY SPORTS EXCHANGE",
      subtitle:
        "Trade live in-play cricket odds with highest liquidity, 0% commission, and automated 90-second UPI payouts.",
      image:
        "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1600&auto=format&fit=crop",
      ctaPrimary: "Get Cricket ID",
      ctaSecondary: "Free Demo ID",
      tagText: "⚡ Live In-Play Odds",
      stat1: "1.48 vs 2.95",
      stat1Label: "Top Cricket Odds",
      stat2: "90 Sec",
      stat2Label: "Instant UPI Cashout",
      accentBorder: "border-cyan-500/40",
    },
    {
      id: 2,
      badge: "LIVE DEALER CASINO",
      title: "TEEN PATTI, HINDI ROULETTE & BACCARAT",
      subtitle:
        "Stream crystal-clear 4K tables with native Hindi-speaking dealers, lightning multipliers up to 500x, and VIP high-roller suites.",
      image:
        "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1600&auto=format&fit=crop",
      ctaPrimary: "Join Live Casino",
      ctaSecondary: "View Tables",
      tagText: "🎰 Real Indian Dealers",
      stat1: "500+",
      stat1Label: "Live Tables 24/7",
      stat2: "500X",
      stat2Label: "Lightning Multiplier",
      accentBorder: "border-emerald-500/40",
    },
    {
      id: 3,
      badge: "HIGH MULTIPLIER CRASH",
      title: "AVIATOR X, BALL BY BALL & CARD 32",
      subtitle:
        "Experience thrilling instant-result multiplier crash games. Cash out your winnings before the flight takes off!",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop",
      ctaPrimary: "Play Aviator Now",
      ctaSecondary: "Try Demo",
      tagText: "🚀 Up to 1000x Win",
      stat1: "97.0%",
      stat1Label: "Certified RTP",
      stat2: "10,000+",
      stat2Label: "Live Online Players",
      accentBorder: "border-sky-500/40",
    },
    {
      id: 4,
      badge: "EXCLUSIVE SIGNUP BONUS",
      title: "200% FIRST DEPOSIT BONUS UP TO ₹25,000",
      subtitle:
        "Activate your 200% matching refill bonus immediately via 24x7 verified WhatsApp support. Minimum deposit only ₹100.",
      image:
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop",
      ctaPrimary: "Claim 200% Bonus",
      ctaSecondary: "Download App",
      tagText: "🎁 Instant Activation",
      stat1: "₹100",
      stat1Label: "Min Deposit",
      stat2: "24/7",
      stat2Label: "WhatsApp Support",
      accentBorder: "border-cyan-400/40",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
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
    <div className="relative overflow-hidden rounded-2xl border border-cyan-500/20 shadow-2xl bg-obsidian-950 mb-6 group">
      {/* Background Image Carousel Slider with Overlay */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ transition: "opacity 1s ease-in-out, transform 6s ease-out" }}
          >
            {/* Real Banner Image with Next.js Image Optimization */}
            <Image
              src={s.image}
              alt={s.title}
              fill
              priority={idx === 0}
              className="object-cover object-center filter brightness-[0.45]"
            />
          </div>
        ))}

        {/* Ambient Dark Cyan & Slate Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950 via-obsidian-950/85 to-obsidian-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/60" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Slide Content Layer */}
      <div className="relative z-10 px-5 py-7 sm:px-9 sm:py-11 flex flex-col justify-between min-h-[320px] sm:min-h-[370px]">
        <div>
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span
              className={`px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase bg-obsidian-900/90 text-cyan-300 border ${slide.accentBorder} shadow-lg backdrop-blur-md`}
            >
              {slide.badge}
            </span>
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>{slide.tagText}</span>
            </span>
          </div>

          {/* Heading with Cyber Gradient */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white max-w-3xl leading-tight">
            {slide.title}
          </h2>

          {/* Subtitle */}
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-medium">
            {slide.subtitle}
          </p>
        </div>

        {/* CTAs and Real-Time Stats */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-cyan-500/15 pt-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenWhatsApp}
              className="px-5 py-2.5 brand-btn-primary rounded-xl text-xs sm:text-sm font-black flex items-center space-x-2 shadow-lg transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-950" />
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
              className="px-4 py-2.5 bg-obsidian-900/90 hover:bg-obsidian-800 text-cyan-300 font-bold text-xs sm:text-sm rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all backdrop-blur-md"
            >
              {slide.ctaSecondary}
            </button>
          </div>

          {/* Live Quick Stats */}
          <div className="flex items-center space-x-6 text-right">
            <div>
              <p className="text-lg sm:text-xl font-black text-white">{slide.stat1}</p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold">
                {slide.stat1Label}
              </p>
            </div>
            <div className="h-8 w-px bg-cyan-500/20" />
            <div>
              <p className="text-lg sm:text-xl font-black brand-gradient-text">
                {slide.stat2}
              </p>
              <p className="text-[10px] sm:text-xs text-slate-400 font-semibold">
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
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-obsidian-950/80 hover:bg-cyan-500 hover:text-obsidian-950 text-white flex items-center justify-center border border-cyan-500/30 transition-all backdrop-blur-md shadow-lg"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-obsidian-950/80 hover:bg-cyan-500 hover:text-obsidian-950 text-white flex items-center justify-center border border-cyan-500/30 transition-all backdrop-blur-md shadow-lg"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Bottom Thumbnail Bar / Progress Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2 bg-obsidian-950/70 px-3 py-1 rounded-full border border-cyan-500/20 backdrop-blur-md">
        {slides.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? "w-7 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_10px_#22d3ee]"
                : "w-2 bg-slate-600 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
