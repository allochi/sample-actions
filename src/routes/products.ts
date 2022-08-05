import Home from "../views/products/Index.vue";
import Details from "../views/products/Details.vue";

const routes = [
  { path: "/products", name: "Products", component: Home },
  { path: "/products/details", name: "ProductsDetails", component: Details },
];

export default routes;
