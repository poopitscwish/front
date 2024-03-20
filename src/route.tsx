import {createRouter, createWebHistory} from "vue-router";
import home from "@/views/home.vue"
import schedule from "@/views/Schedule.vue";
import about from "@/views/About.vue";
import main from "@/views/main.vue";
const route = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/home', name:'Home', component: home},
        {path:'/schedule', name:'Schedule', component: schedule},
        {path:'/about', name:'About', component: about},
        {path:'/', name:'Maine', component: main},
    ]
});

export default route
