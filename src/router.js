import { createRouter, createWebHistory } from "vue-router";
import Shop from "./pages/shop/index.vue";
import ShopDetail from "./pages/shop/_id.vue";
import LandingPage from "./pages/landing-page/index.vue";
import BlogPage from "./pages/blog/index.vue";
import OurStoryPage from "./pages/our-story/index.vue";

const routes = [
  {
    path: "/",
    name: "landing-page",
    component: LandingPage,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/shop/:id",
    name: "shop-detail",
    component: ShopDetail,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
  },
  {
    path: "/our-story",
    name: "OurStoryPage",
    component: OurStoryPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
