// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  filenameHashing: true,
  productionSourceMap: false
}
