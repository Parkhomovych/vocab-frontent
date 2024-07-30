import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        onlyMobile: { max: "766.9px" },
        tablet: "768px",
        onlyTablet: { min: "768px", max: "1439.9px" },
        desktop: "1440px",
      },
      backgroundImage: {
        "auth-mobile": "url('/bg-gradient-mobile.svg')",
        "auth-desktop": "url('/bg-gradient-desktop.svg')",
      },
      colors: {
        black: "#121417",
        white: {
          DEFAULT: "#FFFFFF",
          second: "#FCFCFC",
        },
        olive: "#85AA9F",
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
