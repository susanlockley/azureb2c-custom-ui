const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    //publicPath: 'https://icy-coast-0ec2d7300.5.azurestaticapps.net/'
    publicPath: './dist/'
    // configureWebpack: {
    // output: {
    //   publicPath: 'https://icy-coast-0ec2d7300.5.azurestaticapps.net/'
    // }
  //}
})
