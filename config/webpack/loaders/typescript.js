const PnpWebpackPlugin = require('pnp-webpack-plugin')

module.exports = {
  test: /\.tsx?(\.erb)?$/,
  use: [
    {
      loader: 'babel-loader',
      options: { cacheDirectory: true }
    },
    {
      loader: 'ts-loader',
      options: PnpWebpackPlugin.tsLoaderOptions()
      // options: { transpileOnly: true }
    }
  ]
}
