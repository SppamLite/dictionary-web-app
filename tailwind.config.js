/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#2D2D2D',
      white: colors.white,
      purple: '#A445ED',
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      serif: ['Lora', ...defaultTheme.fontFamily.serif],
      mono: ['Inconsolata', ...defaultTheme.fontFamily.mono],
    },
    extend: {},
  },
  plugins: [],
}
