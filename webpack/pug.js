module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: '\t',
          },
        },
      ],
    },
  };
};

console.log('настройки PUG');