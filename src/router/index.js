import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/AppHomeView.vue'; // Import the Home.vue component
import About from '../views/AppPostView.vue'; // Import the About.vue component

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;