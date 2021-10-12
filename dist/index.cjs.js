'use strict';

var React = require('react');
var reactstrap = require('reactstrap');
var PropTypes = require('prop-types');
var classNames = require('classnames');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var Title = function Title(_ref) {
  var TitleTag = _ref.titleTag,
      className = _ref.className,
      breakPoint = _ref.breakPoint,
      children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(TitleTag, {
    className: classNames__default["default"](_defineProperty({
      'mb-0': !breakPoint
    }, "mb-".concat(breakPoint, "-0"), !!breakPoint), className)
  }, children);
};

Title.propsType = {
  breakPoint: PropTypes__default["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  titleTag: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].func]),
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node
};
Title.defaultProps = {
  titleTag: 'h5'
};

var FalconCardHeader = function FalconCardHeader(_ref2) {
  var title = _ref2.title,
      light = _ref2.light,
      titleTag = _ref2.titleTag,
      titleClass = _ref2.titleClass,
      className = _ref2.className,
      breakPoint = _ref2.breakPoint,
      children = _ref2.children;
  return /*#__PURE__*/React__default["default"].createElement(reactstrap.CardHeader, {
    className: classNames__default["default"]({
      'bg-light': light
    }, className)
  }, children ? /*#__PURE__*/React__default["default"].createElement(reactstrap.Row, {
    className: "align-items-center"
  }, /*#__PURE__*/React__default["default"].createElement(reactstrap.Col, null, /*#__PURE__*/React__default["default"].createElement(Title, {
    breakPoint: breakPoint,
    titleTag: titleTag,
    className: titleClass
  }, title)), /*#__PURE__*/React__default["default"].createElement(reactstrap.Col, _extends({}, _defineProperty({}, breakPoint ? breakPoint : 'xs', 'auto'), {
    className: "text".concat(breakPoint ? "-".concat(breakPoint) : '', "-right")
  }), children)) : /*#__PURE__*/React__default["default"].createElement(Title, {
    breakPoint: breakPoint,
    titleTag: titleTag,
    className: titleClass
  }, title));
};

FalconCardHeader.propTypes = {
  title: PropTypes__default["default"].node.isRequired,
  light: PropTypes__default["default"].bool,
  breakPoint: PropTypes__default["default"].oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  titleTag: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].func]),
  titleClass: PropTypes__default["default"].string,
  className: PropTypes__default["default"].string,
  children: PropTypes__default["default"].node
};
FalconCardHeader.defaultProps = {
  light: true
};

var CustomTabPanel = function CustomTabPanel(props) {
  var TabPanelItem = props.TabPanelItem,
      CardHeader = props.CardHeader,
      CardIcon = props.CardIcon,
      CardHeaderLight = props.CardHeaderLight,
      DefaultActiveTabID = props.DefaultActiveTabID;

  var _useState = React.useState(DefaultActiveTabID),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, /*#__PURE__*/React__default["default"].createElement(reactstrap.Card, null, /*#__PURE__*/React__default["default"].createElement(FalconCardHeader, {
    className: "HeaderTab",
    light: CardHeaderLight,
    title: /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, CardIcon, CardHeader)
  }, /*#__PURE__*/React__default["default"].createElement(reactstrap.Nav, {
    tabs: true
  }, TabPanelItem && TabPanelItem.map(function (item, index) {
    return /*#__PURE__*/React__default["default"].createElement(reactstrap.NavItem, {
      key: index
    }, /*#__PURE__*/React__default["default"].createElement(reactstrap.NavLink, {
      disabled: item.disabled,
      className: classNames__default["default"]({
        active: activeTab === item.TabId
      }),
      onClick: function onClick() {
        toggle(item.TabId);
      }
    }, item.TabName));
  }))), /*#__PURE__*/React__default["default"].createElement(reactstrap.CardBody, null, TabPanelItem && TabPanelItem.map(function (item, index) {
    return /*#__PURE__*/React__default["default"].createElement(reactstrap.TabContent, {
      activeTab: activeTab,
      key: index
    }, /*#__PURE__*/React__default["default"].createElement(reactstrap.TabPane, {
      tabId: item.TabId
    }, item.TabOnDemand === true ? activeTab === item.TabId && item.TabComponent : item.TabComponent));
  }))));
};

var TigaTabPanelComponents = function TigaTabPanelComponents() {
  return {
    CustomTabPanel: CustomTabPanel
  };
};

var index = TigaTabPanelComponents();

module.exports = index;
