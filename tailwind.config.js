const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './components/home/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        desktop: '1200px',
        tablet: '728px',
        mobile: '320px'
      },
      colors: {
        darkblue: "#022b3a",
        blue: "#1f7a8c",
        lightblue: "#bfdbf7",
        lime: "#73fcea",
        white: "#ffffff",
        sky: "#54c1ff",
      },
      fontFamily: {
        sans: ['"Lexend Exa"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

// , '-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Oxygen', 'Ubuntu', 'Helvetica Neue', 'sans-serif'
