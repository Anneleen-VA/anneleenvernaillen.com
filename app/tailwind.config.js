/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/*.vue',
    'components/content/*.vue',
    'pages/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px'
    },
    extend: {
      colors: {
        white: '#FFFEFD',
        black: '#222222',
        gray: '#707070',
        primary: '#DCD8D1'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Inter', 'serif']
      }
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
