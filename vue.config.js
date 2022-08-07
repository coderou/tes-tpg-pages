const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: "/tes-tpg-pages/", // 解决gh-pages访问不到静态资源问题
});
