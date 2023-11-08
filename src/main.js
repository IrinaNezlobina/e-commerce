import './styles/index.scss';
import './styles/base.css';
import './styles/main.css';

import {createApp} from 'vue';
import {createPinia} from 'pinia';

import App from './App.vue';
import router from './router';
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import VueFeather from 'vue-feather';
import {Swiper, SwiperSlide} from 'swiper/vue';

// Swiper.use([Navigation, Pagination, Autoplay]);
import Skeleton from 'primevue/skeleton';


const app = createApp(App);


app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(Swiper);
app.component(VueFeather.name, VueFeather);
app.component('Skeleton', Skeleton);
app.mount('#app');