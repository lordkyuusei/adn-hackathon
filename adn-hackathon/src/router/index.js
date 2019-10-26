import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import Create from "../views/Create.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Auth
  },
  {
    path: "/create",
    name: "create",
    component: Create
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
