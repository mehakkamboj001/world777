"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";

export const HeroCarousel: React.FC = () => {
  const slides = [
    {
      id: 1,
      badge: "SPORTS EXCHANGE",
      title: "Explore sports exchange markets",
      subtitle:
        "Browse sports categories and learn how Back and Lay selections work.",
      image: "/images/games/cricket-ground.webp",
      imageAlt: "Illustration of a cricket ground",
      ctaPrimary: "Browse sports",
      href: "#exchange",
      stat1: "Back",
      stat1Label: "Select an outcome",
      stat2: "Lay",
      stat2Label: "Select against an outcome",
      accentBorder: "border-cyan-500/40",
    },
    {
      id: 2,
      badge: "LIVE CASINO",
      title: "Browse the Live Casino section",
      subtitle:
        "Explore the casino category and review the rules for each listed game.",
      image: "/images/games/casino-slots.webp",
      imageAlt: "Illustration of casino games",
      ctaPrimary: "View Live Casino",
      href: "#casino",
      stat1: "Casino",
      stat1Label: "Game category",
      stat2: "18+",
      stat2Label: "Adults only",
      accentBorder: "border-emerald-500/40",
    },
    {
      id: 3,
      badge: "FANTASY GAMES",
      title: "Discover Fantasy Games",
      subtitle:
        "Browse example game titles and check availability and rules before playing.",
      image: "/images/games/gameplay.webp",
      imageAlt: "Illustration of instant-play game artwork",
      ctaPrimary: "Browse games",
      href: "#fantasy",
      stat1: "Titles",
      stat1Label: "Example listings",
      stat2: "Rules",
      stat2Label: "Check before playing",
      accentBorder: "border-sky-500/40",
    },
    {
      id: 4,
      badge: "SLOTS",
      title: "Explore the slots section",
      subtitle:
        "Find the slots category on the homepage; game availability may vary.",
      image: "/images/games/playing-cards.webp",
      imageAlt: "Illustration of playing cards",
      ctaPrimary: "View slots",
      href: "#slots",
      stat1: "Slots",
      stat1Label: "Game category",
      stat2: "18+",
      stat2Label: "Adults only",
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
    <div className="relative overflow-hidden rounded-sm border border-emerald-500/25 shadow-xl bg-obsidian-950 mb-3 group">
      {/* Background Image Carousel Slider with Overlay */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-200 scale-105" : "opacity-0 scale-100"
            }`}
            style={{ transition: "opacity 1s ease-in-out, transform 6s ease-out" }}
          >
            {/* Real Banner Image with Next.js Image Optimization */}
            <Image
              src={s.image}
              alt={idx === currentSlide ? s.imageAlt : ""}
              fill
              priority={idx === 0}
              className="object-cover object-center filter brightness-[0.55]"
            />
          </div>
        ))}
      </div>

      {/* Slide Content Layer */}
      <div className="relative z-10 px-5 pb-10 pt-5 sm:px-8 sm:pb-10 sm:pt-6 flex flex-col justify-between min-h-[220px]">
        <div>
          <h1 className="mb-2 max-w-3xl text-xl font-black leading-tight tracking-tight text-white drop-shadow-lg sm:text-3xl">
            World777 sports exchange, Fantasy Games, Live Casino and slots
          </h1>
          <h2 className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-white max-w-3xl leading-tight drop-shadow-lg">
            {slide.title}
          </h2>
          <p className="mt-1 max-w-2xl text-xs leading-relaxed text-white/85 sm:text-sm">
            {slide.subtitle}
          </p>
        </div>

        {/* Section links and category details */}
        <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <a
              href={slide.href}
              className="px-5 py-2.5 brand-btn-primary rounded-xl text-xs sm:text-sm font-black flex items-center space-x-2 shadow-lg transition-transform active:scale-95"
            >
              <ArrowDown className="w-4 h-4" aria-hidden="true" />
              <span>{slide.ctaPrimary}</span>
            </a>
          </div>

          {/* Live Quick Stats */}
          <div className="hidden sm:flex items-center space-x-5 text-right">
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
