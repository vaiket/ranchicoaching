import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
    "./src/types/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        or: "var(--or)",
        or2: "var(--or2)",
        gold: "var(--gold)",
        green: "var(--green)",
        blue: "var(--blue)",
        red: "var(--red)",
        wa: "var(--wa)",
        dark: "var(--dark)",
        card: "var(--card)",
        card2: "var(--card2)",
        card3: "var(--card3)",
        warm: "var(--white)",
        muted: "var(--muted)",
        muted2: "var(--muted2)",
      },
      fontFamily: {
        serif: ["var(--font-instrument)", "serif"],
        display: ["var(--font-syne)", "sans-serif"],
        sans: ["var(--font-dm)", "sans-serif"],
      },
      boxShadow: {
        orange: "0 24px 80px rgba(255,77,0,0.22)",
        wa: "0 24px 60px rgba(37,211,102,0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.45", transform: "scale(1.35)" },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        pulseDot: "pulseDot 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
