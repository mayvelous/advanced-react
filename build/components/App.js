'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArticleList = require('./ArticleList');

var _ArticleList2 = _interopRequireDefault(_ArticleList);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SearchBar = require('./SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _lodash = require('lodash.pickby');

var _lodash2 = _interopRequireDefault(_lodash);

var _Timestamp = require('./Timestamp');

var _Timestamp2 = _interopRequireDefault(_Timestamp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// react-addons-perf DOES NOT work with react 16.x
// import Perf from 'react-addons-perf';

// if(typeof(window) !== 'undefined')
// {
//     window.Perf = Perf;
// }

class App extends _react.PureComponent {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.appState = () => {
            const { articles, searchTerm } = this.props.store.getState();
            return { articles, searchTerm };
        }, this.state = this.appState(), this.onStoreChange = () => {
            this.setState(this.appState());
        }, _temp;
    }

    getChildContext() {
        return { store: this.props.store };
    }

    componentDidMount() {
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        this.props.store.startClock();
        // setImmediate(() => {
        //     Perf.start();
        // });
        // setTimeout(() => {
        //     Perf.stop();
        //     Perf.printWasted();
        // }, 5000);
    }
    componentWillUnmount() {
        this.props.store.unsubscribe(this.subscriptionId);
    }
    render() {
        let { searchTerm, articles } = this.state;
        const searchRegx = new RegExp(searchTerm, 'i');
        if (searchTerm) {
            articles = (0, _lodash2.default)(articles, value => {
                return value.title.match(searchRegx) || value.body.match(searchRegx);
            });
        }
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Timestamp2.default, null),
            _react2.default.createElement(_SearchBar2.default, null),
            _react2.default.createElement(_ArticleList2.default, {
                articles: articles
            })
        );
    }
}

App.childContextTypes = {
    store: _propTypes2.default.object
};
exports.default = App;