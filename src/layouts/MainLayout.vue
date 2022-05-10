<template>
  <q-layout view="hHr lpR fFf">
    <q-header reveal class="bg-white text-black" height-hint="98">
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
    };
  },
  methods: {
    openURL,
  },
});
</script>
