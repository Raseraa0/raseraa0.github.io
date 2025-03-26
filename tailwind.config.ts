import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
        },
        blue: {
          1: "#a2fff4",
          2: "#c4ebff",
          3: "#b0e3ff",
          4: "#97dcff",
          5: "#6aceff",
          6: "#81d3ff",
          7: "#003b64",
          8: "#002545",
          9: "#00131c",
        },
        white: {
          1: "#f7f7f7",
        },
      },
      animation: { shimmer: "shimmer 2s linear infinite" },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
