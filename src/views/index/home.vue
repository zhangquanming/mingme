<template>
  <div>
    <Loader @loaderEnd="loaderEnd"></Loader>
    <div class="scene">
      <!-- 顶部导航-->
      <header :style="headTop" ref="header">
        <div class="content">
          <router-link to="/">
            <logo :w="180" color="black" />
          </router-link>
          <nav class="menu">
            <div class="menu-slider">
              <div class="bar" :style="barWidth"></div>
            </div>
            <ul>
              <li class="menu-part"><a id="link-chap1" class="iconfont iconwangzhi chapters" @click="handleNav('home')" data-who="home">Home</a></li>
              <li class="menu-part"><a id="link-chap2" class="iconfont iconwangzhi chapters" @click="handleNav('services')" data-who="services">Services</a></li>
              <li class="menu-part"><a id="link-chap3" class="iconfont iconwangzhi chapters" @click="handleNav('projects')" data-who="projects">Work</a></li>
            </ul>
          </nav>
          <div class="contact">
            <span class="iconfont iconwangzhi mail-btn" @click="handleNav('contact')"></span>
          </div>
        </div>
      </header>
      <!-- 顶部导航结束 -->
      <!-- 初始内容 -->
      <section class="vertical-center" id="studio" v-if="studioShow">
        <div class="wrap" :style="textShow">
          <div class="inner">
            <div class="bloc home-bloc1" :style="homeBloc1">
              <hgroup>
                <h1 :style="homeBloc1H1"><span>Hello, World!</span></h1>
                <h2 :style="homeBloc1H2">
                  <span>Combining branding, design<br />&amp; advanced techn<b>o</b>l<b>o</b>gy.</span>
                </h2>
              </hgroup>
            </div>
            <HomeNav :style="homeBloc3"></HomeNav>
          </div>
        </div>
      </section>
      <!-- 初始内容结束 -->
      <!-- 中间四方块 -->
      <section id="services" ref="services" :style="servicesAnimate">
        <div class="services-lid" data-id="holistic" id="first-lid" ref="firstLid">
          <div id="first-lid-in" ref="firstLidIn">
            <p class="s-text1"><a href="#" data-id="holistic" class="menu-elem">ART DIRECTION</a><br /><span>HOLISTIC</span></p>
            <p class="s-text2">We have an interest in media, the mysterious alliance between the message, the tool and graphic design.</p>
          </div>
        </div>
        <div class="services-lid" id="second-lid" ref="secondLid">
          <div id="second-lid-in" ref="secondLidIn">
            <p class="s-text3">A project is vital.<br />What is vital is simple.<br />A project is simple!</p>
          </div>
        </div>

        <div id="services-middle"></div>

        <div class="services-lid menu-elem" data-id="systemic" id="third-lid" ref="thirdLid">
          <div id="third-lid-in" ref="thirdLidIn">
            <p class="s-text1"><a href="#" data-id="systemic" class="menu-elem">ORGANIZED SYSTEM</a><br /><span>SYSTEMIC</span></p>
            <p class="s-text2">We give your projects an architecture that links the minds, a structure that stabilizes and an organization that energizes.</p>
          </div>
        </div>
        <div class="services-lid menu-elem" data-id="organic" id="fourth-lid" ref="fourthLid">
          <div id="fourth-lid-in" ref="fourthLidIn">
            <p class="s-text1"><a href="#" data-id="organic" class="menu-elem">ADVANCED TECHNOLOGY</a><br /><span>ORGANIC</span></p>
            <p class="s-text2">Whether if you are at your desk, on the train or drinking a coffee, we adapt our tools at your own pace.</p>
          </div>
        </div>
      </section>
      <!-- 中间四方块结束 -->

      <section id="projects" ref="projects">
        <!-- block blanc qui descend -->
        <div id="chapter-title" ref="proTitle" v-show="chapterTilShow">
          <div class="bike" ref="proBike"></div>
          <div class="label" v-show="labelShow">众里寻他千百度。<br />蓦然回首，那人却在，灯火阑珊处。</div>
        </div>
        <div id="projects-chapter" ref="proChapter"></div>
        <!-- #projects-chapter -->

        <!-- block gris qui monte -->
        <div id="projects-elevator" ref="proElevator">
          <div id="ci" ref="proCi">
            <!-- Conteneur Projects -->
            <div class="p-container" data-locked="false">
              <div class="p-block p-center" id="ptop">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-1.jpg" alt="New Website for Christian Louboutin" />
                  <div class="caption">
                    <span>New Website for Christian Louboutin</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
            </div>
            <!-- .p-container -->
            <div class="p-container">
              <div class="p-block p-left" id="p1l" data-x="-600" ref="p1l">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-2.jpg" alt="Monsieur London" />
                  <div class="caption">
                    <span>Monsieur London</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
              <div class="p-block p-right" id="p1r" data-x="-600" ref="p1r">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-3.jpg" alt="Field.io" />
                  <div class="caption">
                    <span>Field.io</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
            </div>
            <!-- .p-container -->
            <div class="p-container">
              <div class="p-block p-left " id="p2l" data-x="-1600" ref="p2l">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-4.jpg" alt="Cubink" />
                  <div class="caption">
                    <span>Cubink</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
              <div class="p-block p-right" id="p2r" data-x="-1600" ref="p2r">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-5.jpg" alt="Postmatter" />
                  <div class="caption">
                    <span>Postmatter</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
            </div>
            <!-- .p-container -->

            <div class="p-container">
              <div class="p-block p-left" id="p3l" data-x="-3600" ref="p3l">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-6.jpg" alt="Affinion International" />
                  <div class="caption">
                    <span>Affinion International</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
              <div class="p-block p-right" id="p3r" data-x="-3600" ref="p3r">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-7.jpg" alt="Beauty for Christian Louboutin" />
                  <div class="caption">
                    <span>Beauty for Christian Louboutin</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
            </div>
            <!-- .p-container -->

            <div class="p-container">
              <div class="p-block p-left" id="p4l" data-x="-5600" ref="p4l">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-8.jpg" alt="Serge Betsen" />
                  <div class="caption">
                    <span>Serge Betsen</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
              <div class="p-block p-right " id="p4r" data-x="-5600" ref="p4r">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-9.jpg" alt=" Couturelab" />
                  <div class="caption">
                    <span>Couturelab</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
            </div>
            <!-- .p-container -->

            <div class="p-container">
              <div class="p-block p-left" id="p5l" data-x="-7600" ref="p5l">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-10.jpg" alt="La Moulade" />
                  <div class="caption">
                    <span>La Moulade</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
              <div class="p-block p-right" id="p5r" data-x="-7600" ref="p5r">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-11.jpg" alt="Caratime.com" />
                  <div class="caption">
                    <span>Caratime.com</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
            </div>
            <!-- .p-container -->

            <div class="p-container" data-x="-9600">
              <div class="p-block p-center" id="p6" ref="p6">
                <span class="project-pic">
                  <img src="@/assets/images/lm-project-12.jpg" alt="Barnaby Roper" />
                  <div class="caption">
                    <span>Barnaby Roper</span>
                  </div>
                </span>
                <!--/.project-pic-->
              </div>
            </div>
            <!-- .p-container -->
          </div>
          <!-- #ci -->
        </div>
        <!-- #projects-elevator -->
      </section>
      <footer :style="footerBottom">
        <div class="iconfont iconwangzhi scrolldown"></div>
      </footer>
      <div id="contact-footer-support" ref="contactFooterSupport"></div>
      <section id="contact-footer" ref="contactFooter">
        <div id="contact-shoes" ref="contactShoes"></div>
        <h2>
          Let's talk about your project,<br />
          or just come and say <b>hello!</b>
        </h2>
        <app-footer></app-footer>
      </section>
    </div>
  </div>
</template>

<script>
import Loader from './loader'
import Logo from '@/components/base/logo/logo'
import HomeNav from './home-nav'
import AppFooter from '@/components/framework/app-footer/app-footer'

export default {
  name: 'home',
  components: {
    Loader,
    Logo,
    HomeNav,
    AppFooter
  },
  data () {
    return {
      headTop: {
        top: '-500px'
      },
      footerBottom: {
        bottom: '-500px'
      },
      textShow: {
        opacity: 0
      },
      barWidth: {
        width: '75px'
      },
      studioShow: true,
      homeBloc1: {
        left: 0
      },
      homeBloc1H1: {
        left: 0
      },
      homeBloc1H2: {
        left: 0
      },
      homeBloc3: {
        left: 0
      },
      servicesAnimate: {
        left: '0px',
        top: '0px',
        transform: `rotate(0deg)`
      },
      chapterTilShow: false,
      labelShow: true,
      mingme: {
        // -----------------------
        // @constants
        // ------------------------
        URL: 'http://localhost:8082/#/',
        CHAPTERS: { home: 0, services: 1, projects: 2, contact: 3 },
        CHAPTER: 0,
        SCROLL: { ratio: 190 },
        // ------------------------
        // @environment vars
        // -------------------------
        Screen: { width: 0, height: 0 },
        POS: 0,
        X: 0,
        Multiplier: 10,
        SceneHeight: 20000 - window.innerHeight,
        indicator: {
          multiplier: 10 / 8,
          divisor: 8 / 10
        },
        pivotPoint: { x: 0, y: 0 },
        // ------------------------
        // @action variables
        // ------------------------
        x: 0,
        y: 0,
        z: 0,
        zSquared: 0,
        rotation: 0,
        anim: { left: 0, top: 0 },
        bikeHere: false,
        mouseMoving: false
      }
    }
  },
  computed: {},
  watch: {},
  created () { },
  mounted () {
    this._myInit()
    this.mingme.X = this.mingme.SceneHeight / this.mingme.SCROLL.ratio
    this.mingme.POS = document.documentElement.scrollTop
  },
  methods: {
    listenerFunction () {
      window.addEventListener('scroll', this.handleScroll, true)
      window.addEventListener('mousemove', this.playFooter, true)
      window.addEventListener('resize', this.resetWH, true)
    },
    handleScroll () {
      //   console.log(window.pageYOffset)
      let newX = window.pageYOffset / this.mingme.X
      let oldX = this.mingme.POS / this.mingme.X
      let delta = newX - oldX
      this.mingme.POS = window.pageYOffset
      let PC = this.mingme.POS / this.mingme.X
      this.newControls(PC, delta)
    },
    handleNav (type) {
      let x
      switch (type) {
        case 'home':
        default:
          x = 0
          break
        case 'services':
          x = 70 * this.mingme.X + 0.33
          break
        case 'projects':
          x = 128 * this.mingme.X + 0.66
          break
        case 'contact':
          x = 200 * this.mingme.X
          break
      }
      this._move(x)
      return false
    },
    loaderEnd () {
      this.listenerFunction()
      this._initHome()
    },
    moveHomeBlockDownUp (pos) {
      this.homeBloc3.left = -pos * this.mingme.Multiplier * 2.5 + 'px'
      if (pos <= 0) {
        this.homeBloc3.left = '0px'
        this.homeBloc1H2.left = '0px'
        this.homeBloc1H1.left = '0px'
        this.footerBottom.bottom = '0px'
        // Lamoulade.$services.css({ left: 0 + 'px', top: 0 + 'px' })
      }
      if (pos > 4.5) {
        this.homeBloc1H2.left = (4.5 - pos) * this.mingme.Multiplier * 2.5 + 'px'
      }
      if (pos > 9) {
        this.homeBloc1H1.left = (9 - pos) * this.mingme.Multiplier * 2.5 + 'px'
        this.footerBottom.bottom = (9 - pos) * this.mingme.Multiplier * 5 + 'px'
      }
    },
    moveRotateStudioDown (pos) {
      this.mingme.pivotPoint.x = parseInt(this.mingme.Screen.width / 2, 10)
      this.mingme.pivotPoint.y = parseInt((this.mingme.Screen.height / 5) * 2, 10)
      let maxLeft = -3000 + this.mingme.pivotPoint.x
      let maxTop = -3000 + (this.mingme.pivotPoint.y * 3) / 2
      this.mingme.rotation = (12.5 - pos) * 2.3
      if (this.mingme.rotation < -21) {
        this.mingme.rotation = -21
      }
      this.mingme.anim.left = -((-12.5 + pos) * this.mingme.Multiplier * 9 + 1000)
      if (this.mingme.anim.left < maxLeft) {
        this.mingme.anim.left = maxLeft
      }
      this.mingme.anim.top = -((-12.5 + pos) * this.mingme.Multiplier * 5 + 1800)
      if (this.mingme.anim.top < maxTop) {
        this.mingme.anim.top = maxTop
      }
      this.servicesAnimate = {
        left: this.mingme.anim.left + 'px',
        top: this.mingme.anim.top + 'px',
        transform: `rotate(${this.mingme.rotation}deg)`
      }
    },
    moveRotateStudioUp (pos) {
      this.mingme.pivotPoint.x = parseInt(this.mingme.Screen.width / 2, 10)
      this.mingme.pivotPoint.y = parseInt((this.mingme.Screen.height / 5) * 2, 10)
      let maxLeft = -3000 + this.mingme.pivotPoint.x
      let maxTop = -3000 + (this.mingme.pivotPoint.y * 3) / 2
      this.mingme.rotation = (12.5 - pos) * 2.3
      if (this.mingme.rotation < -21) {
        this.mingme.rotation = -21
      }
      if (this.mingme.rotation > 0) {
        this.mingme.rotation = 0
      }
      this.mingme.anim.left = -((-12.5 + pos) * this.mingme.Multiplier * 9 + 1000)
      if (this.mingme.anim.left < maxLeft) {
        this.mingme.anim.left = maxLeft
      }
      if (this.mingme.anim.left > 0) {
        this.mingme.anim.left = 0
      }
      this.mingme.anim.top = -((-12.5 + pos) * this.mingme.Multiplier * 5 + 1800)
      if (this.mingme.anim.top < maxTop) {
        this.mingme.anim.top = maxTop
      }
      if (this.mingme.anim.top > 0) {
        this.mingme.anim.top = 0
      }
      this.servicesAnimate = {
        left: this.mingme.anim.left + 'px',
        top: this.mingme.anim.top + 'px',
        transform: `rotate(${this.mingme.rotation}deg)`
      }
    },
    showStudioFirstLidDown (pos) {
      //   Lamoulade.$lid.first.addClass('menu-elem')
      this.$refs.thirdLid.style.height = (pos - 42) * this.mingme.Multiplier * 10 + 'px'

      if (pos > 46) {
        let fourthLidWidthMax = 3000
        let fourthLidWidth = (pos - 46) * this.mingme.Multiplier * 10
        if (fourthLidWidth > fourthLidWidthMax) {
          fourthLidWidth = fourthLidWidthMax
        }
        if (fourthLidWidth < 5) {
          fourthLidWidth = 0
        }
        this.$refs.fourthLid.style.width = `${fourthLidWidth}px`
        this.$refs.firstLidIn.style.display = 'block'
        this.$refs.firstLidIn.style.opacity = (pos - 46) / 10
      }
    },
    showStudioSecondLidDown (pos) {
      this.studioShow = false
      this.$refs.secondLidIn.style.display = 'block'
      let left = (pos - 63) * this.mingme.Multiplier * 4 - 150
      if (left >= 0) {
        left = 0
      }
      this.$refs.secondLidIn.style.opacity = (pos - 63) / 10
      this.$refs.secondLidIn.style.left = `${left}px`
    },
    showStudioThirdLidDown (pos) {
      this.$refs.thirdLidIn.style.display = 'block'
      this.$refs.thirdLidIn.style.opacity = (pos - 54) / 10
    },
    showStudioThirdLidUp (pos) {
      if (pos <= 42) {
        this.$refs.thirdLid.style.height = '0px'
      }
      if (pos > 42) {
        this.$refs.thirdLid.style.height = `${(pos - 42) * this.mingme.Multiplier * 11}px`
      }
    },
    showStudioFourthLidDown (pos) {
      this.$refs.fourthLidIn.style.display = 'block'
      this.$refs.fourthLidIn.style.opacity = (pos - 59) / 10
      this.$refs.secondLidIn.style.left = '-50px'
    },
    makeProjectChapterGoDown (pos) {
      let pChapterHeight = (pos - 77) * this.mingme.Multiplier * 7

      if (pChapterHeight > this.mingme.z + 100) {
        pChapterHeight = this.mingme.z + 100
      }

      this.$refs.proChapter.style.display = 'block'
      this.$refs.proChapter.style.transform = 'rotate(-21deg)'
      this.$refs.proChapter.style.height = `${pChapterHeight}px`
    },
    makeProjectChapterGoUp (pos) {
      this.$refs.services.style.display = 'block'
      this.$refs.secondLidIn.style.display = 'block'
      this.$refs.secondLidIn.style.opacity = (pos - 60) / 10
      var pChapterHeight = (pos - 77) * this.mingme.Multiplier * 7
      if (pChapterHeight < 0) {
        pChapterHeight = 0
      }

      this.$refs.proChapter.style.display = 'block'
      this.$refs.proChapter.style.transform = 'rotate(-21deg)'
      this.$refs.proChapter.style.height = `${pChapterHeight}px`
    },
    moveBikeDown (pos) {
      if (!this.mingme.bikeHere) {
        this.chapterTilShow = true
        this.$refs.proTitle.style.opacity = 0
        this.$refs.proTitle.style.left = '48%'
        this.$refs.proTitle.style.opacity = 1
        this.$refs.proTitle.style.left = '50%'
        this.mingme.bikeHere = true
      }
      var counting = pos - 92
      var position = parseInt(counting % 6, 10)

      switch (position) {
        case 0:
          this.$refs.proBike.style.backgroundPosition = '0 0'
          break
        case 1:
          this.$refs.proBike.style.backgroundPosition = '-190px 0'
          break
        case 2:
          this.$refs.proBike.style.backgroundPosition = '-380px 0'
          break
        case 3:
          this.$refs.proBike.style.backgroundPosition = '0 -100px'
          break
        case 4:
          this.$refs.proBike.style.backgroundPosition = '-190px -100px'
          break
        case 5:
          this.$refs.proBike.style.backgroundPosition = '-380px -100px'
          break
      }
    },
    liftProjectElevatorDown (pos) {
      this.$refs.proElevator.style.display = 'block'
      this.$refs.proElevator.style.left = `${this.mingme.Screen.width / 2 - 960 / 2}px`
      let myTop = (110 - pos) * this.mingme.Multiplier * 7.8 + 1300
      if (myTop < 130) {
        myTop = 130
      }
      this.$refs.proElevator.style.top = `${myTop}px`
      this.$refs.header.style.backgroundColor = '#fff'
      this.$refs.proCi.style.top = `${(110 - pos) * this.mingme.Multiplier * 3.2}px`
    },
    moveProjectTilesDown (pos) {
      if (pos > 118) {
        let maxLeftP1 = (pos - 118) * this.mingme.Multiplier * 10 - 1500
        if (maxLeftP1 >= 0) {
          maxLeftP1 = 0
        }
        this.$refs.p1l.style.left = `${maxLeftP1}px`
        let maxRightP1 = (pos - 118) * this.mingme.Multiplier * 10 - 1500
        if (maxRightP1 >= 0) {
          maxRightP1 = 0
        }
        this.$refs.p1r.style.right = `${maxRightP1}px`
      }
      if (pos > 128) {
        let maxLeftP2 = (pos - 128) * this.mingme.Multiplier * 10 - 1500
        if (maxLeftP2 >= 0) {
          maxLeftP2 = 0
        }
        this.$refs.p2l.style.left = `${maxLeftP2}px`
        let maxRightP2 = (pos - 128) * this.mingme.Multiplier * 10 - 1500
        if (maxRightP2 >= 0) {
          maxRightP2 = 0
        }
        this.$refs.p2r.style.right = `${maxRightP2}px`
      }
      if (pos > 138) {
        let maxLeftP3 = (pos - 138) * this.mingme.Multiplier * 10 - 1500
        if (maxLeftP3 >= 0) {
          maxLeftP3 = 0
        }
        this.$refs.p3l.style.left = `${maxLeftP3}px`
        var maxRightP3 = (pos - 138) * this.mingme.Multiplier * 10 - 1500
        if (maxRightP3 >= 0) {
          maxRightP3 = 0
        }
        this.$refs.p3r.style.right = `${maxRightP3}px`
      }
      if (pos > 148) {
        let maxLeftP4 = (pos - 148) * this.mingme.Multiplier * 10 - 1500
        if (maxLeftP4 >= 0) {
          maxLeftP4 = 0
        }
        this.$refs.p4l.style.left = `${maxLeftP4}px`
        let maxRightP4 = (pos - 148) * this.mingme.Multiplier * 10 - 1500
        if (maxRightP4 >= 0) {
          maxRightP4 = 0
        }
        this.$refs.p4r.style.right = `${maxRightP4}px`
      }
      if (pos > 158) {
        let maxLeftP5 = (pos - 158) * this.mingme.Multiplier * 10 - 1500
        if (maxLeftP5 >= 0) {
          maxLeftP5 = 0
        }
        this.$refs.p5l.style.left = `${maxLeftP5}px`
        let maxRightP5 = (pos - 158) * this.mingme.Multiplier * 10 - 1500
        if (maxRightP5 >= 0) {
          maxRightP5 = 0
        }
        this.$refs.p5r.style.right = `${maxRightP5}px`
      }
    },
    newControls (pos, delta) {
      this.barWidth = { width: 75 + pos * this.mingme.indicator.multiplier + 'px' }
      this.moveHomeBlockDownUp(pos)
      if (delta > 0) {
        if (pos < 58 && this.mingme.CHAPTER !== this.mingme.CHAPTERS.home) {
          this.mingme.CHAPTER = this.mingme.CHAPTERS.home
          window.location.assign(this.mingme.URL + '?p=home')
        }
        if (pos > 60 && pos < 120 && this.mingme.CHAPTER !== this.mingme.CHAPTERS.services) {
          this.mingme.CHAPTER = this.mingme.CHAPTERS.services
          window.location.assign(this.mingme.URL + '?p=services')
        }
        if (pos > 120 && pos < 180 && this.mingme.CHAPTER !== this.mingme.CHAPTERS.projects) {
          this.mingme.CHAPTER = this.mingme.CHAPTERS.projects
          window.location.assign(this.mingme.URL + '?p=projects')
        }
        if (pos > 187 && this.mingme.CHAPTER !== this.mingme.CHAPTERS.contact) {
          this.mingme.CHAPTER = this.mingme.CHAPTERS.contact
          window.location.assign(this.mingme.URL + '?p=contact')
        }

        if (pos < 60) {
          this.studioShow = true
        }
        if (pos > 12.5) {
          this.moveRotateStudioDown(pos)
        }
        if (pos > 42) {
          this.showStudioFirstLidDown(pos)
        }
        if (pos > 54) {
          this.showStudioThirdLidDown(pos)
        }
        if (pos > 59) {
          this.showStudioFourthLidDown(pos)
        }
        if (pos > 40 && pos < 56) {
          this.$refs.proChapter.style.top = '-100px'
        }
        if (pos > 63) {
          this.showStudioSecondLidDown(pos)
        }
        if (pos > 77) {
          this.makeProjectChapterGoDown(pos)
        }
        if (pos < 92) {
          this.mingme.bikeHere = false
        }
        if (pos > 92) {
          this.moveBikeDown(pos)
        }
        if (pos > 110) {
          this.liftProjectElevatorDown(pos)
        }
        if (pos > 113) {
          this.$refs.services.style.display = 'none'
        }
        if (pos > 118) {
          this.moveProjectTilesDown(pos)
        }
        if (pos > 123) {
          this.labelShow = false
        } else {
          this.labelShow = true
        }
        if (pos > 173) {
          this.labelShow = false
        } else {
          this.labelShow = true
        }
        if (pos < 183) {
          this.$refs.contactFooter.style.zIndex = 360
          this.$refs.contactFooterSupport.style.zIndex = 350
        } else {
          this.$refs.contactFooter.style.zIndex = 300
          this.$refs.contactFooterSupport.style.zIndex = 280
        }
        if (pos > 173) {
          let maxTop = -155
          let lTop = (173 - pos) * 100 + 600
          if (lTop < maxTop) {
            lTop = maxTop
          }
          this.$refs.p6.style.top = `${lTop}px`
        }

        if (pos < 181) {
          this.$refs.contactFooter.style.display = 'none'
          this.$refs.contactFooterSupport.style.display = 'none'
        }
        if (pos > 182 && pos < 195) {
          this.$refs.contactFooter.style.display = 'block'
          this.$refs.contactFooterSupport.style.display = 'block'
          this.mingme.mouseMoving = true
          let bottomPos = (pos - 182) * 90 - 600
          let bPsupport = (pos - 182) * 15
          if (bPsupport > 300) {
            bPsupport = 300
          }

          if (bottomPos > 0) {
            bottomPos = 0
          }
          if (bottomPos < -600) {
            bottomPos = -600
          }
          this.$refs.contactFooter.style.display = 'block'
          this.$refs.contactFooter.style.bottom = `${bottomPos}px`
          this.$refs.contactFooterSupport.style.top = `${100 - bPsupport}%`
        }

        if (pos > 190) {
          this.$refs.contactFooter.style.bottom = `0px`
        }
      } else if (delta < 0) {
        if (pos < 15 && this.mingme.CHAPTER !== this.mingme.CHAPTERS.home) {
          this.mingme.CHAPTER = this.mingme.CHAPTERS.home
          window.location.assign(this.mingme.URL + '?p=home')
        }
        if (pos > 20 && pos < 80 && this.mingme.CHAPTER !== this.mingme.CHAPTERS.services) {
          this.mingme.CHAPTER = this.mingme.CHAPTERS.services
          window.location.assign(this.mingme.URL + '?p=services')
        }
        if (pos > 120 && pos < 180 && this.mingme.CHAPTER !== this.mingme.CHAPTERS.projects) {
          this.mingme.CHAPTER = this.mingme.CHAPTERS.projects
          window.location.assign(this.mingme.URL + '?p=projects')
        }
        if (pos > 187 && this.mingme.CHAPTER !== this.mingme.CHAPTERS.contact) {
          this.mingme.CHAPTER = this.mingme.CHAPTERS.contact
          window.location.assign(this.mingme.URL + '?p=contact')
        }
        if (pos < 15) {
          this.chapterTilShow = false
        }
        this.moveRotateStudioUp(pos)
        this.showStudioThirdLidUp(pos)

        if (pos <= 35) {
          //   Lamoulade.$lid.first.removeClass('menu-elem')
          this.$refs.firstLidIn.style.display = 'none'
          this.$refs.fourthLid.style.width = '0px'
        }

        if (pos > 46) {
          let fourthLidMaxWidth = 3000
          let fourthLidWidth = (pos - 46) * this.mingme.Multiplier * 10

          if (fourthLidWidth > fourthLidMaxWidth) {
            fourthLidWidth = fourthLidMaxWidth
          }
          if (fourthLidWidth < 5) {
            fourthLidWidth = 0
          }
          this.$refs.fourthLid.style.width = `${fourthLidWidth}px`
          this.$refs.firstLidIn.style.display = 'block'
        }

        if (pos > 35) {
          this.$refs.firstLidIn.style.opacity = (pos - 35) / 10
        }

        if (pos <= 54) {
          this.$refs.thirdLidIn.style.display = 'none'
        }
        if (pos > 43) {
          this.$refs.thirdLidIn.style.display = 'block'
          this.$refs.thirdLidIn.style.opacity = (pos - 43) / 10
        }
        if (pos <= 52) {
          this.$refs.fourthLidIn.style.display = 'none'
        }
        if (pos > 59) {
          this.$refs.fourthLidIn.style.display = 'block'
          this.$refs.fourthLidIn.style.opacity = (pos - 59) / 10
        }
        if (pos < 50) {
          this.$refs.proTitle.style.display = 'none'
        }

        if (pos <= 60) {
          this.$refs.secondLidIn.style.display = 'none'
          this.$refs.proChapter.style.display = 'none'
          this.studioShow = true
        }
        if (pos > 63) {
          this.$refs.secondLidIn.style.left = '0'
          this.$refs.secondLidIn.style.opacity = (pos - 63) / 10
        }

        if (pos > 77) {
          this.makeProjectChapterGoUp(pos)
        }

        if (pos < 92) {
          this.$refs.services.style.display = 'block'
          this.$refs.proElevator.style.display = 'none'
        }
        if (pos <= 92) {
          this.$refs.proTitle.style.display = 'none'
          if (this.mingme.bikeHere) {
            this.$refs.proTitle.style.left = '50%'
            this.$refs.proTitle.style.opacity = 0
            this.mingme.bikeHere = false
          }
        }
        if (pos > 92) {
          this.$refs.services.style.display = 'none'
          this.$refs.proTitle.style.opacity = 1
          let counting = pos - 92
          let position = parseInt(counting % 6, 10)

          switch (position) {
            case 0:
              this.$refs.proBike.style.backgroundPosition = '0 0'
              break
            case 1:
              this.$refs.proBike.style.backgroundPosition = '-190px 0'
              break
            case 2:
              this.$refs.proBike.style.backgroundPosition = '-380px 0'
              break
            case 3:
              this.$refs.proBike.style.backgroundPosition = '0 -100px'
              break
            case 4:
              this.$refs.proBike.style.backgroundPosition = '-190px -100px'
              break
            case 5:
              this.$refs.proBike.style.backgroundPosition = '-380px -100px'
              break
          }
        }
        if (pos <= 90) {
          this.$refs.header.style.backgroundColor = 'transparent'
        }
        if (pos > 110) {
          this.$refs.proElevator.style.left = `${document.body.clientWidth / 2 - 960 / 2}px`
          this.$refs.proElevator.style.display = 'block'
          this.$refs.header.style.backgroundColor = '#FFF'
          var myTop = (110 - pos) * this.mingme.Multiplier * 7.8 + 1300
          if (myTop < 130) {
            myTop = 130
          }
          this.$refs.proElevator.style.top = `${myTop}px`
          this.$refs.proCi.style.top = `${(110 - pos) * this.mingme.Multiplier * 3.2}px`
        }

        if (pos < 118 && pos > 40) {
          this.$refs.proTitle.style.display = 'none'
        }
        if (pos < 123) {
          this.labelShow = true
        }
        if (pos > 123) {
          this.labelShow = false
        }
        if (pos < 173) {
          this.labelShow = true
        }
        if (pos > 173) {
          this.labelShow = false
        }
        if (pos > 118) {
          let maxLeftP1 = (pos - 118) * this.mingme.Multiplier * 10 - 1500
          if (maxLeftP1 >= 0) {
            maxLeftP1 = 0
          }
          this.$refs.p1l.style.left = `${maxLeftP1}px`
          let maxRightP1 = (pos - 118) * this.mingme.Multiplier * 10 - 1500
          if (maxRightP1 >= 0) {
            maxRightP1 = 0
          }
          this.$refs.p1r.style.right = `${maxRightP1}px`
        }
        if (pos < 118 && pos > 40) {
          this.$refs.proTitle.style.display = 'block'
        }
        if (pos > 128) {
          var maxLeftP2 = (pos - 128) * this.mingme.Multiplier * 10 - 1500
          if (maxLeftP2 >= 0) {
            maxLeftP2 = 0
          }
          this.$refs.p2l.style.left = `${maxLeftP2}px`
          var maxRightP2 = (pos - 128) * this.mingme.Multiplier * 10 - 1500
          if (maxRightP2 >= 0) {
            maxRightP2 = 0
          }
          this.$refs.p2r.style.right = `${maxRightP2}px`
        }
        if (pos > 138) {
          var maxLeftP3 = (pos - 138) * this.mingme.Multiplier * 10 - 1500
          if (maxLeftP3 >= 0) {
            maxLeftP3 = 0
          }
          this.$refs.p3l.style.left = `${maxLeftP3}px`
          var maxRightP3 = (pos - 138) * this.mingme.Multiplier * 10 - 1500
          if (maxRightP3 >= 0) {
            maxRightP3 = 0
          }
          this.$refs.p3r.style.right = `${maxRightP3}px`
        }
        if (pos > 148) {
          var maxLeftP4 = (pos - 148) * this.mingme.Multiplier * 10 - 1500
          if (maxLeftP4 >= 0) {
            maxLeftP4 = 0
          }
          this.$refs.p4l.style.left = `${maxLeftP4}px`
          var maxRightP4 = (pos - 148) * this.mingme.Multiplier * 10 - 1500
          if (maxRightP4 >= 0) {
            maxRightP4 = 0
          }
          this.$refs.p4r.style.right = `${maxRightP4}px`
        }
        if (pos > 158) {
          var maxLeftP5 = (pos - 158) * this.mingme.Multiplier * 10 - 1500
          if (maxLeftP5 >= 0) {
            maxLeftP5 = 0
          }
          this.$refs.p5l.style.left = `${maxLeftP5}px`
          var maxRightP5 = (pos - 158) * this.mingme.Multiplier * 10 - 1500
          if (maxRightP5 >= 0) {
            maxRightP5 = 0
          }
          this.$refs.p5r.style.right = `${maxRightP5}px`
        }

        if (pos > 173) {
          let maxTop = -155
          let lTop = (173 - pos) * 100 + 600
          if (lTop < maxTop) {
            lTop = maxTop
          }
          let minTop = 600
          if (lTop > 600) {
            lTop = minTop
          }
          this.$refs.p6.style.top = `${lTop}px`
        }

        if (pos < 170) {
          this.$refs.contactFooter.style.display = 'none'
          this.$refs.contactFooterSupport.style.display = 'none'
        }
        if (pos < 188) {
          this.$refs.contactFooter.style.zIndex = 360
          this.$refs.contactFooterSupport.style.zIndex = 350
        } else {
          this.$refs.contactFooter.style.zIndex = 300
          this.$refs.contactFooterSupport.style.zIndex = 280
        }
        if (pos < 179) {
          this.mingme.mouseMoving = false
        }
        if (pos > 180 && pos < 195) {
          this.$refs.contactFooter.style.display = 'block'
          this.$refs.contactFooterSupport.style.display = 'block'
          let bottomPos = (pos - 182) * 90 - 600
          let bPsupport = (pos - 182) * 15
          if (bPsupport > 300) {
            bPsupport = 300
          }
          if (bottomPos > 0) {
            bottomPos = 0
          }
          if (bottomPos < -630) {
            bottomPos = -630
          }
          this.mingme.mouseMoving = true
          this.$refs.contactFooter.style.display = 'block'
          this.$refs.contactFooter.style.bottom = `${bottomPos}px`
          this.$refs.contactFooterSupport.style.top = `${100 - bPsupport}%`
        }
      }
    },
    resetWH () {
      this.mingme.Screen.width = window.innerWidth
      this.mingme.Screen.height = window.innerHeight
      this.mingme.x = this.mingme.Screen.height
      this.mingme.y = this.mingme.Screen.width
      this.mingme.zSquared = Math.pow(this.mingme.x, 2) + Math.pow(this.mingme.y, 2)
      this.mingme.z = Math.sqrt(this.mingme.zSquared)
      document.documentElement.scrollTop = document.documentElement.scrollTop + 1
    },
    playFooter (e) {
      if (this.mingme.mouseMoving) {
        let posi = 0
        let scrWidth = document.body.clientWidth
        if (e.pageX < scrWidth / 7 && posi !== 1) {
          this.$refs.contactShoes.style.backgroundPosition = '0px'
          posi = 1
        }
        if (e.pageX < (2 * scrWidth) / 7 && e.pageX > scrWidth / 7 && posi !== 2) {
          this.$refs.contactShoes.style.backgroundPosition = '-190px'
          posi = 2
        }
        if (e.pageX < (3 * scrWidth) / 7 && e.pageX > (2 * scrWidth) / 7 && posi !== 3) {
          this.$refs.contactShoes.style.backgroundPosition = '-380px'
          posi = 3
        }
        if (e.pageX < (4 * scrWidth) / 7 && e.pageX > (3 * scrWidth) / 7 && posi !== 4) {
          this.$refs.contactShoes.style.backgroundPosition = '-570px'
          posi = 4
        }
        if (e.pageX < (5 * scrWidth) / 7 && e.pageX > (4 * scrWidth) / 7 && posi !== 5) {
          this.$refs.contactShoes.style.backgroundPosition = '-760px'
          posi = 5
        }
        if (e.pageX < (6 * scrWidth) / 7 && e.pageX > (5 * scrWidth) / 7 && posi !== 6) {
          this.$refs.contactShoes.style.backgroundPosition = '-950px'
          posi = 6
        }
        if (e.pageX < (7 * scrWidth) / 7 && e.pageX > (6 * scrWidth) / 7 && posi !== 7) {
          this.$refs.contactShoes.style.backgroundPosition = '-1140px'
          posi = 7
        }
      }
    },
    _myInit () {
      this.resetWH()
    },
    _move (target) {
      let _that = this
      let timer = null
      if (timer) {
        clearTimeout(timer)
      }
      if (this.mingme.Screen.height + target > 20000) {
        target = 20000 - this.mingme.Screen.height
      }
      if (_that.mingme.POS > target) {
        let scrollT = _that.mingme.POS
        timer = setInterval(function () {
          let step = Math.floor((_that.mingme.POS - target) / 20)
          if (_that.mingme.POS - target > (scrollT - target) * 0.5) {
            step = Math.floor((scrollT - _that.mingme.POS) / 20)
          }
          if (step < 30) {
            step = 30
          }
          document.documentElement.scrollTop = _that.mingme.POS - step
          if (_that.mingme.POS <= target) {
            document.documentElement.scrollTop = target
            clearTimeout(timer)
          }
        }, 10)
      } else if (_that.mingme.POS < target) {
        timer = setInterval(function () {
          let step = Math.floor(_that.mingme.POS / 20)
          if (_that.mingme.POS > target * 0.5) {
            step = Math.floor((target - _that.mingme.POS) / 20)
          }
          if (step < 30) {
            step = 30
          }
          document.documentElement.scrollTop = _that.mingme.POS + step
          if (_that.mingme.POS >= target) {
            document.documentElement.scrollTop = target
            clearTimeout(timer)
          }
        }, 10)
      } else if (target === _that.mingme.POS) {
        return false
      }
    },
    _initHome () {
      let _this = this
      _this.textShow.opacity = 1
      document.documentElement.scrollTop = 0
      setTimeout(() => {
        _this.headTop.top = '0px'
        _this.footerBottom.bottom = '0px'
      }, 250)
    }
  }
}
</script>

<style lang="less" scoped>
.scene {
  height: 20000px;
}

header {
  position: fixed;
  z-index: 330;
  height: 130px;
  width: 960px;
  left: 50%;
  margin-left: -480px;
  padding-top: 40px;
  transition: top 0.5s;
  .content {
    width: 960px;
    margin: auto;
    height: 100%;
    position: relative;
    .menu {
      position: absolute;
      top: 0;
      right: 70px;
      width: 270px;
      height: 65px;
      ul {
        height: 100%;
        position: absolute;
        li {
          display: inline-block;
          width: 59px;
          height: 100%;
          margin-right: 40px;
          font-size: 12px;
          letter-spacing: 1px;
          &:last-child {
            margin-right: 0;
          }
          a {
            display: block;
            width: 100%;
            height: 100%;
            text-decoration: none;
            text-align: center;
            &:before {
              color: rgba(0, 0, 0, 0.3);
              width: 100%;
              height: 45px;
              display: block;
              font-size: 18px;
            }
          }
        }
      }
      .menu-slider {
        position: absolute;
        top: 29px;
        border-radius: 15px;
        overflow: hidden;
        width: 100%;
        height: 8px;
        background: #eeeeee;
        background: rgba(0, 0, 0, 0.05);
        .bar {
          border-radius: inherit;
          height: 100%;
          background-color: #d5d5d5;
          background-color: rgba(0, 0, 0, 0.1);
          background-position: -245px center;
        }
      }
    }
    .contact {
      position: absolute;
      width: 30px;
      height: 30px;
      right: 0;
      top: 10px;
      z-index: 310;
      span {
        cursor: pointer;
        display: block;
        width: 100%;
        height: 100%;
        color: #d6d6d6;
        color: rgba(0, 0, 0, 0.3);
        text-decoration: none;
        -webkit-transition: color 0.3s;
        transition: color 0.3s;
        &:hover {
          color: #000;
        }
        &:before {
          font-size: 30px;
        }
      }
    }
  }
}
footer {
  position: fixed;
  z-index: 170;
  background-color: #ffd000;
  left: 0;
  right: 0;
  height: 20%;
  transition: bottom 0.5s;
  .scrolldown {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -25px 0 0 -25px;
    &:before {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 14px;
      height: 14px;
      margin: -7px 0 0 -7px;
      font-size: 14px;
      color: #fff;
    }
    &:after {
      z-index: 1;
      content: '';
      position: absolute;
      top: 1px;
      bottom: 1px;
      left: 1px;
      right: 1px;
      border-radius: 100%;
      background: transparent;
      border: 1px solid #ffffff;
      -webkit-animation: pulse 2s infinite;
      animation: pulse 2s infinite;
    }
  }
  @keyframes pulse {
    0% {
      -webkit-transform: scale(0.8);
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
      opacity: 0;
    }
  }
}
.vertical-center {
  width: 100%;
  height: 100%;
  display: table;
  .wrap {
    width: 100%;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    transition: opacity 1s;
  }
}
/* = Content
**************************************************/
#home-loading {
  position: absolute;
  z-index: 100;
  bottom: 140px;
  font-size: 14px;
}
#services-chapter,
#projects-chapter {
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 1300px;
}
#services-chapter {
  background-color: #ffd000;
  z-index: 40;
}
#projects-chapter {
  z-index: 60;
  width: 6000px;
  height: 0px;
  top: -100px;
  left: -3000px;
  overflow: hidden;
  background-color: #fff;
}
#chapter-title {
  width: 270px;
  height: 190px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -40%);
  z-index: 70;
  opacity: 0;
  transition: all 0.6s;
}
#chapter-title.onlybike .label {
  display: none;
}
#chapter-title.invisible {
  display: none !important;
}
#chapter-title .bike {
  margin: auto;
  width: 190px;
  height: 100px;
  background: url('../../assets/images/sprite-velo.png') no-repeat center top;
}
#chapter-title .label {
  //   text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 13px;
  font-weight: 400;
  text-align: center;
  padding-top: 30px;
  line-height: 19px;
}
#services-content {
  position: absolute;
  z-index: 50;
  top: -6000px;
  width: 100%;
  height: 100%;
}
.chapters {
  cursor: pointer;
  display: block;
}
#recording {
  position: fixed;
  z-index: 1000;
  top: 10px;
  left: 10px;
  background-color: #f2f2f2;
  padding: 5px 10px;
  border-radius: 3px;
  color: #666;
  font-family: 'Lucida Grande', Lucida, Verdana, sans-serif;
}
#studio {
  position: fixed;
  z-index: 180;
  .inner {
    width: 960px;
    margin: auto;
  }
  .home-bloc1 {
    left: 0;
    h1 {
      position: relative;
      font: 69px 'NarzissDropsRegular';
      margin-bottom: 20px;
      letter-spacing: 1px;
    }
    h2 {
      position: relative;
      margin-bottom: 20px;
      font-weight: 300;
      font-size: 19px;
      line-height: 28px;
      color: #000;
      text-transform: uppercase;
      letter-spacing: 3px;
      b {
        font-size: 31px;
        color: #000;
      }
    }
  }
}

/* = Services
**************************************************/
#services {
  width: 6050px;
  height: 6050px;
  background-color: #ffd000;
  position: fixed;
  transition: all 0.05s;
  .services-lid {
    width: 3000px;
    height: 3000px;
  }
  #third-lid {
    float: left;
    background-color: #38300a;
    background-color: rgba(0, 0, 0, 0.9);
    text-align: right;
    width: 3000px;
    height: 0px;
    margin-right: 30px;
    position: relative;
  }
  #fourth-lid {
    float: left;
    background-color: #e9c92d;
    background-color: rgba(0, 0, 0, 0.08);
    width: 0px;
    height: 3000px;
    position: relative;
  }
}
#first-lid {
  float: left;
  background-color: #fff;
  width: 2000px;
  height: 1200px;
  margin-right: 30px;
  position: relative;
  z-index: 40;
}
#first-lid-in {
  display: none;
  position: absolute;
  width: 300px;
  bottom: 0;
  right: 0;
  text-align: right;
  margin: 0 30px 30px 0;
}
#second-lid {
  float: left;
  background-color: #ffd000;
  text-align: left;
  width: 1px;
  height: 1200px;
  position: relative;
}
#second-lid-in {
  position: absolute;
  width: 500px;
  bottom: 0;
  left: 0;
  display: none;
  padding-bottom: 20px;
  padding-left: 30px;
}

#third-lid-in {
  position: absolute;
  width: 300px;
  height: 150px;
  top: 0;
  right: 0;
  display: none;
  text-align: right;
  color: #b6b6b6;
  margin: 30px 30px 0 0;
}

#fourth-lid-in {
  position: absolute;
  width: 300px;
  height: 150px;
  top: 0;
  display: none;
  left: 0;
  margin: 30px 0 0 30px;
}
#services-middle {
  clear: both;
  height: 30px;
}
#third-lid #third-lid-in .s-text1 {
  color: #fff;
}
#third-lid #third-lid-in .s-text1 a {
  color: #fff;
}
#first-lid #first-lid-in .s-text2 {
  color: #9d9d9d;
}
#fourth-lid #fourth-lid-in .s-text2 {
  color: #7b6700;
}
.s-text1 {
  font-size: 18px;
  letter-spacing: 1px;
}
.s-text1 a {
  text-decoration: none;
}
.s-text1 span {
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 3px;
}
.s-text2 {
  font-size: 13px;
  margin-top: 15px;
  line-height: 15px;
}
.s-text3 {
  font-size: 24px;
  text-transform: uppercase;
  line-height: 32px;
  letter-spacing: 1px;
}
#s-question {
  border-radius: 15px;
  padding: 5px 14px;
  background-color: #fff;
  position: absolute;
  bottom: 9px;
  left: 379px;
  display: block;
}

/* = Projects
**************************************************/
#projects {
  position: relative;
  z-index: 190;
}
#projects-elevator {
  position: fixed;
  z-index: 80;
  background-color: transparent;
  width: 960px;
  margin: auto;
  height: 12000px;
  top: 1200px;
}
#projects-elevator .projects {
  position: relative;
}
#p-title {
  position: absolute;
  width: 960px;
}
#p-title h1 {
  font: 86px 'NarzissDropsRegular';
  text-align: center;
  border-bottom: 1px solid #5d5d5d;
  padding-bottom: 20px;
  margin: 20px auto 0;
  width: 300px;
}
.p-container {
  clear: both;
  position: relative;
  font-size: 40px;
  margin: 0;
}
.p-container .p-block {
  margin-top: 40px;
  width: 100%;
  height: 100%;
}
.p-container .p-block .project-pic {
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.p-container .p-block .project-pic:hover img {
  -webkit-transform: translate3d(0, -50px, 0);
  transform: translate3d(0, -50px, 0);
}
.p-container .p-block .project-pic:hover .caption {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.p-container .p-block .project-pic img {
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}
.p-container .p-block .project-pic .caption {
  width: 100%;
  height: 90px;
  position: absolute;
  bottom: 0;
  background-color: #f2f2f2;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 400;
  text-align: center;
  padding: 39px 20px 0 20px;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  -webkit-transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
}
.p-container .p-left {
  position: relative;
  float: left;
}
.p-container .p-right {
  position: relative;
  float: right;
}
#ci {
  top: 300px;
  position: relative;
  margin: auto;
  height: 2000px;
}
.p-container .p-center {
  position: relative;
  height: 373px;
}
.third {
  width: 33%;
}
.third-r {
  width: 63%;
}
#ptop {
  margin-top: 500px;
  height: 376px;
}
#p1l {
  left: -1300px;
  width: 620px;
  height: 376px;
}
#p1r {
  right: -1300px;
  width: 300px;
  height: 376px;
}
#p2l {
  left: -3300px;
  width: 300px;
  height: 376px;
}
#p2r {
  right: -3300px;
  width: 620px;
  height: 180px;
}
#p3l {
  left: -4300px;
  width: 300px;
  height: 180px;
}
#p3r {
  right: -4300px;
  width: 620px;
  height: 376px;
  position: absolute;
  top: -194px;
}
#p4l {
  left: -5300px;
  width: 620px;
  height: 180px;
}
#p4r {
  right: -5300px;
  width: 300px;
  height: 376px;
}
#p5l {
  left: -6300px;
  width: 620px;
  height: 376px;
  top: -194px;
}
#p5r {
  right: -6300px;
  width: 300px;
  height: 180px;
}
#p6 {
  height: 180px;
  top: 600px;
}
/* Links */
#ptop a,
#p1l a,
#p1r a,
#p2l a,
#p2r a,
#p3l a,
#p3r a,
#p4l a,
#p4r a,
#p5l a,
#p5r a,
#p6 a {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
}
.project-img1 {
  margin: 0 0 8px 0;
}
/* = Contact Section
**************************************************/
#contact-footer-support {
  position: fixed;
  width: 100%;
  top: 100%;
  bottom: 0;
  background-color: #fff;
  display: none;
  z-index: 280;
}
#contact-footer {
  display: none;
  z-index: 300;
  position: fixed;
  width: 100%;
  background-color: transparent;
  padding-top: 200px;
  bottom: -800px;
}
#contact-footer #contact-shoes {
  width: 190px;
  height: 84px;
  margin: 0 auto 70px auto;
  background: url(../../assets/images/sprite-chaussures.png) -570px;
}
#contact-footer h2 {
  width: 660px;
  font-size: 28px;
  margin: 20px auto 80px;
  text-align: center;
  display: none;
  line-height: 36px;
}
#contact-footer h2 b {
  font-style: italic;
}
@media (min-height: 720px) {
  #contact-footer #contact-shoes {
    margin-bottom: 40px;
  }
  #contact-footer h2 {
    display: block;
  }
}
@media (min-height: 800px) {
  #contact-footer #contact-shoes {
    margin-bottom: 40px;
  }
  #contact-footer h2 {
    margin-top: 50px;
    margin-bottom: 100px;
  }
}
@media (min-height: 900px) {
  #contact-footer h2 {
    margin-bottom: 160px;
  }
}
/* = Z-index
*****************************************************
#mask   :           1030
#lm-loader :        150000  1000
#lm-loader-cache :      151000  1020
#lm-loader-yellow :     150500  1010
header :          15000 330
#header-bg :        10    1
header .projects :      15    90
#logo :           100000  310
#link-chap1 :         10    10
#link-chap2 :         10    20
#link-chap3 :         10    30
footer :          100   170
#cms :            9001  290
#home-loading :       20    100
#services-chapter :     10    40
#projects-chapter :     12    60
#chapter-title :      13    70
#menu, #contact :       24    110
#services-content :     11    50
#recording :        9999  1000
#studio :           100   180
#first-lid :        10    40
#projects :         500   190
#projects-elevator :    13    80
#panel1 :           500   200
#p1-panel1 :        500   210
#p1-panel2 :        501   240
#p1-panel2-1 :        502   270
#p1-panel2-2 :        501   250
#panel2 :           500   220
#p2-panel1 :        500   230
#p2-panel2 :        501   260
#p2-panel3 :        50    130
#p2-panel4 :        60    160
#project-navigation :     30    120
#contact-footer :       10000 300
#contact-footer-support :   1000  280
#panels :

************************************************/
</style>
