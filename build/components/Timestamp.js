'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storeProvider = require('./storeProvider');

var _storeProvider2 = _interopRequireDefault(_storeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Timestamp extends _react.Component {
    // shouldComponentUpdate(nextProps){
    //     return (this.timeDisplay(this.props.timestamp) !== 
    //     this.timeDisplay(nextProps.timestamp));
    // }
    render() {
        return _react2.default.createElement(
            'div',
            null,
            this.props.timestampDisplay
        );
    }
}

Timestamp.timeDisplay = timestamp => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

function extraProps(store) {
    return {
        timestampDisplay: Timestamp.timeDisplay(store.getState().timestamp)
    };
}

exports.default = (0, _storeProvider2.default)(extraProps)(Timestamp);