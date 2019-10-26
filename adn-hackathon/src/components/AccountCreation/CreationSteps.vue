<template>
  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-card class="text-black" v-show="step === 1">
        <q-card-section>
          <div class="text-h6">Souhaitez vous suivre...</div>
          <div class="text-subtitle2">Vos performances sportives ?</div>
        </q-card-section>
        <q-separator dark />
        <q-card-actions>
          <q-btn color="primary" text-white @click="onNextChoice(1, true)">OUI</q-btn>
          <q-btn flat @click="onNextChoice(1, false)">Non, pas maintenant</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="text-black" v-show="step === 2">
        <q-card-section>
          <div class="text-h6">Souhaitez vous suivre...</div>
          <div class="text-subtitle2">Vos progrès physiques ?</div>
        </q-card-section>
        <q-card-section>Poids, masse musculaire...</q-card-section>
        <q-separator dark />
        <q-card-actions>
          <q-btn color="primary" text-white @click="onNextChoice(2, true)">OUI</q-btn>
          <q-btn flat @click="onNextChoice(2, false)">Non, pas maintenant</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="text-black" v-show="step === 3">
        <q-card-section>
          <div class="text-h6">Quel est...</div>
          <div class="text-subtitle2">Votre sexe ?</div>
        </q-card-section>
        <q-separator dark />
        <q-card-section>
          <q-btn-toggle
            v-model="genre"
            toggle-color="primary"
            :options="[{label: 'JE SUIS UN HOMME', value: '1'},{label: 'JE SUIS UNE FEMME', value: '2'}]"
          />
        </q-card-section>
        <q-card-actions>
          <q-btn color="primary" text-white @click="onNextChoice(3, genre)">Valider</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="text-black" v-show="step === 4">
        <q-card-section>
          <div class="text-h6">Quelle est...</div>
          <div class="text-subtitle2">Votre taille ? ({{ size }}cm)</div>
        </q-card-section>
        <q-separator dark />
        <q-card-section>
          <q-slider v-model="size" :min="0" :max="200" />
        </q-card-section>
        <q-card-actions>
          <q-btn color="primary" text-white @click="onNextChoice(4, size)">Suivant</q-btn>
          <q-btn flat @click="onNextChoice(4, 0)">Ne pas renseigner</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="text-black" v-show="step === 5">
        <q-card-section>
          <div class="text-h6">Quel est...</div>
          <div class="text-subtitle2">Votre poids ? ({{ weight }}kg)</div>
        </q-card-section>
        <q-card-section>
          <q-slider v-model="weight" :min="0" :max="200" :step="0.1" />
        </q-card-section>
        <q-separator dark />
        <q-card-actions>
          <q-btn color="primary" text-white @click="onNextChoice(5, weight)">Suivant</q-btn>
          <q-btn flat @click="onNextChoice(5, 0)">Ne pas renseigner</q-btn>
        </q-card-actions>
      </q-card>

      <q-card class="text-black" v-show="step === 6">
        <q-card-section>
          <div class="text-h6">Quelle est...</div>
          <div class="text-subtitle2">Votre date de naissance ?</div>
        </q-card-section>
        <q-card-section>
          <q-input filled v-model="birthday" mask="date" :rules="['date']">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                  <q-date v-model="birthday" @input="() => $refs.qDateProxy.hide()" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </q-card-section>
        <q-separator dark />
        <q-card-actions>
          <q-btn color="primary" text-white @click="onEndChoice(6, birthday)">Suivant</q-btn>
          <q-btn flat @click="onEndChoice(6, 0)">Ne pas renseigner</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      slide: "style",
      date: null,
      choices: {},
      genre: {},
      size: 0,
      weight: 0,
      birthday: null
    };
  },
  methods: {
    onNextChoice(step, value) {
      this.choices.step = value;
      this.step += 1;
    },
    onEndChoice(step, value) {
      this.onNextChoice(step, value);
      this.$emit("finish-stats");
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
</style>