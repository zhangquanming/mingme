import qs from 'qs'
import { checkHttpStatus, checkBackendCode } from './request-tips'
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

const ignoreUrlList = []
// 取消重复请求函数
const cancelPending = config => {
  // 过滤 url
  const isIgnoreUrl = ignoreUrlList.filter(item => config.url.indexOf(item) > -1).length > 0
  pending.forEach((item, index) => {
    if (!isIgnoreUrl) {
      if (config) {
        if (item.UrlPath === config.url) {
          item.Cancel() // 取消请求
          pending.splice(index, 1) // 移除当前请求记录
        }
      } else {
        item.Cancel() // 取消请求
        pending.splice(index, 1) // 移除当前请求记录
      }
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
        message: '请求失败，请检查网络'
      })
    }
  }
)

export default {
  get (url, params, options) {
    return instance({
      method: 'get',
      url,
      params, // get 请求时带的参数 叫 'params'
      customHeaders: { ...options }
    })
      .then(response => checkHttpStatus(response))
      .then(res => checkBackendCode(res))
      .catch(err => {
        // 可配置需不需要要自动报错 默认会自动报错 如不需要 需在请求中明确将 hideAutoError 设置为 true
        if (options && options.hideAutoError && err.code !== 'cancel') {
          return Promise.reject(err)
        } else {
          // window.$toast 是在 App.vue 中 声明的
          window.$toast.error(err.message)
          return Promise.reject(err)
        }
      })
  },
  post (url, data, options) {
    return instance({
      method: 'post',
      url,
      data, // post 请求时带的参数 叫 'data'
      customHeaders: { ...options }
    })
      .then(response => checkHttpStatus(response))
      .then(res => checkBackendCode(res))
      .catch(err => {
        // 可配置需不需要要自动报错 默认会自动报错 如不需要 需在请求中明确将 hideAutoError 设置为 true
        if (options && options.hideAutoError && err.code !== 'cancel') {
          return Promise.reject(err)
        } else {
          // window.$toast 是在 App.vue 中 声明的
          window.$toast.error(err.message)
          return Promise.reject(err)
        }
      })
  },
  put (url, data, options) {
    return instance({
      method: 'put',
      url,
      data, // post 请求时带的参数 叫 'data'
      customHeaders: { ...options }
    })
      .then(response => checkHttpStatus(response))
      .then(res => checkBackendCode(res))
      .catch(err => {
        // 可配置需不需要要自动报错 默认会自动报错 如不需要 需在请求中明确将 hideAutoError 设置为 true
        if (options && options.hideAutoError && err.code !== 'cancel') {
          return Promise.reject(err)
        } else {
          // window.$toast 是在 App.vue 中 声明的
          window.$toast.error(err.message)
          return Promise.reject(err)
        }
      })
  },
  delete (url, data, options) {
    return instance({
      method: 'delete',
      url,
      data, // post 请求时带的参数 叫 'data'
      customHeaders: { ...options }
    })
      .then(response => checkHttpStatus(response))
      .then(res => checkBackendCode(res))
      .catch(err => {
        // 可配置需不需要要自动报错 默认会自动报错 如不需要 需在请求中明确将 hideAutoError 设置为 true
        if (options && options.hideAutoError && err.code !== 'cancel') {
          return Promise.reject(err)
        } else {
          // window.$toast 是在 App.vue 中 声明的
          window.$toast.error(err.message)
          return Promise.reject(err)
        }
      })
  }
}
