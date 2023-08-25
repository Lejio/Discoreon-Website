import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "dark-primary": "#232B48",
      "light-primary": "#5363AD",
      "discord-primary": "5562EB",
      white: "rgb(255 255 255)",
      gray: "rgb(100 116 139)",
      "amber-300": "#fcd34d",
      "amber-200": "#fef08a",
      "amber-100": "#fef9c3",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
