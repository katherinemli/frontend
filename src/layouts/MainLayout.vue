<template>
<q-layout view="hHr lpR fFf">
      <q-header reveal class="bg-white text-black" height-hint="98">
      <q-toolbar>
                 <q-avatar>
            <img src="https://scontent.fymy1-2.fna.fbcdn.net/v/t39.30808-6/277559713_10229060095865954_9049664362750812883_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=r8AusFuiJAMAX_nRMPc&_nc_ht=scontent.fymy1-2.fna&oh=00_AT8haQqxTBuLsbHpJAShhztpkPIksmGcaiDg1F951NrYnw&oe=62767D3D">
          </q-avatar>
        <q-toolbar-title>
          Routing
        </q-toolbar-title>
        <q-btn flat round dense icon="mail">katherine.lib.ira@gmail.com</q-btn>
      </q-toolbar>
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
