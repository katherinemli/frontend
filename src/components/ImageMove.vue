<template>
  <div>
    <progress max="100" value="0"></progress>
    <div class="container">
      <section>
        <p>Scroll to add some color to your life!🎨</p>
      </section>
      <section>
        <p>You're doing great, keep going😘</p>
      </section>
      <section>
        <p>Keep scrolling just a little more 🏃‍♀️</p>
      </section>
      <section>
        <p>Here you go!<br>Did you like it?🌈</p>
      </section>
    </div>
  </div>
</template>
<script>

import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default {
  name: 'ImageMove',
  components: {
  },
  data() {
    return {
      showMap: false,
    };
  },
  beforeMount() {
    // this.loadData();
  },
  mounted() {
    // const gsap = this.$gsap;
    // gsap.registerPlugin(ScrollTrigger);
    // console.log('gsapCompo:', gsap);
    ScrollTrigger.refresh();
    this.drinkingMan();
  },
  methods: {
    drinkingMan() {
      const gsap = this.$gsap;
      gsap.to('progress', {
        value: 100,
        ease: 'none',
        scrollTrigger: { scrub: 0.3 },
      });
    },
  },
};
</script>
