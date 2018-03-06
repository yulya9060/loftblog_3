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
const PATHS = {
    source: path.join(__dirname,'source'),
    build: path.join(__dirname,'build')
};
var htmlFiles = ["welcome","about"];
// htmlFiles.forEach(html => {
//     new HtmlWebpackPlugin({
//         filename: html+'.html',
//         chunks: [html,'common'],
//         template: PATHS.source + '/pages/'+html+'\/'+html+'.pug'
//     })
// });

const common = merge([
    {
    entry: {
        'welcome': PATHS.source + '/pages/welcome/welcome.js',
        'about': PATHS.source + '/pages/about/about.js'
    },
    output: {
        path: PATHS.build,
        filename: './js/[name].js'
    },
    plugins: 
    [
        // new HtmlWebpackPlugin({
        //     filename: 'main.html',
        //     chunks: ['main','common'],
        //     template: PATHS.source + '/pages/main/main.pug'
        // }),
        // new HtmlWebpackPlugin({
        //     filename: 'about.html',
        //     chunks: ['about','common'],
        //     template: PATHS.source + '/pages/about/about.pug'
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "common"
        // }),
        htmlFiles.forEach(html => {
            new HtmlWebpackPlugin({
                filename: html+'.html',
                chunks: [html,'common'],
                template: PATHS.source + '/pages/'+html+'\/'+html+'.pug'
            })
        }),
        new CleanWebpackPlugin(PATHS.build),
        new OptimizeCssAssetsWebpackPlugin({
            cssProcessorOptions: { discardComments: { removeAll: true } },
        })
    ],
    },
    pug(),
    images(),
    fonts()
   ]);
   
module.exports = function(env) {
    if (env === 'production') {
    return merge([
        common,
        extractCSS(),
        uglifyJS({ useSourceMap: true }),
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