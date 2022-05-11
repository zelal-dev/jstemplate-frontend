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
        'xxs': '.625rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '4xxl': '2.5rem',
        '5xl': '3rem',
        '5xxl': '3.5rem',
        '6xl': '4rem',
        '7xl': '4.5rem',
        '7xxl': '5rem',
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.25em',
        largest: '.75em',
        
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
        'grayLight': '#DDE6F5',
        'secondaryGrayLight': '#FCFDFE',
        'secondaryGrayLighter': '#DCE6F6',
        'cartImageBgOne': '#E9F0FB',
        'purpleLight': '#B593FF',
        'purpleDark': '#6726F2',
        'primaryGreen': '#4AAD4E',
        'greenLight': '#67E5A3',
        'greenDark': '#08994D',
        'greenSecondaryLight': '#70C276',
        'greenSecondaryDark': '#3E9645',
        'templateColor': '#55B05C',
        'templateBackground': '#E5E5E5',
        'yellowLight': '#FFD470',
        'yellowDark': '#FB9600',
        'redLight': '#FF7E85',
        'redDark': '#FF2632',
        'secondaryTemplateColorDark': '#068179',
        'secondaryTemplateColorLight': '#54BAB3',
      },
      lineHeight: {
        'extra-loose': '4rem',
        '12':"3rem",
        '16':"4.125rem",
        '24':"6rem"
      },
      boxShadow: {
        '3xl': '0px 4px 16px -2px rgba(5, 107, 241, 0.5)',
        '4xl': '0px 4px 16px -2px rgba(255, 67, 7, 0.5)',
        'purple': '0px 4px 16px -2px rgba(103, 38, 242, 0.5)',
        'green': '0px 4px 16px -2px rgba(4, 174, 84, 0.5)',
        'yellow': '0px 4px 16px -2px rgba(255, 179, 0, 0.5)',
        'red': '0px 4px 16px -2px rgba(250, 79, 88, 0.5)',
        'grayLight': '0px 40px 50px #E7ECF3',
        'darkLight': ' 0px 24px 24px -4px #006D66',
        'secondaryTemplate': '0px 4px 16px -2px rgba(6, 129, 121, 0.5)',
        'secondaryGrayLight': '0px 40px 50px -12px #E7ECF3, inset 3px 0px 0px #068179',
      },
      backgroundImage: {
        'cart-bg':'linear-gradient(180deg, #139A91 0%, #027971 100%)',
        'cart-bg-bottom':'linear-gradient(180deg, #027971 0%, #139A91 100%)'
      },
      animation: {
        'testimonial-xl': 'moveTestimonialShow 4s linear infinite',
        'testimonial-lg': 'moveTestimonialShow 6s linear infinite',
        'testimonial-sm': 'moveTestimonialShow 8s linear infinite',
        'testimonial-xs': 'moveTestimonialShow 10s linear infinite',
      },
      keyframes: {
        moveTestimonialShow: {
          '100%': { transform: 'translateY(-40%)' },
        }
      },
      transform:{
        "moveTestimonialShow": {transform: "translate3d(0, 0, 0)"}
      }
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1350px',
      },
    },
  },
  plugins: [],
}
