module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#022b3a",
        blue: "#1f7a8c",
        lightblue: "#bfdbf7",
        lime : "#73fcea",
        white : "#ffffff",
        sky : "#54c1ff"
      },
      fontFamily: {
        sans: ['Lexend ExaVariable'], 
      },
    },
  },
  plugins: [],
}

// , '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Oxygen', 'Ubuntu', 'Helvetica Neue', 'sans-serif'