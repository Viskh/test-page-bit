const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require("dotenv-webpack");

const production = process.env.NODE_ENV === "production";

const SRC_DIR = path.join(__dirname, "./src");

const ALIAS = {
  src: `${SRC_DIR}`,
  shared: `${SRC_DIR}/shared`,
  app: `${SRC_DIR}/app`,
  entities: `${SRC_DIR}/entities`,
  pages: `${SRC_DIR}/pages`,
  features: `${SRC_DIR}/features`,
  widgets: `${SRC_DIR}/widgets`,
};

module.exports = {
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: production ? '[name].[contenthash].js' : '[name].js',
    publicPath: "/",
  },
  target: "web",
  resolve: {
    alias: ALIAS,
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    fallback: {
      url: false,
      path: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
      },
      {
        test: /\.module\.s[ac]ss$/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /\.module.(s[ac]ss)$/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new Dotenv({
      path: "./.env",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: production ? "[name].[contenthash].css" : "[name].css",
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  mode: production ? "production" : "development",
};
