<template>
    <div class="wrapper">
        <!--
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        -->
        <cost-header />
        <main>
            <div class="wrapper">
                <p>Всего потрачено: {{ fullPaymentValue }}</p>
                <button
                    class="my-btn"
                    @click="showForm = !showForm"
                >
                    ADD NEW COST +
                </button>
                <br/>
                <cost-add-payment-form
                    v-if="showForm"
                />
                <cost-payments-display
                    :items="paymentsList"
                />
            </div>
        </main>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
//
import CostHeader from '@/components/costs/Header.vue';
import CostAddPaymentForm from '@/components/costs/AddPaymentForm.vue';
import CostPaymentsDisplay from '@/components/costs/PaymentsDisplay.vue';

export default {
    name: 'GeekPayments',

    //
    data() {
        return {
            showForm: false
        };
    },

    //
    computed: {
        ...mapGetters({
            paymentsList: 'costsGetPaymentsList',
        }),

        fullPaymentValue() {
            return this.$store.getters.costsGetFullPaymentValue
        }
    },

    //
    methods: {
        ...mapMutations({
            updatePaymentsList: 'costsSetPaymentsList'
        }),

        initData() {
            return [
                { id: 1, date: "23.03.2020", category: "Travel", value: 169 },
                { id: 2, date: "24.03.2020", category: "Transport", value: 360 },
                { id: 3, date: "25.03.2020", category: "Food", value: 532 },
                { id: 4, date: "24.04.2020", category: "Travel", value: 180 },
                { id: 5, date: "25.04.2020", category: "Transport", value: 371 },
                { id: 6, date: "26.04.2020", category: "Food", value: 543 },
                { id: 7, date: "25.05.2020", category: "Travel", value: 191 },
                { id: 8, date: "26.05.2020", category: "Transport", value: 382 },
                { id: 9, date: "27.05.2020", category: "Food", value: 554 },
                { id: 10, date: "26.06.2020", category: "Travel", value: 202 },
                { id: 11, date: "27.06.2020", category: "Transport", value: 393 },
                { id: 12, date: "28.06.2020", category: "Food", value: 565 },
                { id: 13, date: "27.07.2020", category: "Travel", value: 213 },
                { id: 14, date: "28.07.2020", category: "Transport", value: 404 },
                { id: 15, date: "29.07.2020", category: "Food", value: 576 },
                { id: 16, date: "03.08.2012", category: "Travel", value: 999 },
            ];
        }
    },
    
    //
    components: {
        CostHeader,
        CostAddPaymentForm,
        CostPaymentsDisplay
    },

    //
    mounted() {
        //this.$store.commit('costsSetPaymentsList', this.initData());
        // Или
        //this.updatePaymentsList( this.initData() );
        // Правильно делать через action
        this.$store.dispatch('costsFetchPaymentsList', this.initData())
            .then((/*data*/) => {
                //console.log(data);
            })
            .catch((/*error*/) => {
                //console.log(error);
            });
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.my-btn {
    padding: 10px;
    background-color: lightgreen;
    color: #ffffff;
}
</style>
