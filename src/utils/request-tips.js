import store from '@/store/'
import webStore from '@/utils/storage'

// 格式化错误信息
function transformErrMsg (response) {
  let message = ''
  switch (response.status) {
    case 400:
      message = '错误请求'
      break
    case 401:
      message = '未授权 或 授权失效，请重新登录'
      break
    case 403:
      message = '拒绝访问'
      break
    case 404:
      message = `请求错误,未找到该资源!<br/>${response.config.url}`
      break
    case 405:
      message = '请求方法未允许'
      break
    case 408:
      message = '请求超时'
      break
    case 500:
      message = '服务器端出错'
      break
    case 501:
      message = '网络未实现'
      break
    case 502:
      message = '网络错误'
      break
    case 503:
      message = '服务不可用'
      break
    case 504:
      message = '网络超时'
      break
    case 505:
      message = 'http版本不支持该请求'
      break
    default:
      message = `连接错误${response.status}`
  }
  return {
    message,
    status: response.status
  }
}

// 检查 HTTP 状态码，做一些处理
function checkHttpStatus (response) {
  // 成功或者协商缓存直接返回
  if (response && (response.status === 200 || response.status === 304)) {
    return response
  }
  // 登录过期了，清空token,userInfo缓存
  if (response && response.status === 401) {
    webStore.sessionClear()
    store.dispatch('changeUserInfo', null)
  }
  // 其他直接返回一个错误
  return Promise.reject(transformErrMsg(response))
}

// 检查后端返回状态
function checkBackendCode (res) {
  if (res && res.data) {
    if (res.data.code === 'success' || res.data.code === 200) {
      return res.data
    } else {
      console.log('后端给出的异常:', res)
      return Promise.reject(res.data)
    }
  }
}

export { checkHttpStatus, checkBackendCode }