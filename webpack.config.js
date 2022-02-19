const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack')
console.log(process.env.SECRET_KEY);
console.log(process.env.S3_BUCKET);
module.exports = {
  entry: {
    app: [
      './src/js/auth.js',
      './src/js/callback.js',
      './src/js/login-handler.js',
      './src/js/script.js',
      './src/js/theme.js',
    ],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/callback.html',
      filename: './callback.html',
    }),
    new Dotenv()
  ],
  mode: 'development',
  devtool: 'inline-source-map',
};