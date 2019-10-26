import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const endpoint = "https://localhost:44310";

export default new Vuex.Store({
  state: {
    user: {},
    currEvent: {},
    displayFooter: false,
    tab: "events"
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setEvent(state, event) {
      state.currEvent = event;
    }
  },
  actions: {
    login({ state }, userData) {
      console.log(state);
      return axios.post(`${endpoint}/Users/login`, userData);
    },
    create({ state }, userData) {
      console.log(state);
      return axios.post(`${endpoint}/Users/register`, userData);
    },
    getInterests() {
      return axios.get(`${endpoint}/Interests`);
    },
    getSports({ state }, selectedInterests) {
      const interestIds = [];
      selectedInterests.forEach(interest => {
        interestIds.push(interest.id);
        state.user.userInterests.push({
          userId: state.user.userId,
          interestId: interest.id
        });
      });
      const uri = interestIds.length ? "/Interests/Sports" : "/Sports";
      return axios.get(`${endpoint}${uri}`, {
        params: {
          interestIds
        }
      });
    },
    getGoals({ state }) {
      console.log(state);
      return axios.get(`${endpoint}/Goals`);
    },
    getEventById({ state }, id) {
      console.log(state);
      return axios.get(`${endpoint}/Events/${id}`);
    }
  },
  modules: {}
});
