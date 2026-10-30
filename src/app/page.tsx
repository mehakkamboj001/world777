"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { SubNav } from "@/components/SubNav";
import { HeroCarousel } from "@/components/HeroCarousel";
import { LeftSidebar } from "@/components/LeftSidebar";
import { ExchangeMatches } from "@/components/ExchangeMatches";
import { GamesSection } from "@/components/GamesSection";
import { RightSidebar, SelectedBet } from "@/components/RightSidebar";
import { TrustFeatures } from "@/components/TrustFeatures";
import { SeoArticleSection } from "@/components/SeoArticleSection";
import { Footer } from "@/components/Footer";

// Modals
import { LoginModal } from "@/components/modals/LoginModal";
import { SignupModal } from "@/components/modals/SignupModal";
import { ApkModal } from "@/components/modals/ApkModal";
import { SeoManageModal } from "@/components/modals/SeoManageModal";
import { WhatsAppModal } from "@/components/modals/WhatsAppModal";
import { Match } from "@/data/mockData";
import { siteSEO } from "@/config/seo";

export default function Home() {
  const [selectedSport, setSelectedSport] = useState<string>("all");
  const [activeNavTab, setActiveNavTab] = useState<string>("exchange");
  const [selectedBet, setSelectedBet] = useState<SelectedBet | null>(null);

  // Modals state
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [apkModalOpen, setApkModalOpen] = useState(false);
  const [seoModalOpen, setSeoModalOpen] = useState(false);
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);

  const handleSelectBet = (
    match: Match,
    selection: string,
    type: "BACK" | "LAY",
    odds: number
  ) => {
    setSelectedBet({
      match,
      selection,
      type,
      odds,
    });
  };

  const handleClearBet = () => {
    setSelectedBet(null);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans">
      {/* 1. Header with brand crest, quick login bar, SEO manager trigger */}
      <Header
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenSignup={() => setSignupModalOpen(true)}
        onOpenSeoModal={() => setSeoModalOpen(true)}
        onOpenApkModal={() => setApkModalOpen(true)}
        onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
      />

      {/* 2. SubNav with category switcher, live announcement ticker marquee, APK trigger */}
      <SubNav
        activeTab={activeNavTab}
        setActiveTab={setActiveNavTab}
        onOpenApkModal={() => setApkModalOpen(true)}
      />

      {/* 3. Main 3-Column Content Layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Left Sidebar: Sports Categories & Live badges */}
          <div className="hidden lg:block lg:col-span-3">
            <LeftSidebar
              selectedSport={selectedSport}
              setSelectedSport={setSelectedSport}
              onOpenApkModal={() => setApkModalOpen(true)}
            />
          </div>

          {/* Center Column: Hero Carousel, Match Exchange, Games, SEO Articles */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {/* Hero Banner Carousel */}
            <HeroCarousel
              onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
              onOpenSignup={() => setSignupModalOpen(true)}
              onOpenApkModal={() => setApkModalOpen(true)}
            />

            {/* In-Play Sports Betting Exchange */}
            <ExchangeMatches
              selectedSport={selectedSport}
              onSelectBet={handleSelectBet}
            />

            {/* Fantasy & Instant Games, Live Casino, Slots */}
            <GamesSection
              onOpenLogin={() => setLoginModalOpen(true)}
              onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
            />

            {/* 4-Pillar Trust Feature Badges */}
            <TrustFeatures />

            {/* Full SEO Semantic Article Section with FAQ Accordion */}
            <SeoArticleSection
              onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
              onOpenSignup={() => setSignupModalOpen(true)}
            />
          </div>

          {/* Right Sidebar: Interactive Bet Slip & Live Winners Announcements */}
          <div className="col-span-12 lg:col-span-3 space-y-5">
            <RightSidebar
              selectedBet={selectedBet}
              onClearBet={handleClearBet}
              onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
              onOpenSignup={() => setSignupModalOpen(true)}
            />
          </div>
        </div>
      </main>

      {/* 4. Footer with 24x7 support, compliance seals, legal links & payment logos */}
      <Footer
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenSignup={() => setSignupModalOpen(true)}
        onOpenSeoModal={() => setSeoModalOpen(true)}
        onOpenApkModal={() => setApkModalOpen(true)}
        onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
      />

      {/* Floating Action Button (Direct WhatsApp with 'get new id') */}
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={`https://wa.me/${siteSEO.contactWhatsApp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("get new id")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_35px_rgba(37,211,102,0.65)] transition-all duration-300 hover:scale-110 active:scale-95"
          title="Chat on WhatsApp - Get New ID"
        >
          {/* Animated pulsing wave rings */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-pulse -z-10" />

          {/* Official WhatsApp SVG Vector Icon */}
          <svg
            className="w-8 h-8 sm:w-9 sm:h-9 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.541 1.83.829 2.795.829h.005c3.181 0 5.767-2.587 5.768-5.766 0-3.18-2.586-5.766-5.772-5.766zm3.376 8.21c-.14.394-.712.753-1.026.804-.284.045-.653.078-2.146-.541-1.895-.788-3.109-2.736-3.204-2.862-.095-.126-.772-1.027-.772-1.958 0-.931.488-1.388.662-1.578.174-.19.38-.238.507-.238.127 0 .254.001.365.006.117.006.274-.045.428.326.159.38.542 1.32.589 1.417.048.096.079.208.016.334-.063.127-.095.206-.19.317-.095.111-.2.248-.286.333-.095.095-.195.198-.084.388.111.19.493.813 1.057 1.316.726.647 1.339.847 1.529.942.19.095.302.079.413-.048.111-.127.476-.556.603-.746.127-.19.254-.158.428-.095.175.063 1.111.524 1.302.619.19.095.317.143.365.222.048.079.048.459-.092.853zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.981-1.306C8.422 21.536 10.153 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.63 0-3.14-.492-4.407-1.336l-.316-.21-2.964.777.791-2.89-.23-.367C3.965 14.858 3.5 13.473 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z"/>
          </svg>

          {/* Hover Tooltip Pill */}
          <span className="absolute right-full mr-3 px-3 py-1.5 bg-navy-950/95 text-white text-xs font-bold rounded-xl border border-emerald-500/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Get New ID on WhatsApp
          </span>
        </a>
      </div>

      {/* Interactive Modals */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        onOpenSignup={() => setSignupModalOpen(true)}
        onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
      />

      <SignupModal
        isOpen={signupModalOpen}
        onClose={() => setSignupModalOpen(false)}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenWhatsApp={() => setWhatsAppModalOpen(true)}
      />

      <ApkModal
        isOpen={apkModalOpen}
        onClose={() => setApkModalOpen(false)}
      />

      <SeoManageModal
        isOpen={seoModalOpen}
        onClose={() => setSeoModalOpen(false)}
      />

      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
      />
    </div>
  );
}
