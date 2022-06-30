<template>
<div class="angry-grid">
    <div class="item-1 gsRevealFromLeft" id="item-1" ref="titleReveal1">
    I'm Katherine Liberona
  </div>
  <div class="item-2 gsRevealFromLeft" id="item-2" ref="titleReveal2">
    a Fullstack Developer
  </div>
<div
  @mouseenter="overImageEnter"
  @mouseleave="overImageLeave" class="item-3" id="item-3" ref="imgReveal">
<!--     <img
      src="~assets/pp.png"
      id="companyLogo"
      /> -->
<!--     <img
    @mouseenter="overImageEnter" @mouseleave="overImageLeave"
      ref="item3img"
      src="https://gnrm.se/img/Who-am-I-1.jpg"
      id="companyLogo"
      style=
      "width: 100%;
      height: 100%;"
      /> -->
     <!--  <Popout/> -->
  </div>
  <div id="item-4" class="gsRevalFromRight"
  ref="basedCanada">
    Based on Canada
  </div>
  <div id="item-5" ref="aboutMeReveal">
    <p>
      <mark class="svgstyle">
      <svg
      ref="animationsvgRef"
      :class="(showAnimation ? 'animationsvg' : '')"
      viewBox="115 140 70 70"
      width="3em" height="3em"
      xmlns="http://www.w3.org/2000/svg"
      style="opacity:1">
        <path
        d="M173
        196
        L172
        196.33333333333334
        L169.8
        197.2
        L164.71428571428572
        197.71428571428572
        L161.5
        197.875
        L156.125
        198
        L150
        197.625
        L143.5
        196.75
        L136.75
        195.125
        L130.875
        192.75
        L125.75
        189.875
        L121.875
        186.25
        L119.125
        181.875
        L118.125
        176.875
        L118.625
        171.875
        L120.375
        167
        L123.25
        162.5
        L127.125
        158.625
        L131.875
        155.25
        L137.5
        152.625
        L143.5
        151.125
        L149.5
        151.125
        L155.5
        152.375
        L161.25
        154.5
        L166.5
        157.5
        L171
        161.125
        L174.75
        165.375
        L177.625
        170.25
        L180
        175.125
        L181.375
        179.625
        L181.875
        183.625
        L181.5
        187.25
        L180.75
        190.375
        L179.5
        193
        L178
        195
        L176.375
        196.375
        L174.75
        197.375
        L173.375
        198.125
        L172
        198.83333333333334
        L171
        199
        L170.5
        199"
        fill="none"
        stroke-linecap="round"
        stroke="black"
        stroke-width="0.5"/>
      </svg>
        <div class="loveFolder">
          I love to build websites that look and feel great to use.
        </div>

        </mark>
    </p>
    <mark class="independence">Work</mark>
    <p>
      Industry experience
      building web applications using
    </p>
    <p>
      <mark :class="(showAnimation? 'greenvue' : 'nobackground')">Vue</mark>,
      <mark :class="(showAnimation? 'redangular' : 'nobackground')">Angular</mark>,
      <mark :class="(showAnimation? 'greentwig' : 'nobackground')">Twig</mark>,
      <mark :class="(showAnimation? 'purplephp' : 'nobackground')">PHP 5.3</mark>
      and
      <mark :class="(showAnimation? 'bluego' : 'nobackground')">Go</mark>.
    </p>
    <p>
      Teach <mark :class="(showAnimation? 'pythonblue' : 'nobackground')">Python</mark>
      and
      <mark :class="(showAnimation? 'pythonyellow' : 'nobackground')">Distributed Systems</mark>.
    </p>
        <mark class="independence">Education</mark>
    <p>
      Bachelor’s Degree in Computer Science.
    </p>
  </div>
  <div id="item-6" class="gsRevalFromRight" ref="links">
    Links
  </div>
</div>
</template>
<script>
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import svgcircle from 'assets/cicle.svg';
// import Popout from './Popout.vue';

export default {
  name: 'Header',
  components: {
    // Popout,
  },
  data() {
    return {
      showMap: false,
      svgcircle,
      showAnimation: true,
      yPercentValue: 0,
      startValue: '',
    };
  },
  beforeMount() {
  },
  methods: {
    overImageEnter(event) {
      console.log('overimagen', event);
      // this.showAnimation = true;
    },
    overImageLeave(event) {
      console.log('overImageLeave', event);
      // this.showAnimation = false;
    },
    getImgCSS(isMouseOver) {
      // No evento de hover, a imagem aumenta o brilho e recebe zoom
      if (isMouseOver) {
        return {
          filter: 'brightness(100%)',
          scaleX: 1.3,
          scaleY: 1.3,
        };
      }
      return {
        filter: 'brightness(50%)',
        scaleX: 1,
        scaleY: 1,
      };
    },
    animationOnEnter() {
      // const { headerbox, item3, item3img } = this.$refs;
      const {
        // aboutMeReveal,
        // imgReveal,
        // titleReveal0,
        titleReveal1,
        // titleReveal2,
        // titleReveal21,
        // basedCanada,
        // links,
      } = this.$refs;
      const gsap = this.$gsap;

      /* eslint new-cap: ["error", { "newIsCap": false }] */
      const heroAnim = new gsap.timeline();
      heroAnim.from(titleReveal1, {
        y: '-100%',
        duration: 1.5,
        ease: 'power1.inOut',
      }, 0);
    },
    animationOnLeave() {
      // const { headerbox, item3, item3img } = this.$refs;
      const {
        // aboutMeReveal,
        // imgReveal,
        // titleReveal0,
        titleReveal1,
        // titleReveal2,
        // titleReveal21,
        // basedCanada,
        // links,
      } = this.$refs;
      const gsap = this.$gsap;
      gsap.to(titleReveal1, {
        scrollTrigger: {
          trigger: '.angry-grid',
          start: this.startValue,
          end: 'center top',
          toggleClass: 'active',
          toggleActions: 'restart resume reverse reverse',
          scrub: 2,
          markers: true,
        },
        yPercent: this.yPercentValue,
      });
    },
    myEventHandler() {
      console.log(window.innerHeight);
      // console.log(window.innerWidth);
      // your code for handling resize...
    },
  },
  created() {
    window.addEventListener('resize', this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener('resize', this.myEventHandler);
  },
  mounted() {
    console.log('window.innerHeight:', window.innerHeight);
    this.startValue = 'center center';
    this.yPercentValue = 350;
    if (window.innerHeight >= 615) {
      this.yPercentValue = 900;
    } else {
      // smartphone
      this.yPercentValue = 600;
      this.startValue = 'top top';
    }
    ScrollTrigger.refresh();
    // this.animationOnEnter();
    this.animationOnLeave();
  },
};
</script>
