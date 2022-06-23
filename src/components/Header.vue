<template>
<div class="angry-grid">
    <div class="item-1 gsRevealFromLeft" id="item-1" ref="titleReveal1">
    I'm katherine Liberona
  </div>
  <div class="item-2 gsRevealFromLeft" id="item-2" ref="titleReveal2">
    a Fullstack Developer
  </div>
  <div class="item-3" id="item-3" ref="imgReveal">
<!--     <img
      src="~assets/me.jpg"
      id="companyLogo"
      style=
      "width: 100%;
      height: 100%;"
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
    I'm passionate about building engaging
    experiences that contribute to the overall
    growth of a company. I possess a Bachelor’s
    Degree in Computer Science and I have industry experience
    building websites and web applications using Vue, Angular,
    Twig, PHP 5.3 and Go. With an eye for intuitive, well designed
    and user-friendly websites, I love to build websites that not only
    look great, but also feel great to use, regardless of how the final
    user access the web.
  </div>
  <div id="item-6" class="gsRevalFromRight" ref="links">
    Links
  </div>
</div>
</template>
<script>
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Popout from './Popout.vue';

export default {
  name: 'Header',
  components: {
    Popout,
  },
  data() {
    return {
      showMap: false,
    };
  },
  beforeMount() {

  },
  mounted() {
    this.gsapAnimation();
  },
  methods: {
    overImageEnter(event) {
      // clientX/Y gives the coordinates relative to the viewport in CSS pixels.
      // pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
      console.log(event.pageX);
      console.log(event.pageY);

      // screenX/Y gives the coordinates relative to the screen in device pixels.
      console.log(event.screenX);
      console.log(event.screenY);
    },
    overImageLeave() {
      console.log('overImageLeave');
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
