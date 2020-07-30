// 本地存储
import storageFun from './storageFun'

const store = {}

// 本地local存储 方法名与key值对应表
const storeLocal = {}

// 本地session存储 方法名与key值对应表
const storeSession = {
  Token: 'token', // token
  UserInfo: 'userInfo' // 用户信息
}

// 本地存储工厂函数，生成 set get remove 方法
const storeFactory = (funcName, key, type = 'local') => {
  store[`set${funcName}`] = data => {
    storageFun[type].setItem(key, data)
  }
  store[`get${funcName}`] = () => storageFun[type].getItem(key)
  store[`remove${funcName}`] = () => storageFun[type].removeItem(key)
}

// 循环添加 local 存储方法
Object.keys(storeLocal).forEach(name => {
  storeFactory(name, storeLocal[name], 'local')
})

// 循环添加 session 存储方法
Object.keys(storeSession).forEach(name => {
  storeFactory(name, storeSession[name], 'session')
})

store.localClear = () => storageFun.local.clear()
store.sessionClear = () => storageFun.session.clear()

export default store