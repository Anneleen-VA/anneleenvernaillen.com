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
        dovegray: {
          DEFAULT: '#707070',
          50: '#CCCCCC',
          100: '#C2C2C2',
          200: '#ADADAD',
          300: '#999999',
          400: '#848484',
          500: '#707070',
          600: '#545454',
          700: '#383838',
          800: '#1C1C1C',
          900: '#000000',
          950: '#000000'
        },
        westar: {
          DEFAULT: '#DCD8D1',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#EEECE8',
          500: '#DCD8D1',
          600: '#C4BDB1',
          700: '#ACA291',
          800: '#938771',
          900: '#746A58',
          950: '#645C4C'
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Poppins', 'serif']
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
