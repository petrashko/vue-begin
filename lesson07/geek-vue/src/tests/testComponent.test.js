import { mount } from '@vue/test-utils';

import GeekTestComponent from '../components/TestComponent.vue';

// eslint-disable-next-line
describe('TestComponent', ()=> {
    test('Content from Props', ()=> {
        const wrapper = mount(GeekTestComponent, {
            propsData: {
                message: "Hello from test!"
            }
        });

        expect(wrapper.text()).toEqual('The message is: Hello from test!');
    })
})