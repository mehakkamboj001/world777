"use client";

import React from "react";
import {
  Activity,
  CircleDot,
  Coins,
  Crown,
  Dice5,
  Dice6,
  Flame,
  Gamepad2,
  Layers,
  PartyPopper,
  Plane,
  Play,
  Sparkles,
  Tv,
  Zap,
} from "lucide-react";
import { fantasyGames, liveCasinoGames, slotGames, GameItem } from "@/data/mockData";

interface GamesSectionProps {
  onOpenLogin: () => void;
  onOpenWhatsApp: () => void;
}

const gameArtwork: Record<GameItem["category"], string[]> = {
  fantasy: [
    "/images/games/gameplay.webp",
    "/images/games/cricket-ground.webp",
    "/images/games/playing-cards.webp",
    "/images/games/playing-cards.webp",
    "/images/games/casino-slots.webp",
    "/images/games/cricket-ground.webp",
    "/images/games/casino-slots.webp",
    "/images/games/playing-cards.webp",
  ],
  casino: [
    "/images/games/casino-slots.webp",
    "/images/games/playing-cards.webp",
    "/images/games/casino-slots.webp",
    "/images/games/gameplay.webp",
    "/images/games/gameplay.webp",
    "/images/games/playing-cards.webp",
  ],
  slots: [
    "/images/games/casino-slots.webp",
    "/images/games/playing-cards.webp",
    "/images/games/casino-slots.webp",
    "/images/games/gameplay.webp",
  ],
};

const gameIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  CircleDot,
  Coins,
  Crown,
  Dice5,
  Dice6,
  Flame,
  Gamepad2,
  Layers,
  PartyPopper,
  Plane,
  Sparkles,
  Zap,
};

interface GameGridProps extends GamesSectionProps {
  games: GameItem[];
}

const GameGrid: React.FC<GameGridProps> = ({
  games,
  onOpenLogin,
  onOpenWhatsApp,
}) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
    {games.map((game, index) => {
      const GameIcon = gameIcons[game.iconType] ?? Gamepad2;
      const artwork = gameArtwork[game.category][index % gameArtwork[game.category].length];

      return (
        <article
          key={game.id}
          className="group relative h-[68px] sm:h-[76px] overflow-hidden rounded-lg border border-white/10 bg-obsidian-900 shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-400/70 hover:shadow-[0_8px_24px_rgba(17,113,82,0.35)] motion-reduce:transform-none"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(7, 12, 14, 0.05), rgba(7, 12, 14, 0.82)), url("${artwork}")`,
            }}
          />
          <div className="absolute inset-0 flex items-end justify-between gap-1 p-2 transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0">
            <div className="min-w-0">
              <h3 className="line-clamp-1 text-[10px] sm:text-[11px] font-black leading-tight text-white drop-shadow-lg">
                {game.title}
              </h3>
              <span className="text-[8px] font-bold uppercase text-white/75">
                {game.category === "casino" ? "Live Casino" : game.category}
              </span>
            </div>
            <GameIcon className="mb-0.5 h-4 w-4 shrink-0 text-white drop-shadow-lg" />
          </div>
          {game.badge && (
            <span className="absolute left-1.5 top-1.5 rounded-sm bg-[#116e52] px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wide text-white shadow">
              {game.badge}
            </span>
          )}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-[#11181a]/90 p-2 opacity-0 backdrop-blur-[2px] transition-all duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="line-clamp-1 text-center text-[10px] font-bold text-white">
              {game.title}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={onOpenWhatsApp}
                className="flex items-center gap-1 rounded bg-[#116e52] px-2 py-1 text-[9px] font-bold text-white transition-colors hover:bg-[#16835f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                <Play className="h-3 w-3 fill-current" />
                Play
              </button>
              <button
                onClick={onOpenLogin}
                className="rounded border border-white/30 bg-white/10 px-2 py-1 text-[9px] font-bold text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                Demo
              </button>
            </div>
          </div>
        </article>
      );
    })}
  </div>
);

export const GamesSection: React.FC<GamesSectionProps> = (props) => {
  const sections = [
    {
      id: "fantasy",
      title: "Fantasy Games",
      icon: Gamepad2,
      games: fantasyGames,
    },
    {
      id: "casino",
      title: "Live Casino",
      icon: Tv,
      games: liveCasinoGames,
    },
    {
      id: "slots",
      title: "Slots",
      icon: Sparkles,
      games: slotGames,
    },
  ];

  return (
    <div className="mb-5 space-y-3">
      {sections.map(({ id, title, icon: Icon, games }) => (
        <section key={id} id={id} className="space-y-2 scroll-mt-20">
          <div className="flex min-h-[30px] items-center gap-2 bg-[#116e52] px-2.5 py-1 text-white shadow-sm">
            <Icon className="h-4 w-4" aria-hidden="true" />
            <h2 className="text-sm font-bold">{title}</h2>
          </div>
          <GameGrid games={games} {...props} />
        </section>
      ))}
    </div>
  );
};
