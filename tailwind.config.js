module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'indigo-blue': '#16063C',
        'light-blue': '#450EFF',
        'deep-blue': '#21006F',
        'theme-pink': '#F100F5',
        'theme-orange': '#FF911A',
        'theme-red': '#FE3218',
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
