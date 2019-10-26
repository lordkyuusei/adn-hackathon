<template>
  <div id="list-events-body">
    <div class="row header-events" style="height: 126px;">
      <div class="col-6 left-top" style>
        Bonjour
        <br />Anne-Sophie !
      </div>
      <div class="col-6 right-top">
        <div class="row justify-end">
          <div class="col-9">Mardi 6 Janvier</div>
        </div>
        <div class="row justify-end" style="height: 40px;padding-right: 16px">
          <div class="col-9 black-opacity">
            <div class="row" style="height: 100%">
              <div class="weather">
                <img :src="images.weather" style="height: 25px" />
              </div>
              <div style="margin-left: 12px;margin-right: 7px">
                <img :src="images.celcius" style="height: 25px" />
              </div>
              <div style="padding-top: 3px;font-size: 15px; color: white; font-weight: 300">4°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row content" style="padding-top: 25px;">
      <div style="max-height: 140px;">
        <div class="row justify-center" style="padding-right: 10px;">
          <div class="filter-btn" :class="{'filter-btn-inactive': !myEventSelected}" @click="changeFilterOnClick">
            <q-icon name="today" style="font-size: 22px;"></q-icon>
            <br />Vos prochains événements
          </div>
          <div class="col-5 filter-btn" :class="{'filter-btn-inactive': myEventSelected}" @click="changeFilterOnClick">
            <q-icon name="where_to_vote" style="font-size: 22px;"></q-icon>
            <br />Evénements autour de vous
          </div>
        </div>
      </div>
      <div style="max-height:540px; overflow: scroll">
        <div
          class="row"
          v-for="e in events"
          :key="e.id"
          style="margin-bottom:15px;height: 85px; width:340px;margin-left:17px;background: white;border-radius: 8px; padding: 10px;"
          @click="navigateOnClick"
        >
          <div style="width:100%">
            <div class="row justify-between">
              <div class="col-4 title-event">{{e.title}}</div>
              <div class="col-3 difficulty">{{e.difficulty}}</div>
            </div>
            <div class="row">
              <div class="col" style="font-weight: 500;">{{e.date}}</div>
            </div>
            <div class="row" style="color: #9BA6B2;">
              <div class="col">{{e.lieu}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="add-event">
      <q-btn id="add-event" round color="primary" icon="add" @click="createEventOnClick"/>
    </div>
    <CreateEvent :prompt="createEvent" />
  </div>
</template>

<script>
import CreateEvent from '../components/CreateEvent'

export default {
  created() {
    this.$store.state.displayFooter = true;
    this.$store.state.tab = "events";
  },
  data() {
    return {
      images: {
        weather: require("./../assets/weather.svg"),
        celcius: require("./../assets/temperature.svg")
      },
      myEventSelected: true,
      createEvent: false
    };
  },
  computed: {
    events() {
      return [
        {
          id: 7,
          title: "Running",
          date: "Jeudi 8 Janvier - 17h",
          difficulty: "Débutant",
          lieu: "CK Sportcenter Kockelscheuer"
        },
        {
          id: 7,
          title: "Running",
          date: "Jeudi 8 Janvier - 17h",
          difficulty: "Débutant",
          lieu: "CK Sportcenter Kockelscheuer"
        },
        {
          id: 7,
          title: "Running",
          date: "Jeudi 8 Janvier - 17h",
          difficulty: "Débutant",
          lieu: "CK Sportcenter Kockelscheuer"
        },
        {
          id: 7,
          title: "Running",
          date: "Jeudi 8 Janvier - 17h",
          difficulty: "Débutant",
          lieu: "CK Sportcenter Kockelscheuer"
        },
        {
          id: 7,
          title: "Running",
          date: "Jeudi 8 Janvier - 17h",
          difficulty: "Débutant",
          lieu: "CK Sportcenter Kockelscheuer"
        },
        {
          id: 7,
          title: "Running",
          date: "Jeudi 8 Janvier - 17h",
          difficulty: "Débutant",
          lieu: "CK Sportcenter Kockelscheuer"
        },
        {
          id: 7,
          title: "Running",
          date: "Jeudi 8 Janvier - 17h",
          difficulty: "Débutant",
          lieu: "CK Sportcenter Kockelscheuer"
        },
        {
          id: 7,
          title: "Running",
          date: "Jeudi 8 Janvier - 17h",
          difficulty: "Débutant",
          lieu: "CK Sportcenter Kockelscheuer"
        },
        {
          id: 7,
          title: "Running",
          date: "Jeudi 8 Janvier - 17h",
          difficulty: "Débutant",
          lieu: "CK Sportcenter Kockelscheuer"
        }
      ];
    }
  },
  methods: {
    navigateOnClick() {
      this.$router.push("events/detail");
    },
    changeFilterOnClick() {
        this.myEventSelected = !this.myEventSelected;
    },
    createEventOnClick() {
        this.createEvent = true;
    }
  },
  components: {
      CreateEvent
  }
};
</script>

<style>
#list-events-body {
  width: 100%;
  min-height: 812px;
}

.header-events {
  background: linear-gradient(
    310deg,
    rgba(162, 241, 231, 1) 0%,
    rgba(167, 157, 255, 1) 110%
  );
}

.left-top {
  padding-top: 35px;
  padding-left: 16px;
  font-size: 23px;
  color: white;
  font-weight: 350;
  letter-spacing: 0.6px;
}

.right-top {
  padding-top: 35px;
}

.content {
  min-height: 686px;
  background: rgb(162, 241, 231);
  background: linear-gradient(
    330deg,
    rgba(162, 241, 231, 0.45) 0%,
    rgba(167, 157, 255, 0.45) 110%
  );
}

.filter-btn {
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  justify-content: center;
  border-radius: 5px;
  background-color: white;
  max-width: 168px;
  margin-left: 10px;
  transition: background-color .3s, color .3s;
}

.filter-btn-inactive {
  background-color: rgba(255, 255, 255, 0.4);
  color: #5856d6 !important;
}

.title-event {
  color: #5856d6 !important;
  font-weight: 700;
  font-size: 16px;
}

.difficulty {
  background-color: #a2f1e7;
  padding: 3px;
  padding-left: 15px;
  padding-right: 5px;
  border-radius: 8px;
  font-size: 12px;
}

.black-opacity {
  margin-top: 5px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.3);
  max-width: 55px;
  padding: 6px;
  padding-left: 12px;
}

.weather {
  border-right: solid rgba(0, 0, 0, 0.2) 2px;
  padding-right: 11px;
}

#add-event {
  position: absolute;
  right: 5px;
  bottom: 75px;
}
</style>