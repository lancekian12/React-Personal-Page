/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6", // Deep Blue (for links and buttons)
        background: "#ffffff", // White background for sections
        accent: "#e5e7eb", // Gray-200 accent color
        textPrimary: "#000000", // Black text for headings
        textSecondary: "#a1a1aa", // Gray text for subheadings
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      fontSize: {
        "6xl": "4rem",
        "8xl": "6rem",
      },
    },
  },
  plugins: [],
};
