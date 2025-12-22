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
        midnight: "#0a1128",
        abyss: "#172a3a",
        mist: "#e0e1dd",
        accent: "#4a7c99",
        glow: "#9ae3ff",
      },
      fontFamily: {
        display: ["var(--font-montserrat)", "Poppins", "system-ui", "sans-serif"],
        sans: ["var(--font-lato)", "Open Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glass: "0 25px 60px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;

