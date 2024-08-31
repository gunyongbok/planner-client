/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bubble-gum": "#ff77e9",
        "dark-mode-main": "#ECE6E6",
        "dark-mode-header": "#1C1D3D",
      },
    },
  },
  plugins: [],
};
