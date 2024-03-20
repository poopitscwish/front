import {createRouter, createWebHistory} from "vue-router";
import generation from "@/views/Generation.vue";
import main from "@/views/main.vue";
import auth from "@/views/Authh.vue";
import {useUserStore} from "@/store"
const route = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/generate', name:'Generation', component: generation, meta: { requiresAuth: true }},
        {path:'/', name:'Maine', component: main},
        {path:'/auth', name:'Auth', component: auth},
    ]
});
route.beforeEach((to, from, next) => {
    // Здесь должна быть ваша логика для проверки аутентификации пользователя
    // Например, проверка токена в localStorage или состоянии Vuex/Pinia
    const isAuthenticated = useUserStore().isAuthenticated

    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        // Если маршрут требует аутентификации и пользователь не аутентифицирован, перенаправляем на страницу входа
        next({ name: 'Auth' });
    } else {
        // В противном случае продолжаем переход на запрашиваемый маршрут
        next();
    }
});
export default route
