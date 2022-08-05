/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'golos-reg': ['Golos Regular', 'sans-serif'],
      'golos-med': ['Golos Medium', 'sans-serif'],
      'golos-sb': ['Golos Semibold', 'sans-serif'],
      'golos-b': ['Golos Bold', 'sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3.375rem',
    },
  },
  plugins: [],
}