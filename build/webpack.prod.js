'use strict'

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
// const OfflinePlugin = require('offline-plugin')
const rm = require('rimraf')
const base = require('./webpack.base')
const pkg = require('../package')
const _ = require('./utils')
const config = require('./config')

if (config.electron) {
  // remove files in dist folder in electron mode
  rm.sync('app/assets/*')
} else {
  // remove dist folder in web app mode
  rm.sync('dist/*')
  // use source-map in web app mode
  base.devtool = 'source-map'
}

// use hash filename to support long-term caching
base.output.filename = '[name].[chunkhash:8].js'
// add webpack plugins
base.plugins.push(
  new ProgressPlugin(),
  new ExtractTextPlugin('styles.[contenthash:8].css'),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
    'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT),
    'process.env.API_HOST': JSON.stringify(config.parameters.API_HOST),
    'process.env.WEB_HOST': JSON.stringify(config.parameters.WEB_HOST)
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false,
      comparisons: false
    },
    output: {
      comments: false
    }
  }),
  // extract vendor chunks
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function (module) {
      return module.context && module.context.includes('node_modules')
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity
  })
  // progressive web app
  // it uses the publicPath in webpack config
  // new OfflinePlugin({
  //   relativePaths: false,
  //   ServiceWorker: {
  //     events:true,
  //     navigateFallbackURL:'/'
  //   },
  //   AppCache: {
  //     events:true,
  //     FALLBACK:{ '/':'/' }
  //   }
  // })
)

// extract css in standalone css files
_.cssProcessors.forEach(processor => {
  let loaders
  if (processor.loader === '') {
    loaders = ['postcss-loader']
  } else {
    loaders = ['postcss-loader', processor.loader]
  }
  base.module.loaders.push({
    test: processor.test,
    loader: ExtractTextPlugin.extract({
      use: [_.cssLoader].concat(loaders),
      fallback: 'style-loader'
    })
  })
})

// minimize webpack output
base.stats = {
  // Add children information
  children: false,
  // Add chunk information (setting this to `false` allows for a less verbose output)
  chunks: false,
  // Add built modules information to chunk information
  chunkModules: false,
  chunkOrigins: false,
  modules: false
}

module.exports = base
