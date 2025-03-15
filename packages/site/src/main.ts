import { createApp } from 'vue'
import { loader } from '@guolao/vue-monaco-editor'
import App from './App'

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs',
  },
})

createApp(App).mount('#app')
