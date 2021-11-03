import { expect, it } from "@jest/globals"
import { mount } from "@vue/test-utils"

import GeekCalculator from '../components/Calculator.vue';

describe('Test Calc', ()=>{
    it('Test first operand input', ()=>{
        const wrapper = mount(GeekCalculator)
        const op1 = wrapper.find('input[name=op1]');
        op1.setValue("1")
        expect(wrapper.vm.op1).toBe(1)
    })

    it('Test second operand input', ()=>{
        const wrapper = mount(GeekCalculator)
        const op2 = wrapper.find('input[name=op2]');
        op2.element.value = "2"
        op2.trigger('input')
        expect(wrapper.vm.op2).toBe(2)
    })

    it('Test method sum', ()=>{
        const wrapper = mount(GeekCalculator)

        const op1 = wrapper.find('input[name=op1]');
        op1.setValue("10")

        const op2 = wrapper.find('input[name=op2]');
        op2.element.value = "5"
        op2.trigger('input')

        const btn = wrapper.find('button[name="+"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(15)
    })

    it('Test method subtract', ()=>{
        const wrapper = mount(GeekCalculator)

        const op1 = wrapper.find('input[name=op1]');
        op1.setValue("10")

        const op2 = wrapper.find('input[name=op2]');
        op2.element.value = "5"
        op2.trigger('input')

        const btn = wrapper.find('button[name="-"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(5)
    })

    it('Test method divide', ()=>{
        const wrapper = mount(GeekCalculator)

        const op1 = wrapper.find('input[name=op1]');
        op1.element.value = "10"
        op1.trigger('input')

        const op2 = wrapper.find('input[name=op2]');
        op2.element.value = "0"
        op2.trigger('input')

        const btn = wrapper.find('button[name="divide"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe('2.00')
    })

    it('Test method multiply', ()=>{
        const wrapper = mount(GeekCalculator)

        const op1 = wrapper.find('input[name=op1]');
        op1.setValue("10")

        const op2 = wrapper.find('input[name=op2]');
        op2.element.value = "5"
        op2.trigger('input')

        const btn = wrapper.find('button[name="*"]');
        btn.trigger('click')

        expect(wrapper.vm.result).toBe(50)
    })

})