var HtmlWebpackPlugin = require('html-webpack-plugin');
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
        title: 'React module comparison',
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
