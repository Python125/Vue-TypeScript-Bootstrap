import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => {
      if (window.innerWidth >= 1024) {
        return import("../pages/LargeHomePage.vue");
      } else {
        return import("../pages/SmallHomePage.vue");
      }
    },
  },
  {
    path: "/breakfast",
    name: "breakfast",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../pages/BreakfastPage.vue"),
  },
  {
    path: "/lunch",
    name: "lunch",
    component: () => import("../pages/LunchDinnerPage.vue"),
  },
  {
    path: "/drinks",
    name: "drinks",
    component: () => import("../pages/DrinksPage.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
