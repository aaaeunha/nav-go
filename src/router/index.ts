import Index from "../pages/index/index.vue";
import Login from "../pages/login/index.vue";
import VueRouter from "vue-router";
const routes: VueRouter.RouteRecordRaw[] = [
  { path: "/", component: Index },
  { path: "/login", component: Login },
];
export default routes;
