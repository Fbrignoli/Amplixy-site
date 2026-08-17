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
        paper: "oklch(0.985 0 0)",
        surface: "oklch(1 0 0)",
        stone: "oklch(0.94 0.006 260)",
        ink: "oklch(0.19 0.018 255)",
        muted: "oklch(0.43 0.018 255)",
        accent: "oklch(0.7 0.2 43)",
        "accent-deep": "oklch(0.56 0.185 39)",
      },
      fontFamily: {
        display: ["var(--font-sans)"],
        sans: ["var(--font-sans)"],
      },
      boxShadow: {
        board: "0 24px 64px rgb(20 25 36 / 16%)",
      },
    },
  },
  plugins: [],
};
export default config;
