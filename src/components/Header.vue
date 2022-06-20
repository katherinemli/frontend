<template>
<div class="angry-grid">
  <div class="item-0" id="item-0">
    Hi
  </div>
    <div class="item-1" id="item-1">
    Im Lorem
  </div>
  <div class="item-2" id="item-2">
    An Inter
  </div>
  <div class="item-2-1" id="item-2-1" ref="item21">
    Developer
  </div>
  <div class="item-3" id="item-3" ref="imgReveal">
<!--     <img
      src="~assets/me.jpg"
      id="companyLogo"
      style=
      "width: 100%;
      height: 100%;"
      /> -->
    <img
      ref="item3img"
      src="https://gnrm.se/img/Who-am-I-1.jpg"
      id="companyLogo"
      style=
      "width: 100%;
      height: 100%;"
      />
  </div>
  <div id="item-4">
    Based on Canada
  </div>
  <div id="item-5" ref="aboutMeReveal">
    ipsum dolor, sit amet consectetur adipisicing elit.
    Ducimus atque fugit voluptates quo praesentium quia debitis
    rem quis iure quasi eum consectetur deleniti impedit, libero
    dolorum. Eligendi dicta dolore debitis.
  </div>
  <div id="item-6">
    Links
  </div>
</div>
</template>
<script>
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: 'Header',
  components: {
  },
  data() {
    return {
      showMap: false,
    };
  },
  beforeMount() {

  },
  mounted() {
    ScrollTrigger.refresh();
    this.gsapAnimation();
  },
  methods: {
    gsapAnimation() {
      // const { headerbox, item3, item3img } = this.$refs;
      const { aboutMeReveal, imgReveal } = this.$refs;
      const gsap = this.$gsap;
      const hide = (elem) => gsap.set(elem, { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: imgReveal,
        onEnter: () => this.animateFrom(imgReveal),
        onEnterBack: () => this.animateFrom(imgReveal, -1),
        onLeave: () => hide(imgReveal),
      });
      ScrollTrigger.create({
        trigger: aboutMeReveal,
        onEnter: () => this.animateFrom(aboutMeReveal),
        onEnterBack: () => this.animateFrom(aboutMeReveal, -1),
        onLeave: () => hide(aboutMeReveal),
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
        { x, y, autoAlpha: 0 },
        {
          duration: 3,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: 'expo',
          overwrite: 'auto',
        },
      );
    },
  },
};
</script>
