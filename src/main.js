import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import router from './router';
import { pinia } from './stores/sessionStore'
import App from './App.vue'
import axios from 'axios';

import "primevue/resources/themes/soho-dark/theme.css";
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import Tooltip from "primevue/tooltip";

axios.defaults.baseURL = 'http://localhost:3000';


const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(pinia)
app.mount('#app')

app.directive('tooltip', Tooltip)