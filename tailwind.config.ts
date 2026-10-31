import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        obsidian: {
          950: "#252a30",
          900: "#2b3136",
          850: "#333a40",
          800: "#3d464b",
          700: "#4b565c",
          600: "#5b676d",
        },
        cyber: {
          300: "#b7d3c8",
          400: "#6d9d89",
          500: "#34775b",
          600: "#116e52",
        },
        mint: {
          300: "#c5d7ce",
          400: "#87a997",
          500: "#34775b",
          600: "#116e52",
        },
        exchange: {
          back: "#38bdf8",
          backHover: "#0ea5e9",
          backBg: "#0c283d",
          lay: "#fb7185",
          layHover: "#f43f5e",
          layBg: "#3b111e",
        },
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee-fast": "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
