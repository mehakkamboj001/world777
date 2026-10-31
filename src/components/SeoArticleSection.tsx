"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
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

  return (
    <article
      id="guide"
      className="my-8 space-y-6 rounded-2xl border border-cyan-500/15 bg-obsidian-900/90 p-6 text-slate-300 shadow-xl sm:p-8"
    >
      <header className="space-y-3 border-b border-cyan-500/10 pb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Platform guide
        </p>
        <h1 className="text-xl font-black leading-snug tracking-tight text-white sm:text-3xl">
          World777: Sports Exchange, Fantasy Games and Live Casino
        </h1>
        <p className="text-xs font-medium leading-relaxed text-slate-300 sm:text-sm">
          Explore the sports markets and game categories listed on World777.
          The page brings its exchange interface, Fantasy Games, Live Casino and
          slots together in one place. Game and market availability may change;
          check the current information and rules before participating.
        </p>
      </header>

      <section aria-labelledby="sports-exchange-guide">
        <h2
          id="sports-exchange-guide"
          className="mb-2 text-base font-bold text-white sm:text-xl"
        >
          Sports exchange markets
        </h2>
        <p className="text-xs leading-relaxed sm:text-sm">
          The exchange area groups events by sport and displays example match
          rows with Back and Lay selections. Back means choosing an outcome to
          happen; Lay means choosing an outcome not to happen. The match data on
          this page is illustrative and is not a live odds or score feed.
        </p>
      </section>

      <section aria-labelledby="game-categories-guide">
        <h2
          id="game-categories-guide"
          className="mb-2 text-base font-bold text-white sm:text-xl"
        >
          Fantasy Games, Live Casino and slots
        </h2>
        <p className="text-xs leading-relaxed sm:text-sm">
          Browse the separate Fantasy Games, Live Casino and Slots sections to
          see example titles and available categories. Listings can change over
          time. Read the applicable game rules and terms before you play.
        </p>
      </section>

      <section aria-labelledby="responsible-play">
        <h2
          id="responsible-play"
          className="mb-2 text-base font-bold text-white sm:text-xl"
        >
          Check local rules and play responsibly
        </h2>
        <p className="text-xs leading-relaxed sm:text-sm">
          This site is intended for adults aged 18 and over. Laws vary by
          location, so check the rules that apply where you live and do not
          participate if restricted. Gaming involves risk; outcomes are not
          guaranteed.
        </p>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="space-y-3 border-t border-cyan-500/10 pt-5"
      >
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-cyan-400" aria-hidden="true" />
          <h2 id="faq-heading" className="text-base font-bold text-white sm:text-xl">
            Frequently asked questions
          </h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-cyan-500/15 bg-obsidian-950"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-3 p-3.5 text-left text-xs font-bold text-white transition-colors hover:text-cyan-300 sm:text-sm"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <p
                    id={answerId}
                    className="border-t border-cyan-500/10 px-3.5 pb-3.5 pt-2.5 text-xs leading-relaxed text-slate-300"
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-cyan-500/20 bg-obsidian-950 p-5 text-center">
        <h2 className="text-base font-bold text-white sm:text-lg">
          Need more information?
        </h2>
        <p className="mx-auto max-w-xl text-xs leading-relaxed text-slate-300">
          Review the information and terms available on the platform before
          creating an account or taking part.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onOpenWhatsApp}
            className="brand-btn-primary rounded-xl px-5 py-2.5 text-xs font-bold"
          >
            Contact support
          </button>
          <button
            type="button"
            onClick={onOpenSignup}
            className="rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-xs font-bold text-white transition-colors hover:bg-white/10"
          >
            Sign up
          </button>
        </div>
      </section>
    </article>
  );
};
