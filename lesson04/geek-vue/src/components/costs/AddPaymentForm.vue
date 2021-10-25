<template>
    <div class="form">
        <input type="number" placeholder="Value" v-model.number="value" />
        
        <!--
        <input type="text" placeholder="Category" v-model="category" />
        -->

        <select
            v-if="categoryList.length > 0"
            v-model="category"
        >
            <option
                v-for="(option, ind) in categoryList"
                :selected="option === category"
                :value="option"
                :key="ind+option"
            >
                {{ option }}
            </option>
        </select>

        <input type="date" placeholder="Date" v-model="date" />
        <button @click="onSave">Save</button>
        <br/><br/>
        <cost-add-category-form v-if="categoryList.length > 0" />
        <br/>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
//
import CostAddCategoryForm from '@/components/costs/AddCategoryForm.vue';

export default {
    name: 'CostAddPaymentForm',

    //
    data() {
        return {
            value: 0,
            category: 'Travel',
            date: ''
        }
    },

    //
    computed: {
        ...mapGetters({
            categoryList: 'costsGetCategoryList'
        }),

        getCurrentDate() {
            const now = new Date();
            const d = now.getDate(), m = now.getMonth() + 1, y = now.getFullYear();
            return `${d}.${m}.${y}`;
        }
    },

    //
    methods: {
        ...mapActions({
            loadCategories: 'costsFetchCategoryList'
        }),

        onSave() {
            let rusDate = false;
            if (this.date) {
                const  tmp = this.date.split('-');
                rusDate = `${tmp[2]}.${tmp[1]}.${tmp[0]}`;
            }
            const newPayment = {
                value: this.value,
                category: this.category,
                date: rusDate || this.getCurrentDate
            };

            this.$store.dispatch('costsAddToPaymentsList', newPayment)
                .then((/*data*/) => {
                    //console.log(data);
                })
                .catch((/*error*/) => {
                    //console.log(error);
                });
        }
    },

    //
    components: {
        CostAddCategoryForm
    },

    mounted() {
        if (this.categoryList.length === 0) {
            this.loadCategories();
        }
    }
}
</script>