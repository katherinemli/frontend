<template>
  <Header />
</template>
<script>
import Header from 'src/components/Header.vue';
import SCENE_1 from './scene1.json';
import SCENE_2 from './scene2.json';

export default {
  name: 'PageIndex',
  components: {
    Header,
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
