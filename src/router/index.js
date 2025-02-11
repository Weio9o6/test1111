import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontLayout.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/front/HomeView.vue"),
        },
        {
          path: "about",
          component: () => import("../views/front/AboutView.vue"),
        },
        {
          path: "products",
          component: () => import("../views/front/ProductsView.vue"),
        },
        {
          path: "product/:id", //動態路由
          component: () => import("../views/front/ProductView.vue"),
        },
        {
          path: "cart",
          component: () => import("../views/front/CartView.vue"),
        },
        {
          path: "reserve",
          component: () => import("../views/front/ReserveView.vue"),
        },
        {
          path: "news",
          component: () => import("../views/front/NewsView.vue"),
        },
        {
          path: "question",
          component: () => import("../views/front/QuestionView.vue"),
        },
        {
          path: "login",
          component: () => import("../views/front/LoginView.vue"),
        },
        {
          path: "favourite",
          component: () => import("../views/front/FavouriteView.vue"),
        },
        {
          path: "subscriber",
          component: () => import("../views/front/SubscriberView.vue"),
        },
        {
          path: "finish",
          component: () => import("../views/front/FinishView.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: "/admin", //動態路由
      component: () => import("../views/DashboardView.vue"),
      // 子路由
      children: [
        {
          path: "products", //動態路由
          component: () => import("../views/admin/AdminProducts.vue"),
        },
        {
          path: "orders", //動態路由
          component: () => import("../views/admin/AdminOrder.vue"),
        },
      ],
    },
  ],
});

export default router;
