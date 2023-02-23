import Vue from 'vue'
import { install } from '@guolao/vue-monaco-editor'
import App from './App.vue'

Vue.use(install)

new Vue(App).$mount('#app')
