<template>
    <div ref="workBox" class="workBox">
      <div style="height:10vh;"><mark class="workTitle">Work</mark></div>
      <WorksCardWifi ref="boxcomtech"
      :titulo="comtech" :texto="txtComtech" :fecha="fecha"
      :svgin="svgWifi0"
      :svgout="svgWifi1"
      :svgout2="svgWifi2"/>
      <div style="width:50%; height:10vh;">
        <q-separator color="orange"/>
      </div>
      <WorksCard ref="boxwherex"
      :titulo="wherex" :texto="txtWherex" :fecha="fecha" :svgvalue="svgWherex"/>
      <div style="width:50%; height:10vh;">
        <q-separator color="orange"/>
      </div>
      <WorksCardBox ref="boxfalabella"
      :titulo="falabella"
      :svgin="svgBox"
      :svgout="svgArrow"
      :texto="txtFalabella" :fecha="fecha" :svgvalue="svgFalabella"/>
      <div style="width:50%; height:10vh;">
        <q-separator color="orange"/>
      </div>
      <div>
        <SvgWomen />
      </div>
    </div>
</template>

<script>
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import WorksCard from 'src/components/WorksCard.vue';
import WorksCardWifi from 'src/components/WorksCardWifi.vue';
import WorksCardBox from 'src/components/WorksCardBox.vue';
// import SvgAirPlane from 'src/components/SvgAirPlane.vue';
import SvgWomen from 'src/components/SvgWomen.vue';
// eslint-disable-next-line
import svgComtech from '!!raw-loader?!assets/comtech.svg';
// eslint-disable-next-line
import svgWherex from '!!raw-loader?!assets/wherex.svg';
// eslint-disable-next-line
import svgFalabella from '!!raw-loader?!assets/falabella.svg';
// eslint-disable-next-line
import svgCitiaps from '!!raw-loader?!assets/citiaps.svg';
// eslint-disable-next-line
import svgTeacher from '!!raw-loader?!assets/teacher.svg';
// eslint-disable-next-line
import svgBox from '!!raw-loader?!assets/box.svg';
// eslint-disable-next-line
import svgArrow from '!!raw-loader?!assets/arrow.svg';
// eslint-disable-next-line
import svgWifi0 from '!!raw-loader?!assets/wifi0.svg';
// eslint-disable-next-line
import svgWifi1 from '!!raw-loader?!assets/wifi1.svg';
// eslint-disable-next-line
import svgWifi2 from '!!raw-loader?!assets/wifi2.svg';

export default {
  name: 'Works',
  components: {
    WorksCard,
    WorksCardWifi,
    WorksCardBox,
    // SvgAirPlane,
    SvgWomen,
  },
  data() {
    return {
      svgWifi0,
      svgWifi1,
      svgWifi2,
      showMap: false,
      showAnimation: true,
      svgComtech,
      svgWherex,
      svgArrow,
      svgFalabella,
      svgCitiaps,
      svgTeacher,
      svgBox,
      comtech: 'Comtech',
      wherex: 'Wherex',
      falabella: 'Falabella',
      citiaps: 'Citiaps',
      teacher: 'Teacher',
      texto: 'lorem',
      fecha: '22/05/1993',
      txtComtech: 'Global provider of 911 emergency systems and critical wireless communication technologies.',
      txtWherex: 'Web platform for quotes and tenders that aims to transform the acquisition processes of big companies.',
      txtFalabella: 'Geosort project, software responsible for planning, tracking and geocoding orders from Falabella.com.',
      txtCitiaps: 'Platforms for managing volunteers and government entities in situations of national catastrophes such as earthquakes or tsunamis.',
    };
  },
  mounted() {
    // ScrollTrigger.refresh();
    // this.animationOnEnter();
  },
  methods: {
    animationOnEnter() {
      // const { headerbox, item3, item3img } = this.$refs;
      const {
        // boxcomtech,
        workBox,
        // boxwherex,
        // boxfalabella,
        // boxcitiaps,
        // boxteacher,
      } = this.$refs;
      const gsap = this.$gsap;
      /*       gsap.to(workBox, {
        scrollTrigger: {
          trigger: workBox,
          start: 'top 60%',
          // toggleActions: 'restart resume reverse reverse',
          toggleActions: 'play pause resume reset',
          scrub: true,
          backgroundColor: 'red',
        },
        opacity: 0,
        duration: 0.3,
      }); */
      gsap.set(workBox, {
        backgroundColor: 'lightblue',
      });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workBox,
          pin: true,
          scrub: true,
          end: () => `+=${workBox.offsetWidth}`,
        },
      });
      tl
        .to(workBox,
          {
            xPercent: -100 * (workBox.length - 1),
            backgroundColor: '#77849e',
            lazy: false,
            duration: 1.7,
            ease: 'power1.inOut',
          })
        .to(workBox,
          {
            backgroundColor: '#463333',
            lazy: false,
            duration: 1.7,
            ease: 'power1.inOut',
          },
          0)
        .to(workBox,
          {
            backgroundColor: '#1a1813',
            lazy: false,
            duration: 1.7,
            ease: 'power1.inOut',
          },
          1);
    },
  },
};
</script>
