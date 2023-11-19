import Home from "@/pages/Home.vue"
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
      
        {
            path: '/brazil',
            name: 'brazil',
            component: () => import("@/pages/Brazil.vue")
        },
        {
            path: '/panama',
            name: 'panama',
            component:()=> import("@/pages/Panama.vue")
        },
        {
            path: '/hawaii',
            name: 'hawaii',
            component: () => import("@/pages/Hawaii.vue")
        },
        {
            path: '/jamaica',
            name: 'jamaica',
            component: ()=> import("@/pages/About.vue")
        }
    ]
});

export default router;