import React from 'react';
import { mount } from 'enzyme';
import  Sample  from './';

describe('<Sample/>', () => {
    it('renders', () => {
        const wrapper = mount( <Sample />);
        expect(wrapper).toHaveLength(1);
    });
})