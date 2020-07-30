<template>
  <div ref="ZVideo" class="z-video" v-loading="!isReadyPlay" @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
    <div class="z-video-box">
      <video class="z-video-box-player" id="videoPlayer" :src="src" :poster="poster" type="video/webm" preload="metadata" @click="handleClickVideo" @dblclick="handleDbClickVideo">
        Your browser does not support the video tag.
      </video>
      <div v-show="!isPlaying" class="z-video-box-mask" @click="handleTogglePlay">
        <icon class="z-video-box-mask-icon" type="iconplaycircle" :size="50" color="fff" />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/base/Icon/Icon'
export default {
  name: 'ZVideo',
  components: {
    Icon
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    poster: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isReadyPlay: false,
      isPlaying: false
    }
  },
  computed: {},
  watch: {
    isPlaying (value) {
      if (value) {
        this.videoPlayer.play()
      } else {
        this.videoPlayer.pause()
      }
    }
  },
  created () { },
  mounted () { },
  methods: {
    /**
     * @desc mousemove
     */
    handleMouseMove () { },
    /**
     * @desc mouseleave
     */
    handleMouseLeave () { },
    /**
     * @desc 单击 video
     */
    handleClickVideo () { },
    /**
     * @desc 双击 video
     */
    handleDbClickVideo () { },
    /**
     * @desc 切换播放
     */
    handleTogglePlay () { }
  }
}
</script>

<style lang="less" scoped>
.z-video {
  position: relative;
  width: 100%;
  overflow: hidden;
  &-box {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 0;
    &-player {
      width: 100%;
      height: 100%;
      background: #000;
    }
    &-mask {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      &-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        font-size: 50px;
        cursor: pointer;
      }
    }
  }
  &-control {
    display: table;
    width: 100%;
    &-show {
      bottom: 0px;
    }
    &-hide {
      bottom: -70px;
    }
    &-wrap {
      width: 100%;
      position: absolute;
      height: 60px;
      padding-right: 15px;
      padding-left: 15px;
      color: #eaf6f9;
      background-color: #2196f3;
      transition: all 0.5s ease;
    }
    & > div {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      width: 40px;
      height: 60px;
    }
    &-play {
      .iconfont {
        padding: 10px;
        cursor: pointer;
      }
    }
    &-progress {
      width: auto !important;
      padding: 0 10px;
    }
    &-duration {
      white-space: nowrap;
      &::before {
        content: ' / ';
      }
    }
    &-sound {
      .iconfont {
        padding: 10px;
        cursor: pointer;
      }
    }
    &-volume {
      width: 120px !important;
      padding: 0 10px;
    }
    &-screen {
      .iconfont {
        padding: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
