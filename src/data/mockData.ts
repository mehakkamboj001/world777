export interface SportCategory {
  id: string;
  name: string;
  iconName: string;
  liveCount: number;
}

export interface MatchOdds {
  back: number;
  backSize: string;
  lay: number;
  laySize: string;
}

export interface Match {
  id: string;
  sport: "cricket" | "football" | "tennis" | "kabaddi" | "politics";
  tournament: string;
  teamA: string;
  teamB: string;
  status: "LIVE" | "UPCOMING";
  scoreA?: string;
  scoreB?: string;
  overs?: string;
  statusText?: string;
  startTime?: string;
  marketName: string;
  teamAOdds: MatchOdds;
  teamBOdds: MatchOdds;
  drawOdds?: MatchOdds;
}

export interface GameItem {
  id: string;
  title: string;
  category: "fantasy" | "casino" | "slots";
  tag?: string;
  playersCount: string;
  badge?: string;
  bgGradient: string;
  iconType: string;
}

export interface WinnerAnnouncement {
  id: string;
  username: string;
  game: string;
  amount: string;
  timeAgo: string;
}

export const sportsCategories: SportCategory[] = [
  { id: "cricket", name: "Cricket", iconName: "Trophy", liveCount: 8 },
  { id: "football", name: "Football", iconName: "Flame", liveCount: 19 },
  { id: "tennis", name: "Tennis", iconName: "Activity", liveCount: 6 },
  { id: "kabaddi", name: "Kabaddi", iconName: "Shield", liveCount: 2 },
  { id: "politics", name: "Politics & Elections", iconName: "Vote", liveCount: 3 },
  { id: "icehockey", name: "Ice Hockey", iconName: "Sparkles", liveCount: 4 },
  { id: "egames", name: "E-Games / Virtuals", iconName: "Gamepad2", liveCount: 11 },
  { id: "futsal", name: "Futsal", iconName: "CircleDot", liveCount: 3 },
  { id: "handball", name: "Handball", iconName: "Dumbbell", liveCount: 5 },
  { id: "horseracing", name: "Horse Racing", iconName: "Zap", liveCount: 7 },
];

export const mockMatches: Match[] = [
  {
    id: "m-101",
    sport: "cricket",
    tournament: "ICC T20 International Series",
    teamA: "India",
    teamB: "Australia",
    status: "LIVE",
    scoreA: "184/4 (17.3)",
    scoreB: "Yet to Bat",
    overs: "17.3 ov | CRR: 10.51",
    statusText: "India batting | Surya 64*(28)",
    marketName: "Match Odds (Back / Lay)",
    teamAOdds: { back: 1.48, backSize: "450k", lay: 1.50, laySize: "320k" },
    teamBOdds: { back: 2.95, backSize: "180k", lay: 3.05, laySize: "210k" },
  },
  {
    id: "m-102",
    sport: "cricket",
    tournament: "Indian Premier League 2026",
    teamA: "Mumbai Indians",
    teamB: "Chennai Super Kings",
    status: "LIVE",
    scoreA: "198/6 (20.0)",
    scoreB: "142/3 (14.2)",
    overs: "Req RR: 10.05 | Need 57 in 34",
    statusText: "In-Play | High Vol Exchange",
    marketName: "Match Odds (Back / Lay)",
    teamAOdds: { back: 1.82, backSize: "1.2M", lay: 1.86, laySize: "890k" },
    teamBOdds: { back: 2.14, backSize: "950k", lay: 2.18, laySize: "1.1M" },
  },
  {
    id: "m-103",
    sport: "cricket",
    tournament: "Pakistan Super League (PSL)",
    teamA: "Lahore Qalandars",
    teamB: "Karachi Kings",
    status: "UPCOMING",
    startTime: "Today, 07:30 PM",
    marketName: "Match Odds (Back / Lay)",
    teamAOdds: { back: 1.95, backSize: "320k", lay: 1.98, laySize: "290k" },
    teamBOdds: { back: 1.92, backSize: "410k", lay: 1.96, laySize: "380k" },
  },
  {
    id: "m-104",
    sport: "football",
    tournament: "UEFA Champions League",
    teamA: "Real Madrid",
    teamB: "Manchester City",
    status: "LIVE",
    scoreA: "2",
    scoreB: "1",
    overs: "68'",
    statusText: "Second Half | Madrid leading",
    marketName: "1X2 Match Odds",
    teamAOdds: { back: 1.62, backSize: "650k", lay: 1.66, laySize: "510k" },
    teamBOdds: { back: 5.20, backSize: "210k", lay: 5.50, laySize: "180k" },
    drawOdds: { back: 3.40, backSize: "310k", lay: 3.60, laySize: "280k" },
  },
  {
    id: "m-105",
    sport: "tennis",
    tournament: "Wimbledon Men's Championship",
    teamA: "Carlos Alcaraz",
    teamB: "Jannik Sinner",
    status: "LIVE",
    scoreA: "6, 4, 3*",
    scoreB: "4, 6, 2",
    overs: "Set 3 (3-2)",
    statusText: "Deuce game on court 1",
    marketName: "Match Winner",
    teamAOdds: { back: 1.74, backSize: "280k", lay: 1.77, laySize: "240k" },
    teamBOdds: { back: 2.26, backSize: "310k", lay: 2.30, laySize: "260k" },
  },
  {
    id: "m-106",
    sport: "politics",
    tournament: "National General Elections",
    teamA: "Alliance A",
    teamB: "Alliance B",
    status: "LIVE",
    statusText: "Live Seat Count Exchange",
    marketName: "Majority Seats Exchange",
    teamAOdds: { back: 1.35, backSize: "2.5M", lay: 1.38, laySize: "2.1M" },
    teamBOdds: { back: 3.60, backSize: "850k", lay: 3.80, laySize: "920k" },
  },
];

export const fantasyGames: GameItem[] = [
  {
    id: "f-1",
    title: "Aviator Crash X",
    category: "fantasy",
    tag: "High Multiplier",
    playersCount: "4,219 Active",
    badge: "HOT",
    bgGradient: "from-red-600/40 via-red-950 to-navy-900",
    iconType: "Plane",
  },
  {
    id: "f-2",
    title: "Ball By Ball Cricket",
    category: "fantasy",
    tag: "Instant Result",
    playersCount: "2,840 Active",
    badge: "LIVE",
    bgGradient: "from-amber-600/40 via-amber-950 to-navy-900",
    iconType: "Activity",
  },
  {
    id: "f-3",
    title: "Card 32 Judgment",
    category: "fantasy",
    tag: "Fast Action",
    playersCount: "1,520 Active",
    bgGradient: "from-blue-600/40 via-blue-950 to-navy-900",
    iconType: "Layers",
  },
  {
    id: "f-4",
    title: "Teen Patti 20-20",
    category: "fantasy",
    tag: "Desi Classic",
    playersCount: "5,410 Active",
    badge: "TOP",
    bgGradient: "from-emerald-600/40 via-emerald-950 to-navy-900",
    iconType: "Sparkles",
  },
  {
    id: "f-5",
    title: "Lucky 7 High-Low",
    category: "fantasy",
    tag: "Rapid Turn",
    playersCount: "1,980 Active",
    bgGradient: "from-purple-600/40 via-purple-950 to-navy-900",
    iconType: "Dice5",
  },
  {
    id: "f-6",
    title: "Cricket X Turbo",
    category: "fantasy",
    tag: "Crash Odds",
    playersCount: "3,110 Active",
    badge: "NEW",
    bgGradient: "from-orange-600/40 via-orange-950 to-navy-900",
    iconType: "Zap",
  },
  {
    id: "f-7",
    title: "Dragon Tiger 1-Day",
    category: "fantasy",
    tag: "Instant Pay",
    playersCount: "2,230 Active",
    bgGradient: "from-rose-600/40 via-rose-950 to-navy-900",
    iconType: "Flame",
  },
  {
    id: "f-8",
    title: "Andar Bahar 2.0",
    category: "fantasy",
    tag: "Classic Indian",
    playersCount: "3,870 Active",
    badge: "POPULAR",
    bgGradient: "from-cyan-600/40 via-cyan-950 to-navy-900",
    iconType: "Coins",
  },
];

export const liveCasinoGames: GameItem[] = [
  {
    id: "c-1",
    title: "Live Hindi Roulette",
    category: "casino",
    tag: "Hindi Speaking Dealer",
    playersCount: "1,840 Playing",
    badge: "INDIAN",
    bgGradient: "from-amber-600/40 via-slate-900 to-navy-900",
    iconType: "CircleDot",
  },
  {
    id: "c-2",
    title: "Speed Baccarat VIP",
    category: "casino",
    tag: "Real Cards Squeeze",
    playersCount: "920 Playing",
    badge: "VIP",
    bgGradient: "from-blue-600/40 via-slate-900 to-navy-900",
    iconType: "Crown",
  },
  {
    id: "c-3",
    title: "Lightning Roulette 500x",
    category: "casino",
    tag: "Multipliers Up to 500x",
    playersCount: "3,250 Playing",
    badge: "500X",
    bgGradient: "from-yellow-600/40 via-slate-900 to-navy-900",
    iconType: "Zap",
  },
  {
    id: "c-4",
    title: "Live Super Sic Bo",
    category: "casino",
    tag: "Dice Roll Excitement",
    playersCount: "840 Playing",
    bgGradient: "from-purple-600/40 via-slate-900 to-navy-900",
    iconType: "Dice6",
  },
  {
    id: "c-5",
    title: "Crazy Time Live Show",
    category: "casino",
    tag: "Interactive Game Show",
    playersCount: "4,890 Playing",
    badge: "MEGA",
    bgGradient: "from-pink-600/40 via-slate-900 to-navy-900",
    iconType: "PartyPopper",
  },
  {
    id: "c-6",
    title: "One Blackjack Azure",
    category: "casino",
    tag: "Unlimited Seats",
    playersCount: "1,120 Playing",
    bgGradient: "from-indigo-600/40 via-slate-900 to-navy-900",
    iconType: "Layers",
  },
];

export const slotGames: GameItem[] = [
  {
    id: "s-1",
    title: "Gates of Olympus 1000",
    category: "slots",
    tag: "Pragmatic Play",
    playersCount: "3,400 Playing",
    badge: "JACKPOT",
    bgGradient: "from-blue-600/30 via-slate-900 to-navy-900",
    iconType: "Zap",
  },
  {
    id: "s-2",
    title: "Sweet Bonanza Xmas",
    category: "slots",
    tag: "Tumble Win 21,100x",
    playersCount: "2,980 Playing",
    badge: "POPULAR",
    bgGradient: "from-pink-600/30 via-slate-900 to-navy-900",
    iconType: "Sparkles",
  },
  {
    id: "s-3",
    title: "Wolf Gold Mega Jackpots",
    category: "slots",
    tag: "Money Respin",
    playersCount: "1,750 Playing",
    bgGradient: "from-amber-600/30 via-slate-900 to-navy-900",
    iconType: "Flame",
  },
  {
    id: "s-4",
    title: "Sugar Rush 1000",
    category: "slots",
    tag: "Multiplier Grid",
    playersCount: "2,190 Playing",
    badge: "NEW",
    bgGradient: "from-rose-600/30 via-slate-900 to-navy-900",
    iconType: "Coins",
  },
];

export const initialWinners: WinnerAnnouncement[] = [
  { id: "w-1", username: "Roh***92", game: "Teen Patti 20-20", amount: "₹84,500", timeAgo: "1m ago" },
  { id: "w-2", username: "Vik***77", game: "Ind vs Aus T20", amount: "₹1,42,000", timeAgo: "3m ago" },
  { id: "w-3", username: "Raj***01", game: "Aviator Crash X", amount: "₹59,200", timeAgo: "5m ago" },
  { id: "w-4", username: "Ami***88", game: "Lightning Roulette", amount: "₹2,10,000", timeAgo: "8m ago" },
  { id: "w-5", username: "Sun***12", game: "Card 32 Judgment", amount: "₹45,000", timeAgo: "11m ago" },
  { id: "w-6", username: "Kul***55", game: "Ball By Ball Cricket", amount: "₹96,400", timeAgo: "14m ago" },
  { id: "w-7", username: "Har***33", game: "Gates of Olympus", amount: "₹1,78,000", timeAgo: "18m ago" },
];

