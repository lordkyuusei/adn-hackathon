<template>
  <div>
    <q-stepper v-model="step" header-nav ref="stepper" color="primary" animated>
      <q-step :name="1" title="Sports" icon="settings" :done="step > 1" :header-nav="step > 1">
        Quel(s) type(s) de sport préférez vous ?
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
              <div class="absolute-bottom text-subtitle2 text-center">Title</div>
            </q-img>
          </q-card>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
              <div class="absolute-bottom text-subtitle2 text-center">Title</div>
            </q-img>
          </q-card>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
              <div class="absolute-bottom text-subtitle2 text-center">Title</div>
            </q-img>
          </q-card>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
              <div class="absolute-bottom text-subtitle2 text-center">Title</div>
            </q-img>
          </q-card>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
              <div class="absolute-bottom text-subtitle2 text-center">Title</div>
            </q-img>
          </q-card>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
              <div class="absolute-bottom text-subtitle2 text-center">Title</div>
            </q-img>
          </q-card>
          <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" basic>
              <div class="absolute-bottom text-subtitle2 text-center">Title</div>
            </q-img>
          </q-card>
        </div>
        <q-stepper-navigation>
          <q-btn @click="() => { done1 = true; step = 2 }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Centres d'intérêt"
        icon="create_new_folder"
        :done="step > 2"
        :header-nav="step > 2"
      >
        Quels sont vos centres d'intérêt ?
        <q-stepper-navigation>
          <q-btn @click="() => { done2 = true; step = 3 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="3" title="Suivi progrès" icon="add_comment" :done="step > 3" :header-nav="step > 3">
        voulez vous que l'app mesure vos progrès sportifs ?
        <q-stepper-navigation>
          <q-btn @click="() => { done3 = true; step = 4 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
      <q-step :name="4" title="Suivi performances" icon="add_comment" :done="step > 4" :header-nav="step > 4">
        voulez vous être suivi dans vos activités
        <q-stepper-navigation>
          <q-btn @click="() => { done4 = true; step = 5 }" color="primary" label="Continue" />
          <q-btn flat @click="step = 3" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
      <q-step :name="5" title="Infos supplémentaires" icon="add_comment" :header-nav="step > 5">
        age sexe poids masse
        <q-stepper-navigation>
          <q-btn color="primary" @click="done3 = true" label="Finish" />
          <q-btn flat @click="step = 4" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1
    };
  }
};
</script>

<style>
</style>