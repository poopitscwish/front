// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import route from "@/route";
createApp(App)
.use(route)
.mount('#app')
