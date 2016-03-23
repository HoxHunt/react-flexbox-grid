'use strict';

exports.__esModule = true;

var _index = require('/Users/son/react-flexbox-grid/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/son/react-flexbox-grid/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/son/react-flexbox-grid/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Row: {
    displayName: 'Row'
  }
};

var _UsersSonReactFlexboxGridNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/components/Row.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersSonReactFlexboxGridNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/components/Row.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersSonReactFlexboxGridNode_modulesReactTransformHmrLibIndexJs2(_UsersSonReactFlexboxGridNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var ModificatorType = _react2.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
var modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

var Row = _wrapComponent('Row')(function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Row.prototype.render = function render() {
    var modificators = ['row'];
    for (var i = 0; i < modificatorKeys.length; ++i) {
      var key = modificatorKeys[i];
      var value = this.props[key];
      if (value) {
        modificators.push(key + '-' + value);
      }
    }

    if (this.props.reverse) {
      modificators.push('reverse');
    }

    var className = (0, _classnames2.default)(this.props.className, modificators);

    return _react3.default.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className: className
    }), this.props.children);
  };

  return Row;
}(_react2.Component));

exports.default = Row;


Row.propTypes = {
  reverse: _react2.PropTypes.bool,
  start: ModificatorType,
  center: ModificatorType,
  end: ModificatorType,
  top: ModificatorType,
  middle: ModificatorType,
  bottom: ModificatorType,
  around: ModificatorType,
  between: ModificatorType,
  first: ModificatorType,
  last: ModificatorType,
  className: _react2.PropTypes.string,
  tagName: _react2.PropTypes.string,
  children: _react2.PropTypes.node
};