const tailwindTheme = require('tailwindcss/defaultTheme');
const tailwindForms = require('@tailwindcss/forms')
const aspectRatio = require('@tailwindcss/aspect-ratio')
const gradientMask = require("tailwind-gradient-mask-image")
// const typography = require('@tailwindcss/typography')

module.exports = {
  mode: 'jit',

    content: [
      './src/**/*.njk',
      './src/**/*.js',
      './src/**/*.md',
    ],

  theme: {
    aspectRatio: {
      'gr': '1.6180',
      1: '1'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1080px',
      'xl': '1300px',
      '2xl': '1500px',
      '3xl': '1600px',
    },
    extend: {

      gridTemplateColumns: {
        '18': 'repeat(18, minmax(0, 1fr))',
        '20': 'repeat(24, minmax(0, 1fr))',
        '24': 'repeat(24, minmax(0, 1fr))',
        '36': 'repeat(36, minmax(0, 1fr))'
      },
      colors: {
        'u2-gold': '#F4B41A',
        'u2-black': '#1C1D1F',
        'u2-blackAlt': '#4E4E52',
        'u2-white': '#F7F8F8',
        'u2-cream': '#F4F1D3',
        'u2-dark-grey': '#28282A',
        'u2-dark-greyAlt': '#4E4E52',
        'u2-light-grey': '#e5e7eb',
        'u2-highlight-grey': '#999',
        'u2-highlight-greyAlt': '#5B5B5B',
        'u2-lightBlue': '#58B4CC',
        'u2-lightBlueAlt': '#52A8BF',
        'u2-darkBlue': '#546482',
        'u2-darkBlueAlt': '#44526B',
        'u2-purple': '#993B7C',
        'u2-purpleAlt': '#772D60',
        'u2-orange': '#D06D30',
        'u2-orangeAlt': '#A65726',
        'u2-green': '#5C883A',
        'u2-greenAlt': 'rgb(57,88,59)',
        'u2-oliveGreen': '#948834',
        'u2-oliveGreenAlt': '#796F2A',
        'u2-yellow': '#D3B420',
        'u2-pink': '#D35F8C',
        'u2-pinkAlt': '#AB4B70',
        'u2-hover': 'rgb(244, 180, 26)', // gold,
        'u2-inactive': '#999', // Grey
        'u2-selected': '#546482', // Blue,
        'mambu-green': 'rgb(107	180	84)',
        'mambu-teal': 'rgb(50	114	113)',
        'marqeta': 'rgb(62	55	124)',
        'worldfirst': 'rgb(230	58	75)',
        'geraldeve': '#6C8A41',
        'ak': '#EAA6A0'
      },
      fontFamily: {
        'sans': ['Plex', ...tailwindTheme.fontFamily.sans],
      },
      fontWeight: {
        'normal': 400,
        'semi': 600,
        'display': 800
      },
      fontSize: {
        'hp': '100px',
        'hp-fluid': ['clamp(2.8rem, 6.5vw, 3.455rem)', '1.1'],
        'hp-fix': ['2.49vw', '1.2'],
        'massive-fluid': ['clamp(6rem, 5.5vw, 24rem)', '1.1'],
      },
      spacing: {
        'u2-pad': '1.25rem',
        'u2-pad-sm': '0.75rem',
        'u2-gutter': '2.5rem',
        'u2-gutter-sm': '0.75rem',
        'u2-padOrig': 'clamp(1.2rem, 3vw, 8rem)',
        'u2-gapOrig': 'clamp(1.2rem, 3vw, 8rem)',
        'u2-gap-lg': '1.25rem',
        'u2-gap-sm': '0.75rem',
        '128': '32rem',
        '160': '40rem'

      },

  

      minWidth: {
        'u2-button': '12rem'
      },
      borderWidth: {
        '12': '12px',
      },
      boxShadow: {
        "4xl": 'rgba(0, 0, 0, 0.3) 0px 13px 40px, rgba(0, 0, 0, 0.2) 0px 4px 4px',
      },
    },
  },
  variants: {
    aspectRatio: ['responsive', 'hover'],
    extend: {},
  },
  plugins: [aspectRatio, tailwindForms, gradientMask],
}
