const path = require("path");//这一段需要自行添加
module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "./src/common/styles/variables.less")//需要自行添加
      ]
    }
  }
}