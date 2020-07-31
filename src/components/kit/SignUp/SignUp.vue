<template>
  <modal v-if="showSignUpModal" @close="handleCloseModel">
    <h3 slot="header">注册</h3>
    <div slot="body">
      <input class="common-input" v-model="formData.userName" type="text" placeholder="用户名" autocomplete="off" />
      <!-- <input class="common-input" v-model="formData.phone" type="text" placeholder="手机号" /> -->
      <input class="common-input" name="userName" type="text" v-model="formData.email" value=" " placeholder="邮箱" autocomplete="off" />
      <input class="common-input" v-model="formData.password" type="password" placeholder="密码" autocomplete="off" />
      <input class="common-input" v-model="formData.confirmPassword" type="password" placeholder="确认密码" autocomplete="off" />
    </div>
    <div slot="footer">
      <btn theme="success" long @click="singUp" :loading="isSignUpLoading">确定注册</btn>
      <btn theme="primary" long @click="goToLogIn" style="margin-top: 10px;">直接登录</btn>
    </div>
  </modal>
</template>

<script>
import Modal from '@/components/base/Modal/Modal'
import Btn from '@/components/base/Btn/Btn'

import api from '@/api/'
import webStore from '@/utils/storage'
import { validatorsExp } from '@/utils/validate'

const { mapGetters, mapActions } = Vuex

export default {
  components: {
    Modal,
    Btn
  },
  name: 'SignUp',
  data () {
    return {
      formData: {},
      isSignUpLoading: false
    }
  },
  computed: {
    ...mapGetters([
      'showSignUpModal'
    ])
  },
  methods: {
    ...mapActions({
      toggleSignUpModal: 'toggleSignUpModal',
      handleChangeUserInfo: 'changeUserInfo'
    }),

    /**
     * @desc 请求 去注册
     */
    requestSingUp () {
      const { userName, email, password } = this.formData
      const params = {
        userName,
        email,
        password
      }
      this.isSignUpLoading = true
      api
        .PostUserSignup(params)
        .then(res => {
          webStore.setUserInfo(res.result)
          this.handleChangeUserInfo(res.result)
          this.isSignUpLoading = false
          this.$toast.success('注册成功')
          this.handleCloseModel()
        })
        .catch(() => {
          this.isSignUpLoading = true
        })
    },

    /**
     * @desc 按钮点击事件 注册
     */
    singUp () {
      this.validateFormData().then(isvalid => {
        if (isvalid) {
          this.requestSingUp()
        }
      })
    },

    /**
     * @desc 按钮点击事件 去登陆
     */
    goToLogIn () {
      this.$store.dispatch('toggleSignUpModal', false)
      this.$store.dispatch('toggleSignInModal', true)
    },

    /**
     * @desc 校验表单数据是否符合要求
     */
    validateFormData () {
      const { userName, email, password, confirmPassword } = this.formData
      return new Promise(resolve => {
        if (!userName) {
          this.$toast.error('请填写昵称！')
          return resolve(false)
        }
        if (!validatorsExp.email.test(email)) {
          this.$toast.error('请正确填写邮箱！')
          return resolve(false)
        }
        if (!password) {
          this.$toast.error('请填写密码！')
          return resolve(false)
        }
        if (password.length < 6) {
          this.$toast.error('密码至少为 6 位')
          return resolve(false)
        }
        if (!confirmPassword) {
          this.$toast.error('请再次确认密码')
          return resolve(false)
        }
        if (password !== confirmPassword) {
          this.$toast.error('密码不一致')
          return resolve(false)
        }
        return resolve(true)
      })
    },

    /**
     * @desc 关闭弹框
     */
    handleCloseModel () {
      this.toggleSignUpModal(false)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
