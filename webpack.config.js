const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'none',
  entry: {
    ssr: './server/ssr.jsx',
  },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.jsx|\.js/,
        loader: 'babel-loader',
        exclude: `${__dirname}/node_modules`,
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [['babel-plugin-styled-components', { ssr: true }]]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.svg$/,
        use: [{loader: 'svg-url-loader',
        options: {limit: 10000}}]
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      react: `${__dirname}/node_modules/react`,
      'react-router-dom': `${__dirname}/node_modules/react-router-dom`
    }
  }
};