import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ArcoVue from "@arco-design/web-vue";
import ArcoVueIcon from "@arco-design/web-vue/es/icon";
import { createRouter, createMemoryHistory } from "vue-router";
import "@arco-design/web-vue/dist/arco.css";
import routes from "./router";

const app = createApp(App);
const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
app.use(router);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.mount("#app");
