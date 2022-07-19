<template>
  <q-layout view="hHr lpR fFf">
     <q-resize-observer @resize="onResize" />
<!-- <q-header
v-if="drawerState" reveal class="background-color-set" height-hint="98">
      <div class="noise-overlay"></div>
      <div ref="cursor"></div>
      <div ref="cursorFollower"></div>
      <q-toolbar>
        <q-toolbar-title>
          <q-icon class="text-dark">
            <img src="~assets/me.jpg" />
          </q-icon>
        </q-toolbar-title>
        <q-tabs inverted>
          <q-route-tab default name="index" :to="'/'" label="Index"/>
          <q-route-tab name="map" :to="'/map'" label="Map Routing"/>
          <q-route-tab name="graph" :to="'/graph'" label="Graphs"/>
        </q-tabs>
        <q-btn
          flat @click="openURL(urlGithubProject)"
           label="@katherinemli"
          color="rgb(61, 255, 190)" icon="code" />
        <q-btn
        @click="openURL(urlGmail)"
        flat label="katherine.lib.ira@gmail.com" icon="gmail"></q-btn>
      </q-toolbar>
    </q-header>
        <q-header v-else reveal class="background-color-set" height-hint="98">
      <div class="noise-overlay"></div>
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
    </q-header> -->
    <q-page-sticky expand position="top">
      <q-toolbar class="text-black">
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
        </q-avatar>
        <q-toolbar-title>
          Page Title
        </q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
    <div class="noise-overlay"></div>
    <q-page-container >
      <router-view/>
<!--       <q-tab-panels ref="paneltab" v-model="tab" class="background-color-set">
        <q-tab-panel class="q-ma-none q-pa-none" name="index">
          <router-view/>
        </q-tab-panel> -->
<!--         <q-tab-panel name="map">
          <router-view/>
        </q-tab-panel>
        <q-tab-panel name="graph">
          <router-view/>
        </q-tab-panel> -->
      <!-- </q-tab-panels> -->
    </q-page-container>

  </q-layout>

</template>

<script>
import { openURL } from 'quasar';

export default ({
  name: 'MainLayout',
  components: {
  },
  data() {
    return {
      urlGmail: 'https://mail.google.com/mail/?view=cm&fs=1&to=katherine.lib.ira@gmail.com&su=I%20have%20a%20project%20in%20mind&body=I%20hope%20hear%20from%20you%20soon!',
      urlGithubProject: 'https://github.com/katherinemli',
      drawerState: true,
      tab: 'index',
    };
  },
  mounted() {
  },
  methods: {
    openURL,
    onResize(size) {
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
