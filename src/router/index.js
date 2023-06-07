import {createRouter, createWebHistory} from 'vue-router'
import AppAbout from '../views/AppAbout'
import AppHome from '../views/AppHome'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppHome,
    },
    {
        path: '/About',
        name: 'About',
        component: AppAbout,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router;