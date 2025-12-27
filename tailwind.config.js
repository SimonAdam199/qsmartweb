module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple90: '#f6f3ff',
        primary: '#6D28D9', // purple-700
        accent: '#A78BFA' // lilac
      },
      backgroundImage: {
        'lilac-gradient': 'linear-gradient(180deg,#f3e8ff 0%, #eef2ff 100%)',
        'purple-accent': 'linear-gradient(90deg,#6D28D9 0%, #A78BFA 100%)'
      }
    }
  },
  plugins: []
}
