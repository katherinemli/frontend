<template>
  <div v-intersection="onIntersection"
  @mouseover="overHover()" @mouseleave="leaveHover()" ref="bodyworkcard" class="body-work-card">
    <div class="icon-above">
      <div class="svg-in" ref="svgin">
        <q-icon :size="sizeIconComputed" :name="svgPIn" />
      </div>
      <div class="svg-out" ref="svgout">
        <q-icon :size="sizeIconComputed" :name="svgPout" />
      </div>
      <div class="svg-out" ref="svgout2">
        <q-icon :size="sizeIconComputed" :name="svgPout2" />
      </div>
    </div>
    <div ref="bodyworkcardinfo" class="body-work-card-info">
      <div class="body-work-card-info-title" ref="bodyworkcardinfoTitle">
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
        // bodyworkcardinfoTitle,
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
