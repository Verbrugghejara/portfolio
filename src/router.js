import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './screens/HomePage.vue'
import Projects from './screens/AllProjects.vue'
import DetailProject from './screens/DetailProject.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/projects', component: Projects },
  { path: '/project/:id', component: DetailProject }
]

const router = createRouter({
  history: createWebHashHistory('/portfolio/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Als er een opgeslagen positie is (zoals bij router.back()), ga daarheen
    if (savedPosition) {
      return savedPosition
    }
    // Anders, scroll naar boven
    return { top: 0 }
  },
})

export default router
