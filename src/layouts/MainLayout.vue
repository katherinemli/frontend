<template>
<q-layout view="hHr lpR fFf">
      <q-header reveal bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Calculo de rutas
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs align="center">
        <q-route-tab to="/page1" label="Choose Address" />
        <q-route-tab to="/page2" label="Create Route" />
        <q-route-tab to="/page3" label="Follow Driver" />
      </q-tabs>
    </q-header>
  <q-page-container>
  <router-view />
  </q-page-container>

  </q-layout>

</template>

<script>

export default ({
  name: 'MainLayout',
  data() {
    return {

    };
  },
});
</script>
