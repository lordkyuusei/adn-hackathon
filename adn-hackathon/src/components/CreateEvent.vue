<template>
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">Your address</div>
      </q-card-section>

      <q-card-section>
        <q-input dense v-model="address" autofocus @keyup.enter="prompt = false" />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup @click="finishCreation" />
        <q-btn flat label="Add address" v-close-popup @click="finishCreation" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  props: {
    prompt: Boolean
  },
  methods: {
    finishCreation() {
      this.prompt = false;
    }
  },
  computed: {
      sport() {
          return [
              { Id: 1, Name: 'Aviron', Description: 'sport'},
              { Id: 2, Name: 'Basketball', Description: 'sport'},
              { Id: 3, Name: 'Badminton', Description: 'sport'}
          ]
      }
  }
};
</script>