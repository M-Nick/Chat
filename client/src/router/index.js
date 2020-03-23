import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/open-chat",
    name: "Open",
    component: () => import("../views/Open.vue")
  },
  {
    path: "/create-chat",
    name: "Create",
    component: () => import("../views/Create.vue")
  },
  {
    path: "/set-user",
    name: "SetUser",
    component: () => import("../views/User.vue")
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("../views/Chat.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
