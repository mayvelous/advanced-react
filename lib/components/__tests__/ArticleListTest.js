import React from 'react';
import ArticleList from '../ArticleList';
// setup file (this is needed for React 16.x)
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
// test file
// import { shallow, mount, render } from 'enzyme';
import { shallow } from 'enzyme';

describe('ArticleList', () => {
    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' },
        },
    };

    it('renders correctly', () => {        
        // try
        // {
        const wrapper = shallow(<ArticleList {...testProps} />);
        expect(wrapper.find('ArticleContainer').length).toBe(2);
        expect(wrapper).toMatchSnapshot();
        // }catch(e){
        //     console.log(e);
        // }        
    });
});