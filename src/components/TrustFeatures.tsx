"use client";

import React from "react";
import { ArrowUpRight, Gamepad2, Radio, Trophy, Tv } from "lucide-react";

const categories = [
  {
    href: "#exchange",
    icon: Trophy,
    title: "Sports exchange",
    description: "Browse match markets by sport and review Back and Lay selections.",
  },
  {
    href: "#fantasy",
    icon: Gamepad2,
    title: "Fantasy Games",
    description: "Explore the example instant-play and fantasy game listings.",
  },
  {
    href: "#casino",
    icon: Tv,
    title: "Live Casino",
    description: "Find the live casino category and browse listed table games.",
  },
  {
    href: "#slots",
    icon: Radio,
    title: "Slots",
    description: "Open the slots section to view the games listed on this page.",
  },
];

export const TrustFeatures: React.FC = () => (
  <nav aria-label="Explore World777 categories" className="my-8">
    <div className="mb-3 flex items-end justify-between gap-3">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
          Explore the platform
        </p>
        <h2 className="mt-1 text-base font-bold text-white sm:text-lg">
          Find your section
        </h2>
      </div>
      <p className="hidden max-w-xs text-right text-[11px] leading-relaxed text-slate-400 sm:block">
        Browse markets and game categories, with availability subject to change.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
      {categories.map(({ href, icon: Icon, title, description }) => (
        <a
          key={href}
          href={href}
          className="group flex min-h-24 items-start gap-3 rounded-xl border border-white/10 bg-obsidian-900/90 p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:bg-obsidian-850 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-900/20 text-emerald-200">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex items-center justify-between gap-1 text-xs font-bold text-white">
              {title}
              <ArrowUpRight
                className="h-3.5 w-3.5 shrink-0 text-slate-500 transition-colors group-hover:text-emerald-300"
                aria-hidden="true"
              />
            </span>
            <span className="mt-1 block text-[10px] leading-relaxed text-slate-400">
              {description}
            </span>
          </span>
        </a>
      ))}
    </div>
  </nav>
);
