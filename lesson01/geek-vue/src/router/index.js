import Vue from 'vue'
import VueRouter from 'vue-router'
import GeekHome from '@/views/Home.vue'
import GeekAbout from '@/views/About.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: GeekHome
    },
    {
        path: '/about',
        name: 'about',
        component: GeekAbout
    }
];

const router = new VueRouter({
    //mode: 'history',
    //base: process.env.BASE_URL,
    routes
});

export default router;
