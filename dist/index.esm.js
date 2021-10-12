import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState, Fragment } from 'react';
import { CardHeader, Row, Col, Card, Nav, NavItem, NavLink, CardBody, TabContent, TabPane } from 'reactstrap';
import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import PropTypes from 'prop-types';
import classNames from 'classnames';

var Title = function Title(_ref) {
  var TitleTag = _ref.titleTag,
      className = _ref.className,
      breakPoint = _ref.breakPoint,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(TitleTag, {
    className: classNames(_defineProperty({
      'mb-0': !breakPoint
    }, "mb-".concat(breakPoint, "-0"), !!breakPoint), className)
  }, children);
};

Title.propsType = {
  breakPoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  titleTag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.node
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
  return /*#__PURE__*/React.createElement(CardHeader, {
    className: classNames({
      'bg-light': light
    }, className)
  }, children ? /*#__PURE__*/React.createElement(Row, {
    className: "align-items-center"
  }, /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Title, {
    breakPoint: breakPoint,
    titleTag: titleTag,
    className: titleClass
  }, title)), /*#__PURE__*/React.createElement(Col, _extends({}, _defineProperty({}, breakPoint ? breakPoint : 'xs', 'auto'), {
    className: "text".concat(breakPoint ? "-".concat(breakPoint) : '', "-right")
  }), children)) : /*#__PURE__*/React.createElement(Title, {
    breakPoint: breakPoint,
    titleTag: titleTag,
    className: titleClass
  }, title));
};

FalconCardHeader.propTypes = {
  title: PropTypes.node.isRequired,
  light: PropTypes.bool,
  breakPoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  titleTag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  titleClass: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
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

  var _useState = useState(DefaultActiveTabID),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(FalconCardHeader, {
    className: "HeaderTab",
    light: CardHeaderLight,
    title: /*#__PURE__*/React.createElement(Fragment, null, CardIcon, CardHeader)
  }, /*#__PURE__*/React.createElement(Nav, {
    tabs: true
  }, TabPanelItem && TabPanelItem.map(function (item, index) {
    return /*#__PURE__*/React.createElement(NavItem, {
      key: index
    }, /*#__PURE__*/React.createElement(NavLink, {
      disabled: item.disabled,
      className: classNames({
        active: activeTab === item.TabId
      }),
      onClick: function onClick() {
        toggle(item.TabId);
      }
    }, item.TabName));
  }))), /*#__PURE__*/React.createElement(CardBody, null, TabPanelItem && TabPanelItem.map(function (item, index) {
    return /*#__PURE__*/React.createElement(TabContent, {
      activeTab: activeTab,
      key: index
    }, /*#__PURE__*/React.createElement(TabPane, {
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

export { index as default };
