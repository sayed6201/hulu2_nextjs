/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "JIT",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "3xl": "2000px",
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
