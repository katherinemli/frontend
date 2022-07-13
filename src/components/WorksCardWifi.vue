<template>
  <div v-intersection="onIntersection"
  @mouseover="overHover()" @mouseleave="leaveHover()" ref="bodyworkcard"
  class="body-work-card">
    <div class="icon-above" ref="iconabove">
      <div class="svg-in" ref="svgin">
        <q-icon size="7em" :name="svgPIn" />
      </div>
      <div class="svg-out" ref="svgout">
        <q-icon size="7em" :name="svgPout" />
      </div>
      <div class="svg-out" ref="svgout2">
        <q-icon size="7em" :name="svgPout2" />
      </div>
    </div>
    <div ref="bodyworkcardinfo" class="body-work-card-info">
      <div ref="bodyworkcardinfoTitle" class="body-work-card-info-title">
        {{titulo}}
      </div>
      <div class="body-work-card-info-text">{{texto}}</div>
    </div>
    <div ref="bodyworkcarddate" class="body-work-card-date">{{fecha}}</div>
  </div>
</template>

<script>
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  name: 'WorksCardWifi',
  data() {
    return {
      showMap: false,
      showAnimation: true,
      colorFace: '#9B4E5A',
      visible: false,
      sizeIcon: '10vw',
    };
  },
  watch: {
    // eslint-disable-next-line
    '$q.screen.width'() {
      if (this.$q.screen.width > 600) {
        console.log('pantalla grande');
        this.sizeIcon = '10vw';
      } else {
        console.log('pequena');
        this.sizeIcon = '22vw';
      }
    },
  },
  computed: {
    sizeIconComputed() {
      return this.sizeIcon;
    },
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
  },
  methods: {
    onIntersection(entry) {
      this.visible = entry.isIntersecting;
      // ScrollTrigger.refresh();
      this.animationOnEnter();
    },
    animationOnEnter() {
      const {
        svgFilled,
        svgout,
        svgout2,
        bodyworkcard,
        iconabove,
      } = this.$refs;
      const gsap = this.$gsap;

      gsap.to(svgout2, {
        scrollTrigger: {
          trigger: bodyworkcard,
          start: 'bottom 70%',
          toggleActions: 'play pause resume reset',
          scrub: true,
        },
        opacity: -2,
        duration: 1.5,
      });
      gsap.to(svgout, {
        scrollTrigger: {
          trigger: bodyworkcard,
          start: 'bottom 60%',
          toggleActions: 'play pause resume reset',
          scrub: true,
        },
        opacity: -2,
        duration: 1.5,
      });
      gsap.to(iconabove, {
        y: 1,
        repeat: -1,
        yoyo: true,
      });
      gsap.to(svgFilled, {
        scrollTrigger: {
          trigger: bodyworkcard,
          start: 'top 100%',
          toggleActions: 'play pause resume reset',
          scrub: true,
        },
        opacity: 0,
        duration: 1.5,
        scale: 2,
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
  flex-direction: row;
  height: 30vh;
}
.body-work-card-info-text {
  text-align: center;
}
.body-work-card-info-title {
  text-align: center;
}
.icon-above {
  display: grid;
  grid-template-rows: 0.1fr;
  grid-template-columns: 0.1fr;
  width: 7em;
  flex: 0 0 7em;
  flex-grow: 0;
}
.body-work-card-info {
  font-weight: 200;
  font-family: 'Jost', sans-serif;
  font-size: clamp(1em,2.5vw,1.5em);
  width: 60vw;
  flex: 0 0 60vw;
  flex-grow: 0;
}
.body-work-card-date {
  font-weight: 200;
  font-family: 'Jost', sans-serif;
  font-size: clamp(1em,2.5vw,1.5em);
  width: 11vw;
  flex: 0 0 11vw;
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
.body-work-card-info-text {
  padding: 0 1% 0 1%;
  text-align: center;
}
.body-work-card-info-title {
  text-align: center;
}
}
</style>
