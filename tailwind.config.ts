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
        // Space-themed color palette
        space: {
          dark: "#0a0e27",
          navy: "#1a1f3a",
          purple: "#4a2c5a",
          blue: "#2d4a6b",
          accent: "#6b8fd4",
          light: "#a8c5e8",
        },
      },
      backgroundImage: {
        "space-gradient": "radial-gradient(ellipse at top, #1a1f3a 0%, #0a0e27 100%)",
      },
    },
  },
  plugins: [],
};
export default config;