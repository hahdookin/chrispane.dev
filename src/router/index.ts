import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import HomeView from '../views/HomeView.vue';
// import AboutView from '../views/AboutView.vue';
// import LinksView from '../views/LinksView.vue';
// import ContactView from '../views/ContactView.vue';
// import PortfolioView from '../views/PortfolioView.vue';
import HomeView from '@/views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },

];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
