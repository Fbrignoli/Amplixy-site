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
        paper: "#fafafa",
        surface: "#ffffff",
        stone: "#e9ebef",
        ink: "#0e141c",
        muted: "#49505a",
        line: "#c6cbd1",
        accent: "#a52a48",
        "accent-deep": "#701b32",
        "accent-soft": "#f2dde3",
        "accent-light": "#c06a7f",
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
