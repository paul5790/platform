const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 3910,
    proxy: {
      "/data/vtg": {
        target: "http://192.168.0.73:8097",
      },
    },
    // proxy: {
    //   "/data/user": {
    //     target: "http://192.168.0.99:13000",
    //   },
    // },
  },

  // 공용주소
  // publicPath: "/platform/",

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
