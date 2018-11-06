import React from 'react';
import { mount } from 'enzyme';
import {Newsfeed} from './';

describe('<NewsFeed/>', () => {
    const wrapper = mount( <Newsfeed item={ NEWS_FIXTURE } />);
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
    it('changes state when "show Comments" is clicked', () => {
        const showComments = wrapper.find('div').at(1)
        expect(wrapper.state().showComments).toEqual(false)
        wrapper.instance().forceUpdate();
        showComments.simulate('click')
        expect(spy).toHaveBeenCalled()
        expect(wrapper.state().showComments).toEqual(true)
    });
})
