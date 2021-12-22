module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','./Layout/**/*.{js,ts,jsx,tsx}','./Auth/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        purple:"#5c4971",
        dashmenu:'#293950',
        dashpanel:'#1d2d45',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
