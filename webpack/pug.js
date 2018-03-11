module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: true,
          },
        },
      ],
    },
  };
};

console.log('настройки PUG');