import React from 'react';
import { mount } from 'enzyme';
import NewsCard  from './';

const NEWS_FIXTURE = {
    title: 'Sample news item',
    'time_ago' : '11 hours'
}

describe('<NewsCard/>', () => {
    const wrapper = mount( <NewsCard item={ NEWS_FIXTURE } />);
    const spy = jest.spyOn(wrapper.instance(), "handleShowComments");
    it('renders', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('displays a title', () => {
        const title = wrapper.find('p').at(0)
        expect(title.text()).toEqual('Sample news item');
    });
    it('displays the time since it was posted', () => {
        const title = wrapper.find('p').at(1)
        expect(title.text()).toEqual('11 hours');
    });
})
