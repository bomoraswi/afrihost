import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RecipeList",
    component: () => import("@/views/RecipeListView.vue"),
  },
  {
    path: "/recipes/:id",
    name: "RecipeDetails",
    component: () => import("@/views/RecipeDetailsView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
