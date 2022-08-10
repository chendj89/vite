import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home.vue"),
    meta: {
      isAdmin: true,
      requiresAuth: false,
      log: function () {
        console.log(this);
      },
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
