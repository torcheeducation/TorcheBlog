const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './resources/views/**/*.blade.php',
    './resources/css/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
        // transparent: 'transparent',
        // current: 'currentColor',
        // 'naturalNavy': '#0B122A',
        // 'absorbing-blue': '#5885E9',
        // 'molecular-purple': '#9284F1',
        // 'molecular-orange': '#FF6442',
        // 'molecular-tosca': '#51C1CB',
        // 'molecular-yellow': '#FFAE5F'
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
  ]
}
