import Vue from "vue";
import VueRouter from "vue-router";
import Auth from "../views/Auth.vue";
import Create from "../views/Create.vue";
import ListEvents from '../views/ListEvents.vue';
import EventDetail from '../views/EventDetail.vue';

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
    },
    {
        path: "/events",
        name: "events",
        component: ListEvents
    },
    {
        path: "/events/detail",
        name: "eventDetail",
        component: EventDetail
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
