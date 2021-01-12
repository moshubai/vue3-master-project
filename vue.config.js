const Setting = require('./src/setting.env')
// 增加环境变量
process.env.VUE_APP_VERSION = require('./package.json').version
process.env.VUE_APP_BUILD_TIME = require('dayjs')().format('YYYY-M-D HH:mm:ss')

module.exports = {
  publicPath: Setting.publicPath,
  lintOnSave: Setting.lintOnSave,
  outputDir: Setting.outputDir,
  assetsDir: Setting.assetsDir,
  runtimeCompiler: true,
  productionSourceMap: false,
  devServer: {
    publicPath: Setting.publicPath,
    port: '7863',
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://192.168.0.171:8725/api/',
        // target: 'http://172.16.2.66:8725/api/',
        // target: 'http://localhost:8725/api',
        ws: false,

        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
