const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(paths) {
  return {
    module: {
      rules: [
        {
          test: /\.scss$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            publicPath: '../',
            fallback: 'style-loader',
            use: ['css-loader','sass-loader'],
          }),
        },
        {
          test: /\.css$/,
          include: paths,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!autoprefixer-loader?browsers=last 2 versions',
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin('./css/[name].css'),
    ],
  };
};

console.log('настройка css');