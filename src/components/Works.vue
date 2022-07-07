<template>
    <div class="workBox" style="height:100vh;">
      <mark class="workTitle">Work</mark>
      <WorksCard :titulo="comtech" :texto="texto" :fecha="fecha"/>
      <WorksCard :titulo="wherex" :texto="texto" :fecha="fecha"/>
      <WorksCard :titulo="falabella" :texto="texto" :fecha="fecha"/>
      <WorksCard :titulo="citiaps" :texto="texto" :fecha="fecha"/>
      <WorksCard :titulo="teacher" :texto="texto" :fecha="fecha"/>
    </div>
</template>

<script>
import WorksCard from 'src/components/WorksCard.vue';

export default {
  name: 'Works',
  components: {
    WorksCard,
  },
  data() {
    return {
      showMap: false,
      showAnimation: true,
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
