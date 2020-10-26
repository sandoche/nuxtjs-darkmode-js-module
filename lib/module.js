const { resolve } = require('path')

module.exports = async function (moduleOptions) {
  const options = {
    ...this.options['@nuxtjs/darkmode-js-module'],
    ...moduleOptions
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: '@nuxtjs/darkmode-js-module.js',
    options
  })
}

module.exports.meta = require('../package.json')
