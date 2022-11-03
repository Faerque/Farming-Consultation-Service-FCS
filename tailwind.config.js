/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  daisyui: {
    themes: false,
  },
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors : {
        brightBlue: '#5EA2B7',
        brightGray:  '#D9D9D9',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
      }
    },
  },
  plugins: [require("daisyui")],
}

