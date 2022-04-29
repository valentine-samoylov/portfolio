// Webpack Common Config
const { ProgressPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const paths = require('./paths')
const globals = require('../src/globals')

module.exports = {
  entry: [`${paths.src}/index.tsx`],

  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.(jpe?g|png|gif|webp|avif)$/i,
        type: 'asset/resource',
      },
      { test: /\.img.svg$/i, type: 'asset/resource' },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      { test: /\.(woff(2)?|eot|ttf|otf)$/, type: 'asset/resource' },
      { test: /\.txt$/, type: 'asset/source' },
    ],
  },

  plugins: [
    new ProgressPlugin({ percentBy: 'entries' }),
    new CleanWebpackPlugin(paths.dist),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store', '**/template.ejs'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: `${paths.public}/template.ejs`,
      templateParameters: globals,
      filename: 'index.html',
      inject: 'body',
    }),
  ],

  // resolve: {
  //   // plugins: [new TsconfigPathsPlugin()],
  //   modules: [paths.src, 'node_modules'],
  //   alias: {
  //     '@': paths.src,
  //     '@assets': `${paths.src}/assets`,
  //     '@components': `${paths.src}/components`,
  //     '@hooks': `${paths.src}/hooks`,
  //     '@context': `${paths.src}/context`,
  //     '@layouts': `${paths.src}/layouts`,
  //     '@pages': `${paths.src}/pages`,
  //     '@utils': `${paths.src}/utils`,
  //     '@data': `${paths.src}/data`,
  //     assets: paths.public,
  //   },
  //   extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.sass', '.scss'],
  // },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.sass', '.scss'],
    plugins: [new TsconfigPathsPlugin()],
  },
}
