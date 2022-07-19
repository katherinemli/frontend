<template>
  <div v-intersection="onIntersection"
  @mouseover="overHover()" @mouseleave="leaveHover()" ref="bodyworkcard" class="body-work-card">
<!--     <div>
       <SvgDrawer/>
    </div> -->
    <div ref="bodyworkcardinfo" class="body-work-card-info">
      <div ref="bodyworkcardinfoTitle">
        {{titulo}}
      </div>
      <div class="body-work-card-info-text">
        {{texto}}
      </div>
    </div>
    <div ref="bodyworkcarddate" class="body-work-card-date">
      {{fecha}}
    </div>
  </div>
</template>

<script>
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SvgDrawer from 'src/components/SvgDrawer.vue';

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
  svgin: {
    type: String,
    default: '',
  },
  svgout: {
    type: String,
    default: '',
  },
  svgout2: {
    type: String,
    default: '',
  },
};

export default {
  props,
  name: 'WorksCard',
  components: {
    // SvgDrawer,
  },
  data() {
    return {
      showMap: false,
      showAnimation: true,
      colorFace: '#9B4E5A',
      visible: false,
    };
  },
  computed: {
    svgPIn() {
      // const svgColored = this.fillOcurrences(this.svgvalue, this.colorFace);
      const svgColored = this.fillOriginal(this.svgin);
      return `img:data:image/svg+xml;charset=utf8,${svgColored}`;
    },
    svgPout() {
      // const svgColored = this.fillOcurrences(this.svgvalue, this.colorFace);
      const svgColored = this.fillOriginal(this.svgout);
      return `img:data:image/svg+xml;charset=utf8,${svgColored}`;
    },
    svgPout2() {
      // const svgColored = this.fillOcurrences(this.svgvalue, this.colorFace);
      const svgColored = this.fillOriginal(this.svgout2);
      return `img:data:image/svg+xml;charset=utf8,${svgColored}`;
    },
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
      // ScrollTrigger.refresh();
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
        svgout,
        svgout2,
        bodyworkcard,
        // bodyworkcardinfo,
        bodyworkcardinfoTitle,
        // bodyworkcarddate,
      } = this.$refs;
      const gsap = this.$gsap;
      /* eslint new-cap: ["error", { "newIsCap": false }] */
      /*       const heroAnim = this.$gsap.timeline({ repeat: -1 });
      heroAnim
        .to(svgout, 1,
          {
            y: '-=1', x: '+=1', rotation: '-=1', ease: 'elastic.out( .5, 0.25)',
          })
        .to(svgout, 2,
          {
            y: '+=1', x: '-=1', rotation: '-=1', ease: 'power1.easeInOut',
          });
      this.$gsap.to(
        svgout,
        1.3,
        {
          y: '+=20vh',
          yoyo: true,
          repeat: -1,
          ease: 'power2.easeOut',
        },
      ); */
      gsap.to(svgout, {
        scrollTrigger: {
          trigger: bodyworkcard,
          start: 'top 30%',
          // toggleActions: 'restart resume reverse reverse',
          toggleActions: 'play pause resume reset',
          scrub: true,
        },
        opacity: -2,
        duration: 1.5,
      });
      gsap.to(svgout2, {
        scrollTrigger: {
          trigger: bodyworkcard,
          start: 'top 60%',
          // toggleActions: 'restart resume reverse reverse',
          toggleActions: 'play pause resume reset',
          scrub: true,
        },
        opacity: -2,
        duration: 1.5,
      });
      gsap.to(svgFilled, {
        scrollTrigger: {
          trigger: bodyworkcard,
          start: 'top 60%',
          // toggleActions: 'restart resume reverse reverse',
          toggleActions: 'play pause resume reset',
          scrub: true,
        },
        opacity: 0,
        duration: 1.5,
        scale: 2,
      });
      gsap.to(bodyworkcardinfoTitle, {
        scrollTrigger: {
          trigger: bodyworkcard,
          start: 'top 40%',
          scrub: true,
          toggleActions: 'restart resume reverse reverse',
        },
        y: '-30',
        duration: 1,
        transformOrigin: 'center center',
      });
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
<style scoped>
@media screen and (min-width: 601px) {
.body-work-card {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  height: 30vh;
}
.icon-above {
  display: grid;
  grid-template-rows: 0.1fr;
  grid-template-columns: 0.1fr;
  width: 7em;
  flex: 0 0 7em;
  flex-grow: 0;
}
.body-work-card-info-text {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}
.body-work-card-info {
  font-weight: 200;
  font-family: 'Jost', sans-serif;
  font-size: clamp(1em,2.5vw,1.5em);
  width: 60vw;
  flex: 0 0 60vw;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.body-work-card-date {
  font-weight: 200;
  font-family: 'Jost', sans-serif;
  font-size: clamp(1em,2.5vw,1.5em);
  width: 20vw;
  flex: 0 0 20vw;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.svg-in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row-start: 1;
  grid-column-start: 1;
}
.svg-out {
  grid-row-start: 1;
  grid-column-start: 1;
}
}
@media screen and (min-width: 100px) and (max-width: 600px) {
.body-work-card {
  display: grid;
  grid-template-rows: 0.9fr 0.1fr;
  grid-template-columns: 0.1fr 1fr;
}
.icon-above {
  grid-row-start: 1;
  grid-column-start: 1;
  display: grid;
  grid-template-rows: 0.1fr;
  grid-template-columns: 0.1fr;
}
.body-work-card-info {
  grid-row-start: 1;
  grid-column-start: 2;
  font-weight: 200;
  font-family: 'Jost', sans-serif;
  font-size: clamp(1em,2.5vw,1.5em);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.body-work-card-date {
  grid-row-start: 2;
  grid-column-start: 2;
  display: flex;
  font-weight: 200;
  font-family: 'Jost', sans-serif;
  font-size: clamp(1em,2.5vw,1.5em);
  flex-direction: column;
  align-items: center;
}
.svg-in {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-row-start: 1;
  grid-column-start: 1;
}
.svg-out {
  grid-row-start: 1;
  grid-column-start: 1;
}
}
</style>
