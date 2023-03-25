import { createApp } from 'vue';
import App from './App.vue';
import roteador from './router';
import { createPinia } from 'pinia';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
    .use(roteador)
    .use(createPinia())
    .mount('#app')