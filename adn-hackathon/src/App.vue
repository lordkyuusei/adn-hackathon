<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          {{ $store.state.title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>-->

    <q-page-container>
      <router-view />
    </q-page-container>

    <footerCustom v-if="$store.state.displayFooter" />

  </q-layout>
</template>

<script>
import footerCustom from './components/Footer';

export default {
  name: "LayoutDefault",
  components: {
      footerCustom
  }
};
</script>

<style></style>
