<template>
  <q-layout view="hHr lpR fFf">
     <q-resize-observer @resize="onResize" />
<q-header v-if="drawerState" reveal class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          Routing
        </q-toolbar-title>
        <q-btn
          flat @click="openURL(urlGithubProject)"
           label="@katherinemli"
          color="rgb(61, 255, 190)" icon="code" />
        <q-btn
        @click="openURL(urlGmail)"
        flat label="katherine.lib.ira@gmail.com" icon="gmail"></q-btn>
      </q-toolbar>
    </q-header>
        <q-header v-else reveal class="bg-white text-black" height-hint="98">
      <q-toolbar>
        <q-btn
          flat @click="openURL(urlGithubProject)"
           label="@katherinemli"
          color="rgb(61, 255, 190)"/>
        <q-btn
        @click="openURL(urlGmail)"
        flat label="katherine.lib.ira@gmail.com">
        </q-btn>
        <q-toolbar-title>
          Routing
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>

</template>

<script>
import { openURL } from 'quasar';

export default ({
  name: 'MainLayout',
  data() {
    return {
      urlGmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=katherine.lib.ira@gmail.com&su=I%20have%20a%20project%20in%20mind&body=I%20hope%20hear%20from%20you%20soon!',
      urlGithubProject: 'https://github.com/katherinemli',
      drawerState: true,
    };
  },
  methods: {
    openURL,
    onResize(size) {
      console.log(size);
      // {
      //   width: 1200 // width of viewport (in px)
      //   height: 920 // height of viewport (in px)
      // }
      if (size.width < 1000) { // md is 992px
        this.drawerState = false;
      } else {
        this.drawerState = true;
      }
    },
  },
});
</script>
