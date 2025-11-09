import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './screens/HomePage.vue'
import Projects from './screens/AllProjects.vue'
import DetailProject from './screens/DetailProject.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: Projects },
  { path: '/project/:id', component: DetailProject }
]

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes
})

export default router
