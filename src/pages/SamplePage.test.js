import React from 'react';
import { mount } from 'enzyme';
import Newsfeed from "./Newsfeed";

describe('<Newsfeed/>', () => {
    it('renders', () => {
        const wrapper = mount(
            <Newsfeed />) ;
        expect(wrapper).toHaveLength(1)
    });
    it('renders a p tag', () => {
        const wrapper = mount(
            <Newsfeed />) ;
        expect(wrapper.find('p')).toHaveLength(1)
    });
})
