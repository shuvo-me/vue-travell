import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            name: "about",
            component: About
        }
    ]
});

export default router;