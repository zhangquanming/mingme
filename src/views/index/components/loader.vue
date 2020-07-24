<template>
  <div class="loader" v-if="isLoading">
    <div ref="loaderContainer" class="loader-container">
      <div class="loader-cache"></div>
      <transition name="yellowleft" @after-enter="loadingEnd" :appear="true">
        <div ref="loaderYellow" class="loader-yellow"></div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  data () {
    return {
      isLoading: true
    }
  },
  computed: {},
  watch: {},
  mounted () {
    this.loadingImgLoad()
  },
  methods: {
    loadingImgLoad () {
      let _that = this
      let myImage = new Image()
      myImage.src = '/static/images/loader-cache.png'
      myImage.onload = function () {
        _that.$refs.loaderContainer.style.backgroundColor = '#000'
      }
    },
    loadingEnd () {
      this.$refs.loaderYellow.style.left = '-6px'
      this.isLoading = false
      document.documentElement.scrollTop = 0
      this.$emit('loaderEnd')
    }
  }
}
</script>

<style lang="less" scoped>
.loader {
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .loader-container {
    position: absolute;
    width: 194px;
    height: 120px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    overflow: hidden;
    .loader-cache {
      position: absolute;
      z-index: 1020;
      width: 194px;
      height: 120px;
      background-color: transparent;
      background-image: url(/static/images/loader-cache.png);
      background-size: 194px 120px;
    }
    .loader-yellow {
      position: absolute;
      z-index: 1010;
      background-image: url(/static/images/loader-yellow.png);
      width: 194px;
      height: 120px;
      left: -6px;
      &.yellowleft-enter {
        left: -194px;
      }
      &.yellowleft-enter-to {
        left: -6px;
        transition: left 0.5s;
      }
    }
  }
}
</style>
