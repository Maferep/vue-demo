import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Index from './components/App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'

import orm from './components/posts/orm.vue'
import arc from './components/posts/arc.vue'
import ejs from './components/posts/ejs.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/orm', component: orm },
  { path: '/ejs', component: ejs },
  { path: '/arc', component: arc },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
