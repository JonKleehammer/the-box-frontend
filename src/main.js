import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import router from './router';
import { pinia } from './stores/sessionStore'
import App from './App.vue'
import axios from 'axios';

import "primevue/resources/themes/bootstrap4-dark-purple/theme.css";
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';


axios.defaults.baseURL = 'http://localhost:3000';


createApp(App)
  .use(PrimeVue)
  .use(router)
  .use(pinia)
  .mount('#app')
