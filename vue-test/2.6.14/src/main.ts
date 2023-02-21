import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import App from './App'

Vue.use(VueCompositionAPI)

createApp({ render: () => h(App) }).mount('#app')
