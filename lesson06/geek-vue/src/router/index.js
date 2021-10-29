import Vue from 'vue'
import VueRouter from 'vue-router'
//
//import GeekHome from '@/views/Home.vue'
import GeekPayments from '@/views/Payments.vue'
import CostAddPaymentForm from '@/views/AddPaymentForm.vue';
import GeekCalc from '@/views/Calc.vue'
import GeekAbout from '@/views/About.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'payments',
        component: GeekPayments
    },
    {
        path: '/calc',
        name: 'calc',
        component: GeekCalc
    },
    {
        path: '/about',
        name: 'about',
        component: GeekAbout
    },
    {
        path: '/add/payment',
        name: 'addPayment',
        component: CostAddPaymentForm
    },
    {
        path: '/add/payment/:cat',
        name: 'addPaymentWithCat',
        component: CostAddPaymentForm
    }
];

const router = new VueRouter({
    //mode: 'history',
    //base: process.env.BASE_URL,
    routes
});

export default router;
