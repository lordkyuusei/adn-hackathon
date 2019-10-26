<template>
  <q-dialog v-model="prompt" persistent>
    <q-card style="min-width: 350px;">
      <q-card-section>
        <div class="text-h6">Créer un événement</div>
      </q-card-section>

      <q-card-section>
        <div class="row">
          <div class="col-12">
            <div class="q-pa-md">
              <q-input filled v-model="date">
                <template v-slot:prepend>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-date v-model="date" mask="YYYY-MM-DD HH:mm" />
                    </q-popup-proxy>
                  </q-icon>
                </template>

                <template v-slot:append>
                  <q-icon name="access_time" class="cursor-pointer">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                      <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <q-select v-model="sportModel" :options="sportName" label="Sport" />
          </div>
        </div>
        <div>
          <div class="col-12">
            <q-input v-model="text" label="Titre" />
          </div>
        </div>
        <div class="row" style="margin-top: 30px;">
          <div class="col-12">
            <q-input v-model="description" filled autogrow />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn flat label="Cancel" v-close-popup @click="$emit('finish-creation')" />
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
      let event = {
        title: this.text,
        description: this.description,
        dateevent: this.date,
        latitude: 10,
        longitude: 10,
        sportId: 1
      };

      this.$store
        .dispatch("createEvent", event)
        .then(response => {
          const { data } = response;
          this.$q.notify(`Successfully created an event, ${data.title}`);
        })
        .catch(() => {
          this.$q.notify("Error creating the event");
        });

      this.$emit("finish-creation");
    }
  },
  data() {
    return {
      sportModel: null,
      text: null,
      description: "",
      date: "2019-02-01 12:44"
    };
  },
  computed: {
    sport() {
      return [
        { Id: 1, Name: "Aviron", Description: "sport" },
        { Id: 2, Name: "Basketball", Description: "sport" },
        { Id: 3, Name: "Badminton", Description: "sport" }
      ];
    },
    sportName() {
      return ["Aviron", "Basketball", "Badminton"];
    }
  }
};
</script>