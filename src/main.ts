import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Index from './components/App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import orm from './components/posts/orm.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/orm', component: orm },
  { path: '/handlebars', component: orm },
  { path: '/arc', component: orm },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
