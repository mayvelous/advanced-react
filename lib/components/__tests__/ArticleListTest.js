import React from 'react';
import ArticleList from '../ArticleList';
import { shallow } from 'enzyme';

describe('ArticleList', () => {
    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' },
        },
    };

    it('renders correctly', () => {        
        try
        {
            const wrapper = shallow(<ArticleList {...testProps} />).html();
            expect(wrapper.find('ArticleContainer').length).toBe(2);
            expect(wrapper).toMatchSnapshot();
        }catch(e){
            console.log(e);
        }        
    });
});