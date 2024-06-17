import { Config } from "tailwindcss";
import { colors } from "./src/styles/colors";

const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.primary[200],
          DEFAULT: colors.primary[500],
          dark: colors.primary[500],
        },
        secondary: {
          ...colors.secondary,
          DEFAULT: colors.secondary[500],
        },
        success: {
          ...colors.success,
          DEFAULT: colors.success[500],
        },
        warning: {
          ...colors.warning,
          DEFAULT: colors.warning[500],
        },
        error: {
          ...colors.error,
          DEFAULT: colors.error[500],
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },

  plugins: [],
} satisfies Config;

export default tailwindConfig;
