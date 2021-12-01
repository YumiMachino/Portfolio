module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#450EFF',
          DEFAULT: '#16063C',
          dark: '#21006F',
        },
        pink: '#F100F5',
        orange: '#FF911A',
        red: '#FE3218',
        white: '#fff',
      },
    },

    fontFamily: {
      orbitron: ['Orbitron', 'sans-serif'],
      mplus1: ['M PLUS 1 Code', 'sans-serif'],
      titillium: ['Titillium Web', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
