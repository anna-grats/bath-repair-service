import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1084C6',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #03EEFD 0%, #00ADFE 94.92%)',
      },
      boxShadow: {
        'custom-glow': '0 4px 20px rgba(3, 238, 253, 0.3), 0 4px 20px rgba(0, 173, 254, 0.3)',
      },
      fontFamily: {
        roboto: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
