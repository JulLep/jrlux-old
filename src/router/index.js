import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import PortefolioView from '../views/PortefolioView.vue'
import DesignuxView from '../views/DesignuxView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'IndexView',
    component: IndexView
  },
  {
    path: '/portefolio',
    name: 'PortefolioView',
    component: PortefolioView
  },
  {
    path: '/designux',
    name: 'DesignuxView',
    component: DesignuxView
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
