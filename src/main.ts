import { createTransformContext } from "@vue/compiler-core";
import { createApp } from "vue";
import { createStore } from "vuex";
import  axios  from "axios";
import App from "./App.vue";

import "./assets/main.css";

const app = createApp(App);
app.mount("#app");


