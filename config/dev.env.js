'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  URL_HOST: JSON.stringify('http://localhost'),
  URL_PORT: 8080
})
