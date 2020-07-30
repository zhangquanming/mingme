import api from '@/api/'

const actions = {
  async getCategoryList ({ commit }) {
    const res = await api.GetCategory()
    commit('setCatgoryList', res && res.result ? res.result : [])
  },
  toggleSignInModal ({ commit }, isShow) {
    commit('setSignInModal', isShow)
  },
  toggleSignUpModal ({ commit }, isShow) {
    commit('setSignUpModal', isShow)
  },
  changeUserInfo ({ commit }, data) {
    commit('setUserInfo', data)
  },
  changeHighLightIndex ({ commit }, data) {
    commit('setHighLightIndex', data)
  }
}
export default actions