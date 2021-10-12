(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/slicedToArray'), require('react'), require('reactstrap'), require('@babel/runtime/helpers/extends'), require('@babel/runtime/helpers/defineProperty'), require('prop-types'), require('classnames')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/slicedToArray', 'react', 'reactstrap', '@babel/runtime/helpers/extends', '@babel/runtime/helpers/defineProperty', 'prop-types', 'classnames'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["tiga-tab-panel"] = factory(global._slicedToArray, global.React, global.reactstrap, global._extends, global._defineProperty, global.PropTypes, global.classNames));
})(this, (function (_slicedToArray, React, reactstrap, _extends, _defineProperty, PropTypes, classNames) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
  var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
  var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
  var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);

  var Title = function Title(_ref) {
    var TitleTag = _ref.titleTag,
        className = _ref.className,
        breakPoint = _ref.breakPoint,
        children = _ref.children;
    return /*#__PURE__*/React__default["default"].createElement(TitleTag, {
      className: classNames__default["default"](_defineProperty__default["default"]({
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
    }, title)), /*#__PURE__*/React__default["default"].createElement(reactstrap.Col, _extends__default["default"]({}, _defineProperty__default["default"]({}, breakPoint ? breakPoint : 'xs', 'auto'), {
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
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        activeTab = _useState2[0],
        setActiveTab = _useState2[1];

    var toggle = function toggle(tab) {
      if (activeTab !== tab) setActiveTab(tab);
    };

    return /*#__PURE__*/React__default["default"].createElement(reactstrap.Card, null, /*#__PURE__*/React__default["default"].createElement(FalconCardHeader, {
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
    })));
  };

  var returnLibrary = function returnLibrary() {
    return {
      CustomTabPanel: CustomTabPanel // you can add here other components that you want to export

    };
  };

  var index = returnLibrary();

  return index;

}));
