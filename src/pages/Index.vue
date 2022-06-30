<template>
  <div>
    <Header />
      <div class="workBox" style="height:100vh;">
    <mark class="workTitle">Work</mark>
  </div>
  </div>
</template>
<script>
import Header from 'src/components/Header.vue';
// import Works from 'src/components/Works.vue';
import SCENE_1 from './scene1.json';
import SCENE_2 from './scene2.json';

export default {
  name: 'PageIndex',
  components: {
    Header,
    // Works,
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
  },
  methods: {
  },
};
</script>
