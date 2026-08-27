import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#1f2528",
          800: "#30383d",
          700: "#485258",
          600: "#657178",
        },
        paper: {
          50: "#fcfaf7",
          100: "#f5f0ea",
        },
        pastel: {
          lavender: "#dcd4f8",
          mint: "#d9eee4",
          blue: "#d9e7f2",
          rose: "#f3d9df",
          sand: "#eee5d7",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(31, 37, 40, 0.08)",
        subtle: "0 10px 30px rgba(31, 37, 40, 0.06)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
