import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import countryConfig from "../country.config";
// import "./assets/main.css";

const app = createApp(App);
app.provide("countryConfigs", countryConfig);
app.use(store);
app.use(router);
app.mount("#app");
