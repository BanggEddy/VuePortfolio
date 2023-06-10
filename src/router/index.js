import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/competences",
      name: "competences",
      component: () => import("../views/CompetencesView.vue"),
    },
    {
      path: "/projets",
      name: "projets",
      component: () => import("../views/ProjetsView.vue"),
    },
    {
      path: "/harrypotter",
      name: "harrypotter",
      component: () => import("../views/HarryPotterView.vue"),
    },
    {
      path: "/haribo",
      name: "haribo",
      component: () => import("../views/HariboView.vue"),
    },
    {
      path: "/fiteddy",
      name: "fiteddy",
      component: () => import("../views/FitEddyView.vue"),
    },
    {
      path: "/sicilylines",
      name: "sicilylines",
      component: () => import("../views/SicilylinesView.vue"),
    },
  ],
});

export default router;
