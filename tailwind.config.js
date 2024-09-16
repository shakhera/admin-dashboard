/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        // Standard Colors
        primary: "#007BFF", // Blue (Bootstrap Primary)
        secondary: "#6C757D", // Gray (Bootstrap Secondary)
        bgLight: "#F8F9FA", // Light Gray (Bootstrap Light Background)
        bgDark: "#343A40", // Dark Gray (Bootstrap Dark Background)
        accentGreen: "#28A745", // Green (Success Accent)
        accentYellow: "#FFC107", // Yellow (Warning Accent)
        accentRed: "#DC3545", // Red (Danger Accent)

        // Additional Colors
        brightBlue: "#4A90E2", // Bright Contemporary Blue
        warmOrange: "#F5A623", // Warm Accent Orange
        lightGray: "#f4f7f6", // Light Gray for Backgrounds
        darkGrayBlue: "#2C3E50", // Dark Blue-Gray for Sidebar
        brightRed: "#E74C3C", // Bright Red for Buttons or Icons
      },
    },
  },
  plugins: [require("daisyui")],
};
