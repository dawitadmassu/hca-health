/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs: "0.75rem", // 12px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
        lg: "1.125rem", // 18px
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
        "6xl": "4rem", // 64px
      },
      colors: {
        primary: {
          light: "#0a2240", // Adjust the color values as needed
          DEFAULT: "#0a2240",
          dark: "#0a2240",
        },
        secondary: {
          light: "#063d7a",
          DEFAULT: "#063d7a",
          dark: "#063d7a",
        },
        accent: {
          light: "#141a1d",
          DEFAULT: "#141a1d",
          dark: "#141a1d",
        },
      },
    },
  },
  plugins: [],
};
