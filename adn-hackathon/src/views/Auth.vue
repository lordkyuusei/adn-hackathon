<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-toggle v-model="isNew" label="Créer un compte" />
    <q-form class="q-gutter-md">
      <q-input
        filled
        v-model="email"
        label="Email"
        hint="k.poirot@adneom.lu"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Tapez votre email']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="********"
        hint="Password"
        lazy-rules
        :rules="[
          val => (val !== null && val !== '') || 'Tapez votre mot de passe'
        ]"
      />

      <q-input
        filled
        v-if="isNew"
        v-model="pseudo"
        label="Pseudonyme"
        hint="Lipton zéro sucres"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Tapez pseudonyme']"
      />

      <div>
        <q-btn
          :label="!isNew ? 'Connecter' : 'Créer'"
          type="submit"
          color="primary"
          @click="onAuthAttempt"
        />
        <q-btn
          label="Retour"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
          @click="onResetAttempt"
        />
      </div>
    </q-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      pseudo: "",
      isNew: false
    };
  },
  methods: {
    onAuthAttempt() {
      if (!this.isNew) {
        const data = {
          email: this.email,
          password: this.password
        };
        this.$store
          .dispatch("login", data)
          .then(response => {
            const { data } = response;
            this.$store.commit("setUser", data);
            this.$q.notify(`Login successful, ${data.username}`);
            this.$router.push("events");
          })
          .catch(error => {
            console.log(error);
            this.$q.notify("Login failure. Check your credentials.");
          });
      } else {
        const data = {
          emailAdress: this.email,
          password: this.password,
          username: this.pseudo
        };
        this.$store
          .dispatch("create", data)
          .then(response => {
            const { data } = response;
            data.userInterests = [];
            data.userSports = [];
            data.userGoals = [];
            data.userEvents = [];
            this.$store.commit("setUser", data);
            this.$q.notify(`Creation successful, ${data.username}`);
            this.$router.push("create");
          })
          .catch(() => {
            this.$q.notify("Creation failure. Check your credentials.");
          });
      }
    },
    onResetAttempt() {
      this.email = "";
      this.password = "";
    }
  }
};
</script>
