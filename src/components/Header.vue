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
      <Popout/>
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
import Popout from './Popout.vue';

export default {
  name: 'Header',
  components: {
    Popout,
  },
  data() {
    return {
      showMap: false,
      svgcircle,
      showAnimation: false,
    };
  },
  beforeMount() {

  },
  mounted() {
    this.gsapAnimation();
  },
  methods: {
    overImageEnter(event) {
      console.log('overimagen', event);
      this.showAnimation = true;
    },
    overImageLeave(event) {
      console.log('overImageLeave', event);
      this.showAnimation = false;
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
    gsapAnimation() {
      // const { headerbox, item3, item3img } = this.$refs;
      const {
        aboutMeReveal,
        imgReveal,
        // titleReveal0,
        titleReveal1,
        titleReveal2,
        // titleReveal21,
        basedCanada,
        links,
      } = this.$refs;
      const gsap = this.$gsap;
      const hide = (elem) => gsap.set(elem, { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: imgReveal,
        onEnter: () => this.animateFromImage(imgReveal),
        onEnterBack: () => this.animateFromImage(imgReveal, -1),
        onLeave: () => hide(imgReveal),
      });
      ScrollTrigger.create({
        trigger: aboutMeReveal,
        onEnter: () => this.animateFrom(aboutMeReveal),
        onEnterBack: () => this.animateFrom(aboutMeReveal, -1),
        onLeave: () => hide(aboutMeReveal),
      });
      /*       ScrollTrigger.create({
        trigger: titleReveal0,
        onEnter: () => this.animateFrom(titleReveal0),
        onEnterBack: () => this.animateFrom(titleReveal0, -1),
        onLeave: () => hide(titleReveal0),
      }); */
      ScrollTrigger.create({
        trigger: titleReveal1,
        onEnter: () => this.animateFrom(titleReveal1),
        onEnterBack: () => this.animateFrom(titleReveal1, -1),
        onLeave: () => hide(titleReveal1),
      });
      ScrollTrigger.create({
        trigger: titleReveal2,
        onEnter: () => this.animateFrom(titleReveal2),
        onEnterBack: () => this.animateFrom(titleReveal2, -1),
        onLeave: () => hide(titleReveal2),
      });
      /*       ScrollTrigger.create({
        trigger: titleReveal21,
        onEnter: () => this.animateFrom(titleReveal21),
        onEnterBack: () => this.animateFrom(titleReveal21, -1),
        onLeave: () => hide(titleReveal21),
      }); */
      ScrollTrigger.create({
        trigger: basedCanada,
        onEnter: () => this.animateFrom(basedCanada),
        onEnterBack: () => this.animateFrom(basedCanada, -1),
        onLeave: () => hide(basedCanada),
      });
      ScrollTrigger.create({
        trigger: links,
        onEnter: () => this.animateFrom(links),
        onEnterBack: () => this.animateFrom(links, -1),
        onLeave: () => hide(links),
      });
    },
    animateFrom(elem, direction = 1) {
      const gsap = this.$gsap;
      let x = 0;
      let y = direction * 50;
      if (elem.classList.contains('gsRevealFromLeft')) {
        x = -50;
        y = 0;
      } else if (elem.classList.contains('gsRevalFromRight')) {
        x = 50;
        y = 0;
      }

      gsap.fromTo(
        elem,
        { x, y },
        {
          duration: 2,
          x: 0,
          y: 0,
          ease: 'expo',
          overwrite: 'auto',
        },
      );
    },
    animateFromImage(elem, direction = 1) {
      const gsap = this.$gsap;
      let x = 0;
      let y = direction * 50;
      if (elem.classList.contains('gsRevealFromLeft')) {
        x = -50;
        y = 0;
      } else if (elem.classList.contains('gsRevalFromRight')) {
        x = 50;
        y = 0;
      }

      gsap.fromTo(
        elem,
        { x, y, scale: 0.5 },
        {
          duration: 2,
          x: 0,
          y: 0,
          scale: 1,
          ease: 'expo',
          overwrite: 'auto',
        },
      );
    },
  },
};
</script>
