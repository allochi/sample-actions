import { createRouter, createWebHistory } from "vue-router";
import Hello from "../views/Hello.vue";
import About from "../views/About.vue";
import productRoutes from "./products";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Generic
    { path: "/hello", name: "Hello", component: Hello },
    { path: "/about", name: "About", component: About },

    // Products
    ...productRoutes,
  ],
});

export default router;
