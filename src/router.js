import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";
import Input from "./views/Input.vue";
import Random from "./views/Random.vue";

const routes = [
  { path: "/", component: Home, alias: "/random" },
  { path: "/input", component: Input },
  { path: "/random/:id", component: Random },
];

export default createRouter({
  history: createWebHistory(),
  routes, 
});
