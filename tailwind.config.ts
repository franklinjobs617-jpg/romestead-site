import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0d0d0d",
        "stone-dark": "#1a1a1a",
        "stone-medium": "#2a2a2a",
        "stone-light": "#3a3a3a",
        ash: "#8a8a8a",
        parchment: "#d4c5a9",
        "parchment-light": "#e8dcc8",
        ember: "#e67e22",
        "ember-dark": "#c0631a",
        gold: "#f1c40f",
        blood: "#c0392b",
        forest: "#27ae60",
        spirit: "#3498db",
        shadow: "#8e44ad",
      },
      fontFamily: {
        cinzel: ["Cinzel", "Times New Roman", "serif"],
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        pixel: ["Press Start 2P", "monospace"],
      },
      borderRadius: {
        sm: "2px",
        md: "4px",
      },
      boxShadow: {
        subtle: "rgba(0, 0, 0, 0.3) 0px 2px 4px",
        medium: "rgba(0, 0, 0, 0.4) 0px 4px 8px",
        strong: "rgba(0, 0, 0, 0.5) 0px 8px 16px",
        "glow-ember": "rgba(230, 126, 34, 0.3) 0px 0px 12px",
        "glow-gold": "rgba(241, 196, 15, 0.2) 0px 0px 12px",
      },
    },
  },
  plugins: [],
};

export default config;
