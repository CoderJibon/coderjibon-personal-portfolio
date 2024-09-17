import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: ["var(--font-helvetica)", "sans-serif"],
      },
      colors: {
        primary: "#7544D8",
        secondary: "#6E4EF2",
        success: "#2C2C37",
        darkLight: "#20202A",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
