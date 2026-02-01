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
        paper: "#faf9f6",
        cream: "#f5f3ef",
        parchment: "#efe9dd",

        // Text colors
        ink: "#0a1128",
        charcoal: "#2d3748",
        slate: "#64748b",

        // Accent colors
        accent: "#7eb8d8",
        glow: "#9ae3ff",
        coral: "#ff6b4a",

        // Dark pastel blue for sections
        "blue-dark": "#3d5a80",

        // Legacy (for gradual migration)
        midnight: "#0a1128",
        abyss: "#172a3a",
        mist: "#e0e1dd",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "Poppins", "system-ui", "sans-serif"],
        sans: ["var(--font-lato)", "Open Sans", "system-ui", "sans-serif"],
        sketch: ["var(--font-caveat)", "cursive"],
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

