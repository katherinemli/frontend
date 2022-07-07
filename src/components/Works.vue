<template>
    <div class="workBox">
      <mark class="workTitle">Work</mark>
      <WorksCard :titulo="comtech" :texto="texto" :fecha="fecha" :svgvalue="svgComtech"/>
      <WorksCard :titulo="wherex" :texto="texto" :fecha="fecha" :svgvalue="svgWherex"/>
      <WorksCard :titulo="falabella" :texto="texto" :fecha="fecha" :svgvalue="svgFalabella"/>
      <WorksCard :titulo="citiaps" :texto="texto" :fecha="fecha" :svgvalue="svgCitiaps"/>
      <WorksCard :titulo="teacher" :texto="texto" :fecha="fecha" :svgvalue="svgTeacher"/>
    </div>
</template>

<script>
import WorksCard from 'src/components/WorksCard.vue';
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

export default {
  name: 'Works',
  components: {
    WorksCard,
  },
  data() {
    return {
      showMap: false,
      showAnimation: true,
      svgComtech,
      svgWherex,
      svgFalabella,
      svgCitiaps,
      svgTeacher,
      comtech: 'Comtech',
      wherex: 'Wherex',
      falabella: 'Falabella',
      citiaps: 'Citiaps',
      teacher: 'Teacher',
      texto: 'lorem',
      fecha: '22/05/1993',
    };
  },
};
</script>
