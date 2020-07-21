<template>
  <div class="z-toast">
    <transition :name="mergedOption.transition">
      <div v-show="showing" :class="clazz" :id="mergedOption.id" class="z-toast z-toast-wrapper">
        <Icon v-if="option.icon" :type="option.icon" style="margin-right: 5px;"></Icon>
        <span class="z-toast-content" v-html="mergedOption.message"></span>
        <a class="z-toast-close" v-if="mergedOption.closeable" @click="close">&times;</a>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '@/components/base/icon/icon'

const DEFAULT_OPT = {
  id: 'my-toast',
  horizontalPosition: 'center',
  verticalPosition: 'top',
  parent: 'body',
  transition: 'slide-down',
  duration: 3000,
  size: '',
  type: 'info',
  icon: '',
  message: '',
  closeable: false
}

export default {
  DEFAULT_OPT: DEFAULT_OPT,
  name: 'Toast',
  components: {
    Icon
  },
  data () {
    return {
      showing: false,
      queue: [],
      option: {}
    }
  },
  computed: {
    mergedOption () {
      return Object.assign({}, DEFAULT_OPT, this.option)
    },
    clazz () {
      const { type, size, horizontalPosition, verticalPosition } = this.mergedOption
      return [
        `z-toast-${type}`,
        {
          [`z-toast-${size}`]: size,
          [`z-toast-${horizontalPosition}`]: horizontalPosition,
          [`z-toast-${verticalPosition}`]: verticalPosition
        }
      ]
    }
  },
  watch: {
    queue: function () {
      let pending = this.queue.length
      if (pending === 0) {
        return
      }
      this.showing = true
      this.option = this.queue[0]
      if ((!this.option.mode || this.option.mode === 'override') && pending > 1) {
        clearTimeout(this.timeoutId)
        this.showing = false
        this.timeoutId = null
        this.timeoutId = setTimeout(() => this.queue.shift())
      } else {
        this.timeoutId = setTimeout(() => {
          this.showing = false
          this.timeoutId = null
          setTimeout(() => this.queue.shift())
        }, this.mergedOption.duration)
      }
    }
  },
  methods: {
    close () {
      this.showing = false
      this.queue.shift()
    }
  }
}
</script>

<style lang="less" scoped>
.z-toast {
  .z-toast-wrapper {
    position: fixed;
    top: 80%;
    display: inline-block;
    z-index: 9999;
    margin: auto;
    color: white;
    font-size: 14px;
    text-align: center;
    border-radius: 4px;
    padding: 5px 10px;
    background-color: fade(@colorTextContent, 75%);
  }
  .z-toast-content {
    vertical-align: middle;
    text-align: center;
  }
  .z-toast-close {
    position: absolute;
    top: 0;
    right: 5px;
    color: white;
  }
  // position
  &-top {
    top: 80px;
    bottom: auto;
  }
  &-middle {
    top: 50%;
  }
  &-bottom {
    top: auto;
    bottom: 0;
  }
  &-right {
    right: 0;
    left: auto;
  }
  &-left {
    right: auto;
    left: 0;
  }
  &-center {
    left: 50%;
    transform: translateX(-50%);
  }

  // theme
  &-primary {
    background-color: fade(@colorPrimary, 80%);
  }
  &-info {
    background-color: fade(@colorInfo, 80%);
  }
  &-success {
    background-color: fade(@colorSuccess, 80%);
  }
  &-warning {
    background-color: fade(@colorWarning, 80%);
  }
  &-error {
    background-color: fade(@colorError, 80%);
  }

  // size
  &-small {
    padding: 2px 5px;
    font-size: 12px;
  }
  &-large {
    padding: 10px 15px;
    font-size: 16px;
  }

  // animate
  .fade-enter-active,
  .fade-leave-active,
  .fade-transition {
    -webkit-transition: opacity 0.3s ease;
    transition: opacity 0.3s ease;
  }

  .fade-enter,
  .fade-leave,
  .fade-leave-active {
    opacity: 0;
  }

  .slide-down-enter-active,
  .slide-down-leave-active,
  .slide-down-transition {
    -webkit-transition: opacity 0.3s ease, top 0.3s ease;
    transition: opacity 0.3s ease, top 0.3s ease;
  }

  .slide-down-leave-active,
  .slide-down-enter,
  .slide-down-leave {
    opacity: 0;
    top: -10% !important;
  }

  .slide-up-enter-active,
  .slide-up-leave-active,
  .slide-up-transition {
    -webkit-transition: opacity 0.3s ease, top 0.3s ease-in;
    transition: opacity 0.3s ease, top 0.3s ease-in;
  }

  .slide-up-leave-active,
  .slide-up-enter,
  .slide-up-leave {
    opacity: 0;
    top: 110% !important;
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-left-transition {
    -webkit-transition: opacity 0.3s ease, left 0.3s ease-in;
    transition: opacity 0.3s ease, left 0.3s ease-in;
  }

  .slide-left-leave-active,
  .slide-left-enter,
  .slide-left-leave {
    opacity: 0;
    left: 110% !important;
  }

  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-right-transition {
    -webkit-transition: opacity 0.3s ease, left 0.3s ease;
    transition: opacity 0.3s ease, left 0.3s ease;
  }

  .slide-right-leave-active,
  .slide-right-enter,
  .slide-right-leave {
    opacity: 0;
    left: -1000px !important;
  }
}
</style>
