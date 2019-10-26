<template>
  <div id="event-detail-body">
    <div>
      <q-img src="https://placeimg.com/500/300/nature"></q-img>
    </div>
    <div style="padding-left: 12px; padding-right: 15px;margin-top: 10px;">
      <div class="row" style="margin-bottom: 4px;">
        <div class="col" style="font-size:20px;">Running</div>
      </div>
      <div class="row justify-between">
        <div class="col-6 flex-align">
          <q-icon name="today" style="margin-right: 6px;;font-size: 17px"></q-icon>
          <div>Jeudi 8 Janvier - 17h</div>
        </div>
        <div class="col-3" style="max-width: 72px;">
          <div class="difficulty">Débutant</div>
        </div>
      </div>
      <div class="row" style="margin-top:10px;">
        <div class="col flex-align">
          <q-icon name="beenhere" style="margin-right: 6px;font-size: 17px"></q-icon>
          <div>CK Sportcenter Kockelscheuer</div>
        </div>
      </div>
      <div class="row" style="margin-top:10px;">
        <div class="col">
          Organisateur:
          <span class="blue-light">Jhon Doe</span>
        </div>
      </div>
      <div class="row" style="margin-top:10px;">
        <div class="col">Participants (5) :</div>
      </div>
      <div class="row blue-light">
        <div class="col">
          Noël Flantier, Oksana Roger, Hubert de la Batte, Usain Bolt
          <span style="color: #3c3c43">et</span> Yasmin Clotilde
        </div>
      </div>
      <div class="row" style="margin-top:15px;">
        <div class="col">
          <b>Description :</b>
        </div>
      </div>
      <div class="row">
        <div class="col">
          Hello tout le monde !
          <br />Comme d'habitude je vous propose de vous retrouver sur le parking de Kockelscheuer pour une petite séance de running ensemble.
          <br />Venez nombreux :)
        </div>
      </div>
      <div class="row" style="margin-top:8px;">
        <div class="col">
          <b>Lieu :</b>
        </div>
      </div>
    </div>
    <div>
      <q-img :src="images.map"></q-img>
    </div>
    <div style="width: 100%; height: 45px;;">
      <q-btn
        style="width:100%; height:100%; background-color:#5856d6 !important"
        color="primary"
        :label="getLabel"
        :icon="getIcon"
        @click="onClick"
      />
    </div>
    <div class="text-white" style="position: absolute; top:10px; right:13px; font-size:24px;">
      <q-icon name="share"></q-icon>
    </div>
    <div class="text-white" style="position: absolute; top:6px; left:13px; font-size:32px;">
      <q-icon name="keyboard_backspace" @click="goBack"></q-icon>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.state.displayFooter = false;
  },
  data() {
    return {
      images: {
        map: require("./../assets/event_map.png")
      },
      inscrit: false,
      currEvent: this.$store.state.currEvent
    };
  },
  methods: {
    onClick() {
      this.inscrit = !this.inscrit;
    },
    goBack() {
      this.$router.back();
    }
  },
  computed: {
    getIcon() {
      return this.inscrit ? "cancel" : "check";
    },
    getLabel() {
      return this.inscrit ? "Se désinscrire" : "S'inscrire";
    }
  }
};
</script>

<style>
#event-detail-body {
  color: #3c3c43;
}

.difficulty {
  background-color: #a2f1e7;
  padding: 3px;
  padding-left: 10px;
  padding-right: 7px;
  border-radius: 8px;
  font-size: 12px;
}

.flex-align {
  align-items: center;
  display: flex;
}

.blue-light {
  color: #5856d6;
}
</style>