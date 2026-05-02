const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
    clean: true,
    publicPath: "/",  
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff2?|eot|ttf)$/,
        type: "asset/resource",
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      '@Primitives': path.resolve(__dirname, 'src/@Primitives'),
      '@Icons': path.resolve(__dirname, 'src/@Assets/@Icons'),
      '@Assets': path.resolve(__dirname, 'src/@Assets'),
      '@Utils': path.resolve(__dirname, 'src/@Utils'),
      '@Views': path.resolve(__dirname, 'src/@Views'),
      '@Components': path.resolve(__dirname, 'src/@Components'),
      '@AdminComponents': path.resolve(__dirname, 'src/@Components/Admin'),
      '@AdminPrimitives': path.resolve(__dirname, 'src/@Primitives/Admin'),
      '@Hooks': path.resolve(__dirname, 'src/@Hooks'),
      '@Types': path.resolve(__dirname, 'src/@Types'),
      '@Constants': path.resolve(__dirname, 'src/@Constants'),
    },
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ForkTsCheckerWebpackPlugin({
  async: false,
  typescript: {
    memoryLimit: 4096,
    diagnosticOptions: {
      semantic: false,
      syntactic: true,
    },
  },
})
  ],
  devtool: "source-map",
  optimization: {
    splitChunks: { chunks: "all" },
    runtimeChunk: "single",
  },
  devServer: {
    static: "./dist",
    hot: true,
    port: 8282,
    historyApiFallback: true,
  },
  }