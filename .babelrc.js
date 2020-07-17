const path = require('path')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    ["styled-components", { "ssr": true }],
    [
      'module-resolver',
      {
        alias: {
          '@assets': 'src/assets',
          '@components': 'src/components',
          '@services': 'src/services',
          '@store': 'src/store'
        }
      }
    ]
  ]
}
