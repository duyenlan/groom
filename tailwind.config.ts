import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}", // (khuyên thêm)
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fef4e8",
      },
      fontFamily: {
        halimun: ['var(--font-halimun)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
