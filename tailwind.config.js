/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      golos: ['Golos', 'sans-serif'],
      'golos-med': ['Golos Medium', 'sans-serif'],
      'golos-sb': ['Golos Semibold', 'sans-serif'],
      'golos-b': ['Golos Bold', 'sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1.8rem',
      lg: '1.125rem',
      xl: '1.6rem',
      '2xl': '1.8rem',
      '3xl': '3rem',
      '4xl': '2.25rem',
      '5xl': '5.4rem',
    },
    extend: {
      colors: {
        accent: '#ed7138',
        'basic-black': '#0f1214',
        grey: '#878889',
      },
      lineHeight: {
        27: '2.7rem',
      },
    },
    screens: {
      '3xl': { max: '1920px' },
      '2xl': { max: '1536px' },
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
    },
  },
  plugins: [],
}
