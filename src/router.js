import { createRouter, createWebHistory } from 'vue-router';
import IndexComponent from './components/IndexComponent.vue';
import PortefolioComponent from './components/PortefolioComponent.vue';


const routes = [
  { path: '/', name: 'IndexComponent', component: IndexComponent },
  { path: '/portefolio', name: 'PortefolioComponent', component: PortefolioComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
