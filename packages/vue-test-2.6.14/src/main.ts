import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);

import App from "./App.vue";

new Vue(App).$mount("#app");
