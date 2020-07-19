import qs from 'qs'
// 创建实例，初始化默认参数
const instance = axios.create({})

const { CancelToken } = axios
let pending = []

// 设置 baseURL
instance.defaults.baseURL = process.env.VUE_APP_API_BASEURL
// 设置请求默认属性
instance.defaults.timeout = 20000
instance.defaults.headers['Access-Control-Allow-Origin'] = '*'
instance.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
instance.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8'
instance.defaults.responseType = 'json'
// 数据序列化
instance.defaults.transformRequest = [
  (data, header) => {
    if (header['Content-Type'] && header['Content-Type'].indexOf('json') > -1) {
      return JSON.stringify(data)
    }
    return qs.stringify(data, { arrayFormat: 'repeat' })
  }
]

// 取消重复请求函数
let cancelPending = config => {
  pending.forEach((item, index) => {
    if (config) {
      if (item.UrlPath === config.url) {
        item.Cancel() // 取消请求
        pending.splice(index, 1) // 移除当前请求记录
      }
    } else {
      item.Cancel() // 取消请求
      pending.splice(index, 1) // 移除当前请求记录
    }
  })
}

// 请求发送之前的拦截处理
instance.interceptors.request.use(config => {
  // 发起请求时，取消掉当前正在进行的相同请求
  cancelPending(config)
  config.cancelToken = new CancelToken(res => {
    pending.push({ UrlPath: config.url, Cancel: res })
  })

  if (config.method === 'get') {
    // 如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
    config.paramsSerializer = function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }
})

export default {
  get (url, params, options) { },
  post (url, data, options) { },
  put (url, data, options) { },
  delete (url, data, options) { }
}
