<template>
  <div class="q-pa-md" style="max-width: 400px">
    <ActivitiesSteps v-if="!step" v-on:finish-activities="onEndActivitiesEvent" />
    <CreationSteps v-else v-on:finish-stats="onEndStatsEvent" />
  </div>
</template>

<script>
import CreationSteps from "../components/AccountCreation/CreationSteps";
import ActivitiesSteps from "../components/AccountCreation/ActivitiesSteps";

export default {
  components: {
    CreationSteps,
    ActivitiesSteps
  },
  data() {
    return {
      step: 0
    };
  },
  methods: {
    onEndActivitiesEvent() {
      this.step += 1;
    },
    onEndStatsEvent() {
      this.$router.push("events");
    }
  }
};
</script>

<style>
</style>