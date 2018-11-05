import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

describe('<App/>', () => {
    it('renders', () => {
        const wrapper = mount( <Router>
            <App />
        </Router>);
        expect(wrapper).toHaveLength(1)
    });
})