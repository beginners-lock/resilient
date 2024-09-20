/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ["EthnoRegular", "sans-serif"],
        italic: ["EthnoItalic", "sans-serif"],
      },
      animation: {
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite'
      }
    },
  },
  plugins: [],
}

