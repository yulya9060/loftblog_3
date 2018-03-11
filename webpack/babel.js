module.exports = function(){
    return {
        module: {
            rules: [
              {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                }
              }
            ]
          }
    }
}

console.log('настройка babel');


