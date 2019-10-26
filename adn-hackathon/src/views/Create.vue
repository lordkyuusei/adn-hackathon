<template>
  <div class="q-pa-md" style="max-width: 400px">
      <CreationSteps />
    <!-- <q-form class="q-gutter-md">
      <q-input
        filled
        type="number"
        v-model.number="age"
        label="Âge (années)"
        hint="18"
        lazy-rules
        :rules="[val => (val && val >= 0 && val <= 99)]"
      ></q-input>
      <div class="q-gutter-sm">
        <q-radio v-model="genre" val="1" label="Homme" />
        <q-radio v-model="genre" val="2" label="Femme" />
        <q-radio v-model="genre" val="0" label="Non défini" />
      </div>
      <div class="q-pa-md">
        <q-badge color="secondary">Model: {{ height }} (0 à 200cm)</q-badge>
        <q-slider v-model="height" :min="0" :max="200" />
        <q-badge color="secondary">Model: {{ weight }} (0 à 200kg)</q-badge>
        <q-slider v-model="weight" :min="0" :max="200" color="green" />
      </div>
    </q-form> -->
  </div>
</template>

<script>
import CreationSteps from "../components/AccountCreation/CreationSteps";
export default {
  components: {
    CreationSteps
  },
  created() {
    this.$store.commit("setTitle", "Account creation");
  },
  data() {
    return {
      age: 0,
      genre: 0,
      height: 0,
      weight: 0
    };
  }
};
</script>

<style>
</style>