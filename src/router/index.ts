import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomePage,
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
