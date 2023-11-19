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
            path: '/destination/:id',
            name: 'destination.details',
            component: () => import("@/pages/DestinationDetails.vue")
        }
    ],
    linkActiveClass: 'font-bold underline'
});

export default router;