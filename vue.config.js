const path = require("path")

const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)

// cdn预加载使用(不从 bundle 中引用依赖)
const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  axios: 'axios',
}

const cdn = {
  dev: {
    css: ['//at.alicdn.com/t/font_1905390_vwkf9yxdeg.css'],
    js: [
      'https://cdn.bootcss.com/vue/2.6.6/vue.js',
      'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.js',
      'https://cdn.bootcss.com/vuex/3.0.1/vuex.js',
      'https://cdn.bootcss.com/axios/0.18.0/axios.js',
    ],
  },
  pro: {
    css: ['//at.alicdn.com/t/font_1905390_vwkf9yxdeg.css'],
    js: [
      'https://cdn.bootcss.com/vue/2.6.6/vue.min.js',
      'https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js',
      'https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js',
      'https://cdn.bootcss.com/axios/0.18.0/axios.min.js',
    ],
  },
};

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, "./src/styles/variables.less")//需要自行添加
      ]
    }
  },
  devServer: {
    port: 8082,
    open: false, // 配置自动启动浏览器
    proxy: {
      '/api/': {
        target: 'http://zhangjinpei.cn/',
        changeOrigin: true,
      },
      '/douban/': {
        target: 'http://api.douban.com/v2',
        changeOrigin: true,
        pathRewrite: {
          '^/douban': '',
        },
      },
      '/doubanOld/': {
        target: 'https://movie.douban.com',
        changeOrigin: true,
        pathRewrite: {
          '^/doubanOld/': '',
        },
      },
    },
  },
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: false, // 生产环境的 source map
  configureWebpack: config => {
    config.externals = externals;
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))

    config.plugin('html').tap(args => {
      args[0].cdn = IS_PROD ? cdn.pro : cdn.dev;
      return args;
    });
  },
}