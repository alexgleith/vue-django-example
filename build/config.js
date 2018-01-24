'use strict'
const pkg = require('../package')

// We need a way to inject build-time variables into the single page app.
// This is a bit messy, but should work.
console.log('//------------------------//')
console.log('Build environment is set to ' + process.env.ENVIRONMENT)
console.log('//------------------------//')

// Start with some defaults for dev.
const parameters = {
  API_HOST: 'http://localhost:8000',
  WEB_HOST: 'http://localhost'
}

if (process.env.ENVIRONMENT === 'localprod') {
  // This is for testing the production build
  parameters.API_HOST = 'http://api.app.vcap.me'
  parameters.WEB_HOST = 'http://www.app.vcap.me'
} else if (process.env.ENVIRONMENT === 'develop') {
  // This is the staging environment, build from the 'develop' branch
  parameters.API_HOST = 'https://api.example.com'
  parameters.WEB_HOST = 'https://www.example.com'
} else if (process.env.ENVIRONMENT === 'master') {
  // This is the production environment, the branch is 'master'
  parameters.API_HOST = 'https://api.example.com'
  parameters.WEB_HOST = 'https://www.example.com'
} else if (process.env.ENVIRONMENT === 'development') {
  // This is the local development environment. We're happy to go with defaults.
} else {
  // Something went wrong...
  console.log('UNKNOWN ENVIRONMENT')
}

module.exports = {
  title: 'Example app',
  // Options for webpack-dev-server
  // See https://webpack.js.org/configuration/dev-server
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  parameters: parameters,
  // when you use electron please set to relative path like ./
  // otherwise only set to absolute path when you're using history mode
  publicPath: '/'
}
