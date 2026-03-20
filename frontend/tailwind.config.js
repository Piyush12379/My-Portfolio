/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#64ffda", // Cyan, typical premium dark theme accent
        background: "#0a192f", // Deep navy blue
        dark: "#020c1b", // Darker background
        textMain: "#ccd6f6", // Light slate
        textLight: "#8892b0", // Slate
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
