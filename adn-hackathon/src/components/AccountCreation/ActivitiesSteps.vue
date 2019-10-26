<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-md" v-if="step === 0">
      Dans quel contexte aimez-vous faire du sport ?
      <q-card
        :key="interest.id"
        v-for="interest in interests"
        class="my-card"
        :class="{ pick: selectedInterest.includes(interest) }"
        @click="onTriggerInterest(interest)"
      >
        <q-btn size="15px" flat class="full-width">{{ interest.name }}</q-btn>
      </q-card>
      <q-btn color="primary" class="q-mt-md" @click="onNextToSports()">Etape suivante</q-btn>
      <q-btn flat color="secondary" @click="step += 1">Passer cette étape</q-btn>
    </div>

    <div class="q-pa-md row items-start q-gutter-md" v-else-if="step === 1">
      Choississez maintenant les sports qui vous plaisent:
      <q-card
        :key="sport.id"
        v-for="sport in sports"
        class="my-card"
        @click="onTriggerSport(sport)"
      >
        <q-img :src="require(`@/assets/${sport.name.toLowerCase()}.jpg`)">
          <div
            :class="{ pick2: selectedSports.includes(sport) }"
            class="text-h5 absolute-bottom text-right"
          >{{ sport.name }}</div>
        </q-img>
      </q-card>
      <q-btn color="primary" @click="onNextToGoals()">Suivant</q-btn>
    </div>

    <div class="q-pa-md row items-start q-gutter-md" v-else-if="step === 2">
      Que souhaitez-vous accomplir ? (3 choix max.)
      <q-card
        :key="goal.id"
        v-for="goal in goals"
        class="my-card"
        :class="{ pick: selectedGoals.includes(goal) }"
        @click="onTriggerGoal(goal)"
      >
        <q-btn size="15px" flat class="full-width">{{ goal.name }}</q-btn>
      </q-card>
      <q-btn color="primary" @click="onNextToStats()">Finir cette étape</q-btn>
      <q-btn color="primary" @click="step += 1">Passer cette étape</q-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: [],
      selectedInterest: [],
      step: 0,
      sports: [],
      selectedSports: [],
      goals: [],
      selectedGoals: []
    };
  },
  created() {
    this.$store
      .dispatch("getInterests")
      .then(response => {
        const { data } = response;
        this.interests = data;
        this.interests.forEach(interest => (interest.select = null));
      })
      .catch(() => {
        this.$q.notify("Fetching interests failure");
      });
  },
  methods: {
    selectInterest(interest) {
      this.$set(interest, "selected", interest.selected ? false : true);
    },
    getSelectedInterest() {
      return this.selectedInterest;
    },
    onTriggerInterest(interest) {
      if (this.selectedInterest.includes(interest)) {
        this.selectedInterest = this.selectedInterest.filter(
          elem => elem.id != interest.id
        );
      } else {
        this.selectedInterest.push(interest);
      }
    },
    onTriggerSport(sport) {
      if (this.selectedSports.includes(sport)) {
        this.selectedSports = this.selectedSports.filter(
          elem => elem.id != sport.id
        );
      } else {
        this.selectedSports.push(sport);
      }
    },
    onTriggerGoal(goal) {
      if (this.selectedGoals.includes(goal)) {
        this.selectedGoals = this.selectedGoals.filter(
          elem => elem.id != goal.id
        );
      } else {
        this.selectedGoals.push(goal);
      }
    },
    onNextToSports() {
      this.step += 1;
      this.$store
        .dispatch("getSports", this.selectedInterest)
        .then(response => {
          const { data } = response;
          this.sports = data;
        });
    },
    onNextToGoals() {
      this.step += 1;
      this.$store.dispatch("getGoals").then(response => {
        const { data } = response;
        this.goals = data;
      });
    },
    onNextToStats() {
      // save user
      this.$emit("finish-activities");
    }
  }
};
</script>

<style>
.my-card {
  text-align: center;
  width: 45%;
  max-width: 250px;
}

.pick {
  background-color: #9093e4 !important;
  color: white;
}

.pick2 {
  background-color: rgba(89, 87, 214, 0.6) !important;
  color: white;
}
</style>