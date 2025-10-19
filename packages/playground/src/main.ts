import { createApp } from 'vue'
import { loader } from '@guolao/vue-monaco-editor'
import App from './App'

loader.config({
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.54.0/min/vs',
  },
})

const app = createApp(App)

app.mount('#app')
