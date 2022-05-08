import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LinksView from '../views/LinksView.vue';
import ContactView from '../views/ContactView.vue';
import PortfolioView from '../views/PortfolioView.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        component: AboutView
    },
    {
        path: '/links',
        name: 'links',
        component: LinksView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: PortfolioView
    },

];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
