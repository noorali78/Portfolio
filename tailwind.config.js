/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        accent: {
          DEFAULT: "#14B8A6",
          light: "#5EEAD4",
          dark: "#0F766E"
        },
        success: {
          DEFAULT: "#22C55E",
          light: "#86EFAC",
          dark: "#166534"
        },
        warning: {
          DEFAULT: "#F97316",
          light: "#FDBA74",
          dark: "#C2410C"
        },
        error: {
          DEFAULT: "#EF4444",
          light: "#FCA5A5",
          dark: "#B91C1C"
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};