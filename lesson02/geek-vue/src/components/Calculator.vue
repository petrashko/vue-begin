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
            <input type="text" v-model.number="op1">
            <input type="text" v-model.number="op2">
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
        <div>
            <input type="checkbox" id="is-keyboard" v-model="isShowKeyboard">
            <label for="is-keyboard">Отобразить экранную клавиатуру</label>
        </div>
        <br />
        <div v-if="isShowKeyboard">
            <button
                v-for="(digit, index) in digits"
                @click="printDigit(digit)"
                :key="index"
            >
                {{ digit }}
            </button>
            <button @click="removeLastDigit">&larr;</button>
            <br />
            <div id="app">
                <input type="radio" id="select-input1" value="1" v-model="selectInput">
                <label for="select-input1">Операнд 1</label>
                <input type="radio" id="select-input2" value="2" v-model="selectInput">
                <label for="select-input2">Операнд 2</label>
            </div>
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
            logs: {},
            //
            isShowKeyboard: true,
            selectInput: '1',
            digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
        }
    },

    computed: {
        isZero() {
            return this.op2 == 0;
        }
    },

    methods: {
        removeHelper(value) {
            let str = value.toString();
            if (str.length < 1) {
                return null;
            }

            value = +(str.slice(0, -1));
            
            if (isNaN(value)) {
                value = 0;
            }
            return value;
        },

        printDigit(digit) {
            if ((+this.selectInput) === 1) {
                this.op1 = +(this.op1 + digit);
            }
            else {
                this.op2 = +(this.op2 + digit);
            }
        },

        removeLastDigit() {
            if ((+this.selectInput) === 1) {
                const newOp = this.removeHelper(this.op1);
                if (newOp !== null) {
                    this.op1 = newOp;
                }
            }
            else {
                const newOp = this.removeHelper(this.op2);
                if (newOp !== null) {
                    this.op2 = newOp;
                }
            }
        },

        //
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
