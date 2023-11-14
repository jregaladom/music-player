import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./pages/App.vue";
import mitt from 'mitt'
import router from '@/routes'
const emitter = mitt()
const pinia = createPinia()
createApp(App)
    .use(router)
    .use(pinia)
    .provide('emitter', emitter)
    .mount("#app");
