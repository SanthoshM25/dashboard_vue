import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import OrderDetails from "../components/OrderDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      children: [
        {
          path: "/orders",
          name: "orderdetails",
          component: OrderDetails,
        },
      ],
    },
  ],
});

export default router;
