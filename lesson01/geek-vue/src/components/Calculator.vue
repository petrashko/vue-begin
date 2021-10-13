<template>
    <div>
        <p>Calculator</p>
        <div>
            <input type="number" v-model.number="op1">
            <input type="number" v-model.number="op2">
            = {{ result }}
        </div>
        <br/>
        <div>
            <button @click="sum">+</button>
            <button @click="subtract">-</button>
            <button :disabled="isZero" @click="divide">/</button>
            <button @click="multiply">*</button>
            <button @click="power">^ (**)</button>
            <button :disabled="isZero" @click="divideInt">//</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GeekCalculator',

    data() {
        return {
            op1: 0,
            op2: 0,
            result: 0
        }
    },

    computed: {
        isZero() {
            return this.op2 == 0;
        }
    },

    methods: {
        sum() {
            this.result = this.op1 + this.op2;
        },

        subtract() {
            this.result = this.op1 - this.op2;
        },

        divide() {
            this.result = (this.op1 / this.op2).toFixed(2);
        },

        multiply() {
            this.result = this.op1 * this.op2;
        },

        power() {
            this.result = this.op1 ** this.op2;
        },

        divideInt() {
            this.result = parseInt(this.op1 / this.op2);
        }
    }
}
</script>
