const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true,
    port: process.env.VUE_APP_PORT,
    proxy: {
      '/api/v1/': {
        target: process.env.VUE_APP_BASE_URL,
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("vue-i18n","vue-i18n/dist/vue-i18n.cjs.js");
  },
  css: {
    extract: true,
  }
})
