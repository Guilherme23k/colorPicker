/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
      Roboto : "Roboto"
      },
      letterSpacing:{
        wideButton : '0.25rem'
      },
      colors: {
        blackMain : '#222',
        blueMain : '#49a6e9',
        greenAlert : '#c8f2db',
        greenAlertBorder : '#40bc70',
        greenAlertExclamation : '#2db96b',
        greenAlertClose : '#93e9b3',
        greenAlertCloseHover : '#41b170',
        greenAlertFas : '#26a65c'
      },
      minWidth: {
        alert : '26.25rem'
      },
      spacing: {
        4.5 : '1.125rem'
      }
    },
  },
  plugins: [],
}
