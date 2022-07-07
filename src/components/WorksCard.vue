<template>
    <div class="body-work-card">
      <div class="body-work-card-icon">
        <!--  <q-btn icon="icon-svg" /> -->
        <!-- <q-icon name="icon-svg" /> -->
<!--         <svg
        viewBox='0 0 61 60'
        height='512'
        width='512'
        class='icon-svg'>
        </svg> -->
        <!-- <q-icon v-html="$options.filters.svg('home')" ></q-icon> -->
        <q-icon size="10vw" :name="girlSvg" />
      </div>
      <div class="body-work-card-info">
        <div>{{titulo}}
    <q-btn :dense="$q.screen.xs" no-caps label="Hair" icon-right="colorize" color="secondary">
      <q-popup-proxy transition-show="scale" transition-hide="scale">
        <q-color v-model="colorFace" />
      </q-popup-proxy>
    </q-btn>
        </div>
        <div>{{texto}}</div>
      </div>
      <div class="body-work-card-date">{{fecha}}</div>
    </div>
</template>

<script>
// eslint-disable-next-line
import svg from '!!raw-loader?!assets/icons.svg';

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
};

export default {
  props,
  name: 'WorksCard',
  data() {
    return {
      svg,
      showMap: false,
      showAnimation: true,
      colorFace: '#9B4E5A',
    };
  },
  computed: {
    girlSvg() {
      // console.log('svg:', `img:data:image/svg+xml;charset=utf8,${this.svg}`);
      // console.log(this.fillOcurrences(this.svg));
      // eslint-disable-next-line
      //const svgColored = this.svg.replaceAll('#', '%23');
      // eslint-disable-next-line
      const svgColored = this.fillOcurrences(this.svg, this.colorFace);
      return `img:data:image/svg+xml;charset=utf8,${svgColored}`;
    },
  },
  methods: {
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
  },
};
</script>
