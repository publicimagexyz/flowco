import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        sage: {
          50: "rgb(248, 250, 249)",
          100: "rgb(237, 242, 239)",
          200: "rgb(214, 225, 218)",
          300: "rgb(176, 193, 182)",
          400: "rgb(134, 158, 143)",
          500: "rgb(100, 128, 110)",
          600: "rgb(76, 101, 85)",
          700: "rgb(60, 80, 68)",
          800: "rgb(48, 64, 55)",
          900: "rgb(40, 52, 46)",
          950: "rgb(22, 29, 25)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;

