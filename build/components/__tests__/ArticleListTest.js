'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArticleList = require('../ArticleList');

var _ArticleList2 = _interopRequireDefault(_ArticleList);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// setup file (this is needed for React 16.x)
(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });
// test file
// import { shallow, mount, render } from 'enzyme';


describe('ArticleList', () => {
    const testProps = {
        articles: {
            a: { id: 'a' },
            b: { id: 'b' }
        }
    };

    it('renders correctly', () => {
        // try
        // {
        const wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ArticleList2.default, testProps));
        expect(wrapper.find('ArticleContainer').length).toBe(2);
        expect(wrapper).toMatchSnapshot();
        // }catch(e){
        //     console.log(e);
        // }        
    });
});