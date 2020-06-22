<template>
  <div class="logo" :style="styles" @click="handleClick">
    <img src="/static/images/logo-lm-v3.png" alt="Mingme" />
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    w: {
      type: [Number, String],
      required: true
    },
    h: {
      type: [Number, String],
      default: 'auto'
    }
  },
  computed: {
    styles () {
      return {
        width: typeof this.w === 'number' ? `${this.w}px` : this.w,
        height: typeof this.h === 'number' ? `${this.h}px` : this.h
      }
    }
  },
  methods: {
    handleClick (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 310;
  overflow: hidden;
  display: flex;
  align-items: center;
  img {
    width: 100%;
    max-height: 100%;
  }
}
</style>
