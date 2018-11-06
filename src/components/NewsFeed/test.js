import React from 'react';
import { mount } from 'enzyme';
import { NewsFeed } from './';

const NEWS_FIXTURES = [
    {
        title: 'Sample news item',
        'time_ago' : '11 hours'
    },
    {
        title: 'Sample news item 2',
        'time_ago' : '11 hours'
    },
    {
        title: 'Sample news item 2',
        'time_ago' : '11 hours'
    },
]

const MATCH_FIXTURE =
    {
        path: '/news'
    }

describe('<NewsFeed/>', () => {
    const wrapper = mount( <NewsFeed item={ NEWS_FIXTURES } match={ MATCH_FIXTURE } />);
    it('renders', () => {
        expect(wrapper).toHaveLength(1);
    });
})
