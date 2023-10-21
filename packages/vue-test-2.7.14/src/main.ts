import Vue from 'vue'
import { install as VueMonacoEditorPlugin, loader } from '@guolao/vue-monaco-editor'
import App from './App.vue'

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs',
  },
})

Vue.use(VueMonacoEditorPlugin)

new Vue(App).$mount('#app')
