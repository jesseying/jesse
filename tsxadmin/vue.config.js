// vue.config.js
const path = require("path");

// const webpack = require("webpack");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = ["js", "css"];
// const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: "/tsxadmin",
  lintOnSave: false,
  runtimeCompiler: true,
  // publicPath: './', // 设置打包文件相对路径
  //这是前端解决跨域的代码
  devServer: {
    https: false,
    open: true,
    host: '10.70.22.139', // 这里本地的话换成localhost就好
    port: 5000,
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000", //目标路径
        //target:'http://10.2.4.150:8085',   //目标路径
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@i": path.resolve(__dirname, "./src/assets"),
      },
      extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    plugins: [
      // 下面是下载的插件的配置
      new CompressionWebpackPlugin({
        algorithm: "gzip",
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
};
