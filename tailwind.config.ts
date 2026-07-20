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
        // Paper backgrounds
        paper: "#f4f6ff",
        cream: "#eef2ff",
        parchment: "#e2e8ff",

        // Text colors
        ink: "#0c111d",
        charcoal: "#334155",
        slate: "#64748b",

        // Accent colors
        accent: "#2454e8",
        glow: "#aec4ff",
        coral: "#d65c15",

        // Dark pastel blue for sections
        "blue-dark": "#142a66",

        // Legacy (for gradual migration)
        midnight: "#0c111d",
        abyss: "#142a66",
        mist: "#e2e8ff",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 25px 60px rgba(0,0,0,0.35)",
        "paper-sm": "0 1px 3px rgba(10,17,40,0.06), 0 1px 2px rgba(10,17,40,0.04)",
        paper: "0 4px 12px rgba(10,17,40,0.08), 0 2px 4px rgba(10,17,40,0.04)",
        "paper-lg": "0 8px 24px rgba(10,17,40,0.10), 0 4px 8px rgba(10,17,40,0.06)",
        "paper-xl": "0 16px 40px rgba(10,17,40,0.12), 0 8px 16px rgba(10,17,40,0.08)",
        lifted: "0 2px 8px rgba(10,17,40,0.08), 0 12px 24px rgba(10,17,40,0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
