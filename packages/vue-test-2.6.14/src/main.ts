import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
// import { install } from '@guolao/vue-monaco-editor'

Vue.use(VueCompositionAPI)
// Vue.use(install)

import App from './App.vue'

new Vue(App).$mount('#app')
