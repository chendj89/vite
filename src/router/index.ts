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
router.addRoute({
  path: "/about",
  name: "about",
  component: () => import("@/views/about.vue"),
});
router.addRoute({
  path: "/menu",
  name: "menu",
  component: () => import("@/views/menu.vue"),
});
router.beforeEach((to, form) => {});

export default router;
