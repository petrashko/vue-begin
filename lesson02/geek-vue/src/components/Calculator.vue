<template>
    <div>
        <p>Calculator</p>
        <div v-if="error">
            Ошибка! {{ error }}
        </div>
        <br />
        <div class="strange-message">
            <template v-if="result < 0">Получилось отрицательное число</template>
            <template v-else-if="result < 100">Результат в первой сотне</template>
            <template v-else>Получилось слишком большое число</template>
        </div>
        <br />
        <div>
            <input type="number" v-model.number="op1">
            <input type="number" v-model.number="op2">
            = {{ result }}
        </div>
        <br />
        <div>
            <button
                v-for="(operand, index) in operands"
                @click="calculate(operand)"
                :disabled="operand === '/' ? isZero : false"
                :key="index"
            >
                {{ operand }}
            </button>
        </div>
        <br />
        <div v-for="(log, k) in logs" :key="k">{{ log }}</div>
    </div>
</template>

<script>
export default {
    name: 'GeekCalculator',

    data() {
        return {
            operands: ['+', '-', '/', '*'],
            op1: 0,
            op2: 0,
            result: 0,
            error: '',
            logs: {}
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
            if (this.op2 === 0) {
                this.error = 'Делить на 0 нельзя!'
            }
            else {
                this.result = (this.op1 / this.op2).toFixed(2);
            }
        },

        multiply() {
            this.result = this.op1 * this.op2;
        },

        calculate (operation) {
            this.error = '';
            switch (operation) {
                case '+':
                    this.sum();
                    break;
                case '-':
                    this.subtract();
                    break;
                case '*':
                    this.multiply();
                    break;
                case '/':
                    this.divide();
                    break;
                default:
                    this.sum();
                    break;
            }

            this.$set(this.logs, Date.now(), `${this.op1} ${operation} ${this.op2} = ${this.result}`);
        }
    }
}
</script>
