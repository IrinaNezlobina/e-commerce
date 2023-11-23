import './styles/index.scss';
import './styles/base.css';
import './styles/main.css';

import {createApp} from 'vue';
import {createPinia} from 'pinia';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue';
import router from './router';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import VueFeather from 'vue-feather';
import Skeleton from 'primevue/skeleton';


const app = createApp(App);

const pinia = createPinia()
app.use(createPinia());
pinia.use(piniaPluginPersistedstate)
app.use(router);
app.use(ElementPlus);
app.component(VueFeather.name, VueFeather);
app.component('Skeleton', Skeleton);
app.mount('#app');