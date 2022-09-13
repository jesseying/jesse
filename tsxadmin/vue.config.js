// vue.config.js
const path = require('path')

// const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
// const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  runtimeCompiler: true,
  // publicPath: './', // 设置打包文件相对路径
  //这是前端解决跨域的代码
  devServer: {
    https: false,
    open: true,
    host: 'localhost', // 这里本地的话换成localhost就好,如果后台前台需要过nginx，就设置成自己的ip
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/admin/api', //目标路径
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@i': path.resolve(__dirname, './src/assets'),
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    },
    plugins: [
      // 下面是下载的插件的配置
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
};
