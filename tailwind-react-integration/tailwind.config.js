/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Or 'media' for system preference
  plugins: [],
  variants: { // Only needed if you're adding custom variants
    extend: {
      backgroundColor: ['active'], // Example: Allow bg color to change on active state
      opacity: ['disabled'], // Example: Allow opacity change on disabled state
    },
  },

}
