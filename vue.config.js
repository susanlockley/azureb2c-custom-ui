const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    publicPath: 'https://icy-coast-0ec2d7300.5.azurestaticapps.net/' //works in b2c for index.html (not vue route)
    //publicPath: './'
    // configureWebpack: {
    // output: {
    //   publicPath: 'https://icy-coast-0ec2d7300.5.azurestaticapps.net/'
    // }
  //}
})
