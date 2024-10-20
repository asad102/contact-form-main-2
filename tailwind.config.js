/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./assets/js/index.js"
  ],
  theme: {
    fontFamily : {
      Karla : ["Karla", "sans-serif"],
    },
    fontSize : {
      Heading : ['32px',{
        lineHeight : '100%',
        letterSpacing : '-1px',
        fontWeight : '700'
      }],
      BodyMD : ['18px',{
        lineHeight : '150%',
        letterSpacing : '0px',
        fontWeight : '700'
      }],
      BodyMDR : ['18px',{
        lineHeight : '150%',
        letterSpacing : '0px',
        fontWeight : '400'
      }],
      BodyMDS : ['16px',{
        lineHeight : '150%',
        letterSpacing : '0px',
        fontWeight : '400'
      }],
    },
    colors : {
      White : '#FFFFFF',
      Grey : {
        500 : '#86A2A5',
        900 : '#2A4144',
      },
      Green : {
        200 : '#E0F1E8',
        600 : '#0C7D69',
      },
      Red : '#D73C3C',
    },
    extend: {
      spacing : {
        83 : '83px',
        91 : '91px',
        105 : '105px',
        137 : '137px',
        656 : '656px',
        736 : '736px',
      },
    },
  },
  plugins: [],
}

