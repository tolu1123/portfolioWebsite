/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html',"./src/**/*.{html,js,jsx}", './src/components/**/*.{js,jsx}', './src/routes/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors:{
        darkGreen: '#263238',
        charcoalGray: '#4E4E4E',
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
        blushPetal: '#E0A6B0',
        blushPink: '#FFEAEB',
        coralPink: '#F38F94',
        frostedWhite: '#F2F6F7',
        seaFoamBlue: '#6DA3B0',
        borderRose: '#BB9297',
        hotPink: '#FF8C92',
        lightGray: '#AEAEAE',
      },
      animation: {
        'slow-ping': 'ping 2s linear infinite 1s',
      },
    },
  },
  plugins: [],
}
// './src/routes/index.jsx', './src/routes/error.jsx','./src/components/Banner.jsx', './src/components/About.jsx', './src/components/pyCode.jsx', './src/components/Works.jsx', './src/components/SvgComponent.jsx', './src/components/PeopleSay.jsx', './src/components/Slider.jsx'
