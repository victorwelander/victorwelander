import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  darkMode: ["class", ".dark-theme"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
