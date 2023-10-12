import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/products',
            name: 'products',
            component: () => import('../views/ProductsView.vue'),
        },
        {
            path: '/products/:id',
            name: 'product-element',
            component: () => import('../views/ProductElement.vue'),
        },
        {
            path:'/:pathMatch(.*)*',
            name: 'notFound',
            component: () => import('../views/PageNotFound.vue'),
        }
    ]
})

export default router
