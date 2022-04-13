module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/sections/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{js,ts,jsx,tsx,svg,jpg,png}",
  ],
  theme: {
    fontSize:{
        '5xxl': "3.5rem",
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
    extend: {
      colors: {
        'secondary': '#FF7043',
        'orangeOne': '#FFAB90',
        'orangeTwo': '#FF4307',
        'blueOne': '#75B1FF',
        'blueTwo': '#056BF1',
        'backgroundGray': '#F6F7FB',
        'backgroundGrayOne': '#F7F8FC',
        'cartImageBgOne': '#E9F0FB',
        'purpleLight': '#B593FF',
        'purpleDark': '#6726F2',
        'greenLight': '#67E5A3',
        'greenDark': '#08994D',
        'yellowLight': '#FFD470',
        'yellowDark': '#FB9600',
        'redLight': '#FF7E85',
        'redDark': '#FF2632',
      },
      lineHeight: {
        'extra-loose': '4rem',
      },
      dropShadow: {
        '3xl': '0px 4px 16px -2px rgba(5, 107, 241, 0.5)',
        '4xl': '0px 4px 16px -2px rgba(255, 67, 7, 0.5)'
      }
    },
  },
  plugins: [],
}
