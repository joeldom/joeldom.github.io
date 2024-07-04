import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router configuration

createApp(App)
    .use(router) // Use the router configuration
    .mount('#app');