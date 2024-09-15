/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          sans: ["Poppins", "sans-serif"],
        },
        colors: {
          // primary: "#4A90E2", // A bright contemporary blue
          // secondary: "#F5A623", // A warm accent color
          // bgLight: "#f4f7f6", // Light gray for backgrounds
          // bgDark: "#2C3E50", // Dark blue-gray for sidebar and accents
          // accent: "#E74C3C", // A bright red for icons or buttons

          primary: "#007BFF",
          secondary: "#6C757D",
          bgLight: "#F8F9FA",
          bgDark: "#343A40",
          accentGreen: "#28A745",
          accentYellow: "#FFC107",
          accentRed: "#DC3545",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
