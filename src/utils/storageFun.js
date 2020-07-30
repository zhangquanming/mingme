const { localStorage, sessionStorage } = window

// 组合使用构造函数模式和原型模式
function Storage (type) {
  this.storageType = type
}
Storage.prototype = {
  constructor: Storage,
  setItem (key, value) {
    this.storageType.setItem(key, JSON.stringify(value))
  },
  getItem (key) {
    const value = this.storageType.getItem(key)
    // 对 value 进行反序列化
    let valueResult
    try {
      valueResult = JSON.parse(value)
    } catch (err) {
      valueResult = value
    }
    return valueResult
  },
  removeItem (key) {
    this.storageType.removeItem(key)
  },
  clear () {
    this.storageType.clear()
  },
  // 批量获取
  multiGet (keys) {
    const values = {}
    keys.forEach(key => {
      values[key] = this.getItem(key)
    })
    return values
  },
  // 批量删除
  multiRemove (keys) {
    keys.forEach(key => {
      this.removeItem(key)
    })
  }
}
const local = new Storage(localStorage)
const session = new Storage(sessionStorage)

export default {
  local,
  session
}