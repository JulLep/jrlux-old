import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import the router
import './main.css';  // Import the global CSS file

createApp(App).use(router).mount('#app');
