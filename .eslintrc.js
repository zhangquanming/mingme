module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  globals: {
    Vue: true,
    Vuex: true,
    VueRouter: true,
    axios: true,
  },
  rules: {
    // allow debugger during development
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // eslint配置  
    // 0或’off’：关闭，  
    // 1或’warn’：警告，  
    // 2或’error’：错误 
    'eol-last': 0,//文件以单一的换行符结束
    'no-empty': 2,//块语句中的内容不能为空
    'arrow-parens': 0,//箭头函数用小括号括起来
    'generator-star-spacing': 0,//生成器函数*的前后空格
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
