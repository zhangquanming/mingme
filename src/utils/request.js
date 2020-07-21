import qs from 'qs'
import webStore from '@/utils/storage'
// 创建实例
const instance = axios.create({})

const { CancelToken } = axios
const pending = []

// 设置 baseURL
instance.defaults.baseURL = process.env.VUE_APP_API_BASEURL
// 设置请求默认属性
instance.defaults.timeout = 20000
instance.defaults.headers['Access-Control-Allow-Origin'] = '*'
instance.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
instance.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8'
instance.defaults.responseType = 'json'
// 数据序列化，请求发送到服务器之前修改该请求，此方法只适用于PUT、POST和PATCH方法中
instance.defaults.transformRequest = [
  (data, header) => {
    if (header['Content-Type'] && header['Content-Type'].indexOf('json') > -1) {
      return JSON.stringify(data)
    }
    return qs.stringify(data, { arrayFormat: 'repeat' })
  }
]

// 取消重复请求函数
const cancelPending = config => {
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
instance.interceptors.request.use(
  config => {
    // 发起请求时，取消掉当前正在进行的相同请求
    cancelPending(config)
    config.cancelToken = new CancelToken(res => {
      pending.push({ UrlPath: config.url, Cancel: res })
    })

    // 如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
    if (config.method === 'get') {
      config.paramsSerializer = function (params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }

    // 统一设置 token
    const token = webStore.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // 设置自定义 headers
    config.headers = Object.assign({}, config.headers, config.customOptins)
    // 设置自定义 baseURL
    if (config.customOptins && config.customOptins.baseURL) {
      config.baseURL = config.customOptins.baseURL
    }
    // 设置自定义 timeout
    if (config.customOptins && config.customOptins.timeout) {
      config.timeout = config.customOptins.timeout
    }
    // 设置自定义 responseType
    if (config.customOptins && config.customOptins.responseType) {
      config.responseType = config.customOptins.responseType
    }

    return config
  },
  error => Promise.reject(error)
)

// 请求完成之后的拦截处理
instance.interceptors.response.use(
  response => {
    cancelPending(response)
    // 请求结果中如果返回 token 则更新 token，或者登陆接口中返回的时候再做处理
    const { authorization } = response.headers
    authorization && webStore.setToken(authorization)
    return response
  },
  error => {
    if (error.response) {
      return Promise.resolve(error.response)
    } else {
      return Promise.reject({
        code: 'cancel',
        message: '无 response 可能 cancel，取消上次请求'
      })
    }
  }
)

export default {
  get (url, params, options) { },
  post (url, data, options) { },
  put (url, data, options) { },
  delete (url, data, options) { }
}
