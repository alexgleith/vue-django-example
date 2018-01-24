'use strict'

const webpack = require('webpack')
const base = require('./webpack.base')
const _ = require('./utils')
const FriendlyErrors = require('friendly-errors-webpack-plugin')
const config = require('./config')

base.devtool = 'eval-source-map'
base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT),
    'process.env.API_HOST': JSON.stringify(config.parameters.API_HOST),
    'process.env.WEB_HOST': JSON.stringify(config.parameters.WEB_HOST),
    'process.env.AUTH_HOST': JSON.stringify(config.parameters.AUTH_HOST),
    'process.env.AUTH_CLIENT_ID': JSON.stringify(config.parameters.AUTH_CLIENT_ID),
    'process.env.MAPBOX_ACCESS_TOKEN': JSON.stringify(config.parameters.MAPBOX_ACCESS_TOKEN)
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrors()
)

// push loader for css files
_.cssProcessors.forEach(processor => {
  let loaders
  if (processor.loader === '') {
    loaders = ['postcss-loader']
  } else {
    loaders = ['postcss-loader', processor.loader]
  }
  base.module.loaders.push(
    {
      test: processor.test,
      loaders: ['style-loader', _.cssLoader].concat(loaders)
    }
  )
})

module.exports = base
