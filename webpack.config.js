const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');
const extractCSS = require('./webpack/css.extract');
const webpack = require('webpack');
const uglifyJS = require('./webpack/js.uglify');
const favicon = require('./webpack/favicon');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const pug = require('./webpack/pug');
const lintJS = require('./webpack/js.lint');
const babel = require('./webpack/babel');
const PATHS = {
  source: path.join(__dirname,'source'),
  build: path.join(__dirname,'build'),
};

const common = merge([
  {
    entry: {
      'welcome': PATHS.source + '/pages/welcome/welcome.js',
      'about': PATHS.source + '/pages/about/about.js',
      'blog': PATHS.source + '/pages/blog/blog.js',
      'works': PATHS.source + '/pages/works/works.js',
    },
    output: {
      path: PATHS.build,
      filename: './js/[name].js',
    },
    plugins: 
    [
      new HtmlWebpackPlugin({
        filename: 'welcome.html',
        chunks: ['welcome','common'],
        template: PATHS.source + '/pages/welcome/welcome.pug',
      }),
      new HtmlWebpackPlugin({
        filename: 'about.html',
        chunks: ['about','common'],
        template: PATHS.source + '/pages/about/about.pug',
      }),
      new HtmlWebpackPlugin({
        filename: 'blog.html',
        chunks: ['blog','common'],
        template: PATHS.source + '/pages/blog/blog.pug',
      }),
      new HtmlWebpackPlugin({
        filename: 'works.html',
        chunks: ['works','common'],
        template: PATHS.source + '/pages/works/works.pug',
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
      }),
      new CleanWebpackPlugin(PATHS.build),
      new OptimizeCssAssetsWebpackPlugin({
        cssProcessorOptions: { 
          discardComments: { removeAll: true },
          safe: true,
         },
      }),
    ],
  },
  images(),
  fonts(),
  pug(),
  babel()
  // lintJS({ paths: PATHS.sources }),
  
  ]);
   
module.exports = function(env) {
  if (env === 'production') {
    return merge([
      common,
      extractCSS(),
      uglifyJS({ useSourceMap: true })
    //    favicon()
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass()
    ]);
  }
};