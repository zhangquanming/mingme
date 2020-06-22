<template>
  <div class="app-footer">
    <div class="app-footer-cont">
      <div class="social">
        <a target="_blank" href="#"><i class="iconfont iconwenti2"></i></a>
        <a target="_blank" href="#"><i class="iconfont iconwenti2"></i></a>
        <a target="_blank" href="#"><i class="iconfont iconwenti2"></i></a>
      </div>

      <div class="contact">
        <span class="cat"> <i class="iconfont iconwenti2"></i> <a target="_blank" href="#">hello {at} mingme.com</a></span>
        <span class="cat"> <i class="iconfont iconwenti2"></i> 166 1975 2836</span>
        <span class="cat"> <i class="iconfont iconwenti2"></i> <a target="_blank" href="#">419654548@qq.com</a></span>
      </div>

      <div class="copyright">© zhang quan ming</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style lang="less" scoped>
.app-footer {
  width: 100%;
  height: @heightFooter;
  background-color: #ffd000;
  padding: 50px 0;
  .app-footer-cont {
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    .social {
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        color: #fff;
        transition: color 0.3s;
        width: 40px;
        height: 40px;
        margin: 0 20px;
        &:hover {
          color: #000;
        }
        i {
          font-size: 40px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
    .contact {
      padding: 0 100px;
      margin-bottom: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      .cat {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        i {
          display: inline-block;
          font-size: 18px;
          margin-right: 10px;
        }
      }
    }
    .copyright {
      text-align: center;
      letter-spacing: 1px;
      font-size: 12px;
      font-weight: 400;
    }
  }
}
</style>
