import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tarot:['var(--font-josefinSans)', 'serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
