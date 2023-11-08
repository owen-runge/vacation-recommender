/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrainsmono': ['JetBrains Mono', 'sans-serif']
      },
      colors: {
        'custom-foreground': '#303030',
        'custom-border': '#3a3a3a'
      }
    },
  },
  plugins: [],
}

