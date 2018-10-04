const path = require('path');

module.exports = {
  watch: true,
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [
              path.join(__dirname, 'src')
          ],
          exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.js$|\.jsx$/,
        use: {
          loader: 'istanbul-instrumenter-loader',
          options: { esModules: true }
        },
        enforce: 'post',
        exclude: /node_modules|\.spec\.js$/,
      }
    ]
  },
};