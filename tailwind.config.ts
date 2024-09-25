import type { Config } from "tailwindcss";

const config: Config = {
  mode: "jit",
  darkMode: ["class", ".dark-theme"],
  content: ["./**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
