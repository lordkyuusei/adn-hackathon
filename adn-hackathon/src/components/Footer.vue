<template>
  <q-footer elevated class="bg-white" style="height: 68px; color: red !important">
    <q-tabs
      v-model="tab"
      no-caps
      active-color="primary"
      indicator-color="transparent"
      class="text-grey"
    >
      <q-tab name="home" label="Accueil" icon="home" />
      <q-tab name="events" label="Événement" icon="where_to_vote" />
      <q-tab name="profil" label="Profil" icon="person_outline" />
    </q-tabs>
  </q-footer>
</template>

<script>
export default {
  data() {
    return {
      tab: "home"
    };
  }
};
</script>