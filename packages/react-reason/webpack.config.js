const HtmlWebpackPlugin = require('html-webpack-plugin');
const join = require('path').join;

const stats = {
  chunks: false,
  modules: false,
};

module.exports = [
  {
    entry: './lib/js/src',
    output: {
      filename: 'bundle.js',
      path: join(__dirname, 'dist'),
      publicPath: '/',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'React Reason',
        filename: 'index.html',
        template: './src/index.html',
      }),
    ],
    stats,
    devServer: {
      stats,
    },
  },
];
