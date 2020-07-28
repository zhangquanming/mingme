# mingme

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 目录结构
```
.
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── App.vue         // 根组件
│   ├── main.js         // 入口js文件
│   ├── api/            // api 请求
│   ├── assets/         // 静态资源
│   │   └── images/
│   ├── components/     // 组件
│   │   ├── base/         // 公共组件
│   │   ├── framework/    // 布局组件
│   │   └── kit/          // 业务组件
│   ├── directive/      // 全局 自定义指令
│   ├── filters/        // 全局 filter
│   ├── mixins/         // 混入
│   ├── router/         // 路由
│   ├── store/          // 状态管理
│   ├── styles/         // 公共样式、全局样式
│   ├── utils/          // 工具类
│   └── views/          // 视图文件
│       ├── admin/         // 后台管理模块
│       ├── blog/          // 个人博客模块
│       ├── ebook/         // 网路小说模块
│       ├── index          // 首页模块
│       ├── movie          // 豆瓣电影模块
│       └── resource       // 前端资源模块
├── .env                // 默认环境变量
├── .env.development    // 开发环境变量
├── .env.production     // 生产环境变量
├── .eslintignore       // eslint过滤检查
├── .eslintrc.js        // eslint配置
├── README.md           // 项目介绍
├── babel.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
├── vue.config.js       // 配置文件
└── yarn.lock
```