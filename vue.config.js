module.exports = {
  lintOnSave: true,

  transpileDependencies: ["vuetify"],

  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/style.scss";`,
      },
    },
  },

  devServer: {
    proxy: {
      "/assessments": {
        target: "https://www.afrihost.com",
        changeOrigin: true,
        secure: true,
      },
    },
  },
};
