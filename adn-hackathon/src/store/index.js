import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const endpoint = "https://localhost:44310";

export default new Vuex.Store({
  state: {
    user: {},
    title: "",
    displayFooter: false,
    tab: 'events'
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setTitle(state, title) {
      state.title = title;
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
    }
  },
  modules: {}
});
