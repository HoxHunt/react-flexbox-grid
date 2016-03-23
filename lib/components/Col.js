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
  Col: {
    displayName: 'Col'
  }
};

var _UsersSonReactFlexboxGridNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'src/components/Col.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersSonReactFlexboxGridNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'src/components/Col.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersSonReactFlexboxGridNode_modulesReactTransformHmrLibIndexJs2(_UsersSonReactFlexboxGridNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var ModificatorType = _react2.PropTypes.oneOfType([_react2.PropTypes.number, _react2.PropTypes.bool]);

var Col = _wrapComponent('Col')(function (_Component) {
  _inherits(Col, _Component);

  function Col(props) {
    _classCallCheck(this, Col);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this._classMap = {
      xs: 'col-xs',
      sm: 'col-sm',
      md: 'col-md',
      lg: 'col-lg',
      xsOffset: 'col-xs-offset',
      smOffset: 'col-sm-offset',
      mdOffset: 'col-md-offset',
      lgOffset: 'col-lg-offset'
    };
    return _this;
  }

  Col.prototype.render = function render() {
    var classes = [];

    if (this.props.reverse) {
      classes.push('reverse');
    }

    for (var key in this.props) {
      if (this.props.hasOwnProperty(key) && this._classMap[key]) {
        var colBaseClass = this._classMap[key];
        colBaseClass = Number.isInteger(this.props[key]) ? colBaseClass + '-' + this.props[key] : colBaseClass;
        classes.push(colBaseClass);
      }
    }

    return _react3.default.createElement(this.props.tagName || 'div', Object.assign({}, this.props, {
      className: (0, _classnames2.default)(this.props.className, classes)
    }), this.props.children);
  };

  return Col;
}(_react2.Component));

exports.default = Col;


Col.propTypes = {
  xs: ModificatorType,
  sm: ModificatorType,
  md: ModificatorType,
  lg: ModificatorType,
  xsOffset: _react2.PropTypes.number,
  smOffset: _react2.PropTypes.number,
  mdOffset: _react2.PropTypes.number,
  lgOffset: _react2.PropTypes.number,
  reverse: _react2.PropTypes.bool,
  className: _react2.PropTypes.string,
  tagName: _react2.PropTypes.string,
  children: _react2.PropTypes.node
};