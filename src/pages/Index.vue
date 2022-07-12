<template>
  <div ref="pagbox">
    <Header ref="headerbox"/>
    <Works ref="worksbox"/>
  </div>
</template>
<script>
import Header from 'src/components/Header.vue';
import Works from 'src/components/Works.vue';
import SCENE_1 from './scene1.json';
import SCENE_2 from './scene2.json';

export default {
  name: 'PageIndex',
  components: {
    Header,
    Works,
  },
  data() {
    return {
      showMap: false,
      scenes: {
        first: SCENE_1,
        second: SCENE_2,
      },
    };
  },
  beforeMount() {

  },
  mounted() {
    this.animationOnEnter();
  },
  methods: {
    animationOnEnter() {
      // const { headerbox, item3, item3img } = this.$refs;
      const {
        pagbox,
        // headerbox,
        // worksbox,
      } = this.$refs;
      const gsap = this.$gsap;

      /* eslint new-cap: ["error", { "newIsCap": false }] */
      // const bgAnimation = new gsap.timeline();
      gsap.to(pagbox, {
        scrollTrigger: {
          start: 'top',
          toggleActions: 'restart resume reverse reverse',
          scrub: true,
        },
        backgroundColor: '#f2f2f2',
        lazy: false,
        duration: 1.5,
        ease: 'power1.inOut',
      }, 1);
    },
  },
};
</script>
