"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Trophy,
  CheckCircle,
  HelpCircle,
  Zap,
  ArrowRight,
} from "lucide-react";
import { faqs } from "@/config/seo";

interface SeoArticleSectionProps {
  onOpenWhatsApp: () => void;
  onOpenSignup: () => void;
}

export const SeoArticleSection: React.FC<SeoArticleSectionProps> = ({
  onOpenWhatsApp,
  onOpenSignup,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <article
      id="guide"
      className="bg-navy-900/90 rounded-2xl border border-navy-800 p-6 sm:p-8 shadow-xl space-y-8 my-8 text-slate-300"
    >
      {/* 1. Article Header & Introduction */}
      <header className="border-b border-navy-800 pb-6">
        <div className="flex items-center space-x-2 text-xs font-bold text-gold-400 uppercase tracking-widest mb-2">
          <Trophy className="w-4 h-4 text-gold-400" />
          <span>Official Guide & Information Hub</span>
        </div>
        <h1 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-snug">
          World777 (World 777): India&apos;s Ultimate Online Cricket ID, Sports Exchange & Live Casino Destination
        </h1>
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          Welcome to <strong className="text-white">World777</strong> (also known as <strong className="text-gold-400">World 777 Com</strong>),
          the premier online sports betting exchange and gaming platform tailored for Indian sports enthusiasts.
          Whether you are looking to obtain your official <strong className="text-gold-400">World 777 Online ID</strong>,
          engage in peer-to-peer Back and Lay cricket betting, or enjoy high-stakes live dealer casino games,
          World777 provides high-speed exchange liquidity, guaranteed 90-second instant UPI withdrawals, and certified fair play.
        </p>
      </header>

      {/* 2. Key Takeaways Summary Box */}
      <section className="bg-navy-950 p-5 rounded-xl border border-navy-800">
        <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Key Takeaways & Platform Highlights</span>
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>World777 Sports Exchange:</strong> Enjoy true market odds with peer-to-peer
              Back & Lay liquidity on live IPL, ICC World Cups & international cricket.
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Instant World 777 ID in 2 Minutes:</strong> Connect 24x7 via WhatsApp to receive
              your unique member ID, password, and free demo account.
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Fastest UPI Payouts:</strong> Automated 90-second withdrawals to Google Pay,
              PhonePe, Paytm, and NetBanking with zero commission fees.
            </span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>500+ Casino & Fantasy Games:</strong> Live Teen Patti, Andar Bahar, Hindi
              Roulette, Aviator Crash, and high RTP video slots.
            </span>
          </li>
        </ul>
      </section>

      {/* 3. Getting Your Online Cricket ID */}
      <section className="space-y-3">
        <h2 className="text-base sm:text-xl font-bold text-white">
          World 777 Com: How to Get Your Verified World777 Online ID in 3 Simple Steps
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed">
          Getting started on World777 is effortless and privacy-conscious. Unlike complicated
          platforms with lengthy paperwork, our dedicated 24x7 WhatsApp desk provisions your
          active betting credentials instantly:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
          <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
            <span className="text-gold-400 font-black text-sm">STEP 1</span>
            <h3 className="text-xs font-bold text-white mt-1">Connect on WhatsApp</h3>
            <p className="text-[11px] text-slate-400 mt-1">
              Click &quot;WhatsApp ID&quot; to initiate a secure encrypted chat with our verified World777 support desk.
            </p>
          </div>
          <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
            <span className="text-gold-400 font-black text-sm">STEP 2</span>
            <h3 className="text-xs font-bold text-white mt-1">Select ID & Initial Refill</h3>
            <p className="text-[11px] text-slate-400 mt-1">
              Choose your username and deposit as low as ₹100 via any UPI app or NetBanking to claim your 200% welcome bonus.
            </p>
          </div>
          <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
            <span className="text-gold-400 font-black text-sm">STEP 3</span>
            <h3 className="text-xs font-bold text-white mt-1">Instant World777 Login</h3>
            <p className="text-[11px] text-slate-400 mt-1">
              Receive your credentials in 90 seconds, log in directly on our web or mobile APK, and start placing bets.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Sports Exchange vs Traditional Bookmakers */}
      <section className="space-y-3">
        <h2 className="text-base sm:text-xl font-bold text-white">
          Why World777 Exchange Outperforms Traditional Betting Sites
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed">
          In conventional sportsbooks, players bet against the bookmaker who bakes in high margins
          (often 7% to 12%). World777 operates as a <strong>true sports betting exchange</strong>,
          empowering you to act as both bettor and layer:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-navy-800 rounded-xl overflow-hidden">
            <thead className="bg-navy-950 text-gold-400 uppercase font-black text-[10px]">
              <tr>
                <th className="p-3">Feature</th>
                <th className="p-3">World777 Exchange</th>
                <th className="p-3">Standard Bookmakers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-800/80 bg-navy-900/40 text-slate-300">
              <tr>
                <td className="p-3 font-semibold text-white">Odds Multiplier</td>
                <td className="p-3 text-emerald-400 font-bold">10% - 25% Higher Payouts</td>
                <td className="p-3 text-slate-400">Lower Odds with Bookie Margins</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Back and Lay Betting</td>
                <td className="p-3 text-emerald-400 font-bold">Available on all matches</td>
                <td className="p-3 text-red-400">Back only (No Lay allowed)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Withdrawal Speed</td>
                <td className="p-3 text-emerald-400 font-bold">Average 90 seconds (UPI)</td>
                <td className="p-3 text-slate-400">24 to 72 hours</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-white">Customer Support</td>
                <td className="p-3 text-emerald-400 font-bold">24x7 Direct WhatsApp Desk</td>
                <td className="p-3 text-slate-400">Slow Email / Chatbot tickets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. Live Casino & Fantasy Games */}
      <section className="space-y-3">
        <h2 className="text-base sm:text-xl font-bold text-white">
          A Diverse Array of Casino Games & Indian Table Classics
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed">
          Beyond sports, World 777 hosts the most comprehensive suite of live dealer games
          specifically curated for Indian players. Enjoy real table action with native
          Hindi-speaking croupiers:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 bg-navy-950 rounded-xl border border-navy-800">
            <h3 className="font-bold text-gold-300 mb-1">Live Teen Patti & Andar Bahar</h3>
            <p className="text-slate-400 text-[11px]">
              Fast-paced 20-20 Teen Patti, Muflis, Joker variations, and high-payout Andar Bahar
              with side bets.
            </p>
          </div>
          <div className="p-3.5 bg-navy-950 rounded-xl border border-navy-800">
            <h3 className="font-bold text-gold-300 mb-1">Aviator & Crash Games</h3>
            <p className="text-slate-400 text-[11px]">
              Watch the multiplier soar up to 1000x. Cash out before the flight flies away for exponential profits.
            </p>
          </div>
          <div className="p-3.5 bg-navy-950 rounded-xl border border-navy-800">
            <h3 className="font-bold text-gold-300 mb-1">Lightning Roulette & Baccarat</h3>
            <p className="text-slate-400 text-[11px]">
              Experience adrenaline-pumping lightning numbers with 50x to 500x multipliers on every
              spin.
            </p>
          </div>
          <div className="p-3.5 bg-navy-950 rounded-xl border border-navy-800">
            <h3 className="font-bold text-gold-300 mb-1">Ball by Ball Cricket Fantasy</h3>
            <p className="text-slate-400 text-[11px]">
              Predict individual ball results (dot, four, six, or wicket) during live matches with
              instant cash settlements.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Security, Fair Play & Responsible Gaming */}
      <section className="space-y-3">
        <h2 className="text-base sm:text-xl font-bold text-white">
          Security and Fair Play: World777&apos;s Commitment
        </h2>
        <p className="text-xs sm:text-sm leading-relaxed">
          World777 prioritizes user security and fair play. All financial transactions and user data
          are safeguarded by 256-bit SSL banking-grade encryption protocols. World 777 Com strictly
          enforces an 18+ policy and promotes responsible gaming, giving players peace of mind.
        </p>
      </section>

      {/* 7. Frequently Asked Questions (FAQ) Accordion */}
      <section id="faq" className="space-y-4 pt-4 border-t border-navy-800">
        <div className="flex items-center space-x-2">
          <HelpCircle className="w-5 h-5 text-gold-400" />
          <h2 className="text-base sm:text-xl font-bold text-white">
            Frequently Asked Questions (FAQ)
          </h2>
        </div>
        <p className="text-xs text-slate-400">
          Everything you need to know about getting your World777 Online ID, deposits, withdrawals, and
          exchange rules:
        </p>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-navy-950 rounded-xl border border-navy-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-3.5 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-white hover:text-gold-300 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${
                    openFaq === idx ? "rotate-180 text-gold-400" : ""
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-3.5 pb-3.5 text-xs text-slate-300 leading-relaxed border-t border-navy-850 pt-2.5">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Box */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-gold-600/20 via-navy-950 to-amber-600/20 border border-gold-500/40 text-center space-y-3">
        <h3 className="text-base sm:text-lg font-black text-white">
          Ready to Experience India&apos;s #1 Sports Exchange?
        </h3>
        <p className="text-xs text-slate-300 max-w-xl mx-auto">
          Get your verified World 777 Online ID within 2 minutes via WhatsApp. Enjoy 200% welcome bonus and
          unrestricted instant withdrawals.
        </p>
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={onOpenWhatsApp}
            className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs rounded-xl shadow-lg transition-transform active:scale-95 flex items-center space-x-2"
          >
            <span>Get ID on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onOpenSignup}
            className="px-5 py-2.5 bg-navy-800 hover:bg-navy-700 text-gold-300 font-bold text-xs rounded-xl border border-gold-500/30"
          >
            Create Free Account
          </button>
        </div>
      </div>
    </article>
  );
};
