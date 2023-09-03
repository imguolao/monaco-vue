import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { install as VueMonacoEditorPlugin, loader } from '@guolao/vue-monaco-editor'

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.38.0/min/vs',
  },
})

Vue.use(VueCompositionAPI)
Vue.use(VueMonacoEditorPlugin)

import App from './App.vue'

new Vue(App).$mount('#app')
