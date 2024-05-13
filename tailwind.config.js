/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/routes/index.jsx', './src/routes/error.jsx','./src/components/Banner.jsx', './src/components/About.jsx', './src/components/pyCode.jsx', './src/components/Works.jsx', './src/components/SvgComponent.jsx', './src/components/PeopleSay.jsx', './src/components/Swiper.jsx'],
  theme: {
    extend: {
      colors:{
        darkGreen: '#263238',
        dullDark: '#4E4E4E',
        pinkBrown: '#FF8C92',
        highlightGreen: '#F2F6F7',
        highlightBrown: '#F3EAEB',
        royalBlue: '#234DE4',
        flameRed: '#FF3131',
        mahoganyRed: '#A82424',
        cloudRed: '#F5F4F4',
        dustyRose: '#936C70',
        slateBlue: '#687982',
        moodyBrown: '#ECE6E7',
        blushPetal: '#E0A6B0'
      },
    },
  },
  plugins: [],
}

