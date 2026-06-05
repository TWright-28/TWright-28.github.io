import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#4f46e5",
          light: "#6366f1",
          dark: "#3730a3",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
