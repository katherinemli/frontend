<template>
  <div v-intersection="onIntersection"
  @mouseover="overHover()" @mouseleave="leaveHover()" class="body-work-card">
    <div ref="svgFilled" class="body-work-card-icon">
      <q-icon size="5vw" :name="svgFilled" />
      <q-icon size="5vw" :name="svgFilledChanged" />
    </div>
    <div class="body-work-card-info">
      <div>{{titulo}} visible:{{visible}}
      </div>
      <div>{{texto}}</div>
    </div>
    <div class="body-work-card-date">{{fecha}}</div>
  </div>
</template>

<script>
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = {
  titulo: {
    type: String,
    default: '',
  },
  texto: {
    type: String,
    default: '',
  },
  fecha: {
    type: String,
    default: '',
  },
  svgvalue: {
    type: String,
    default: '',
  },
};

export default {
  props,
  name: 'WorksCard',
  data() {
    return {
      showMap: false,
      showAnimation: true,
      colorFace: '#9B4E5A',
      visible: false,
    };
  },
  computed: {
    svgFilled() {
      // const svgColored = this.fillOcurrences(this.svgvalue, this.colorFace);
      const svgColored = this.fillOriginal(this.svgvalue);
      return `img:data:image/svg+xml;charset=utf8,${svgColored}`;
    },
    svgFilledChanged() {
      const svgColored = this.fillOcurrences(this.svgvalue, this.colorFace);
      return `img:data:image/svg+xml;charset=utf8,${svgColored}`;
    },
  },
  mounted() {
    console.log('window.innerHeight:', window.innerHeight);
  },
  methods: {
    onIntersection(entry) {
      this.visible = entry.isIntersecting;
      ScrollTrigger.refresh();
      this.animationOnEnter();
    },
    animationOnEnter() {
      // const { headerbox, item3, item3img } = this.$refs;
      const {
        // aboutMeReveal,
        // imgReveal,
        // titleReveal0,
        svgFilled,
        // titleReveal2,
        // titleReveal21,
        // basedCanada,
        // links,
      } = this.$refs;
      const gsap = this.$gsap;

      /* eslint new-cap: ["error", { "newIsCap": false }] */
      const heroAnim = new gsap.timeline();
      heroAnim.from(svgFilled, {
        x: '-50%',
        duration: 1.5,
        ease: 'power1.inOut',
      }, 0);
    },
    fillOcurrences(str, color) {
      const colorString = color.replace('#', '%23');
      const searchKeyword = '#';
      const startingIndices = [];
      let indexOccurence = str.indexOf(searchKeyword, 0);
      while (indexOccurence >= 0) {
        startingIndices.push(indexOccurence);
        str = `${str.substring(0, indexOccurence)}${colorString}${str.substring(indexOccurence + 7)}`;
        indexOccurence = str.indexOf(searchKeyword, indexOccurence + 1);
      }
      return str;
    },
    fillOriginal(str) {
      return str.replaceAll('#', '%23');
    },
    overHover() {
      this.colorFace = '#ff9800';
    },
    leaveHover() {
      this.colorFace = '#9c27b0';
    },
  },
};
</script>
