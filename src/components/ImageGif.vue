<template>
  <section class="scene section" id="sticky">
    <div class="viewer"></div>
  </section>
</template>
<script>

import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: 'ImageGif',
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
    this.drinkingMan();
  },
  methods: {
    drinkingMan() {
      const gsap = this.$gsap;
      const frameCount = 9;
      const offsetValue = 100;
      gsap.to('.viewer', {
        backgroundPosition: `${(-offsetValue * frameCount * 2)}px 50%`,
        ease: `steps(${frameCount})`, // use a stepped ease for the sprite sheet
        scrollTrigger: {
          trigger: '.scene',
          start: '.scene',
          end: `+=${(frameCount * offsetValue)}`,
          pin: true,
          scrub: true,
        },
      });
    },
  },
};
</script>
