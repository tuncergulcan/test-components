import React, { Fragment, useState } from "react";
import {
  Card,
  CardBody,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import FalconCardHeader from "./FalconCardHeader";
import classNames from "classnames";
const CustomTabPanel = (props) => {
  const {
    TabPanelItem,
    CardHeader,
    CardIcon,
    CardHeaderLight,
    DefaultActiveTabID,
  } = props;
  const [activeTab, setActiveTab] = useState(DefaultActiveTabID);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Fragment>
      <Card>
        <FalconCardHeader
          className="HeaderTab"
          light={CardHeaderLight}
          title={
            <Fragment>
              {CardIcon}
              {CardHeader}
            </Fragment>
          }
        >
          <Nav tabs>
            {TabPanelItem &&
              TabPanelItem.map((item, index) => {
                return (
                  <NavItem key={index}>
                    <NavLink
                      disabled={item.disabled}
                      className={classNames({
                        active: activeTab === item.TabId,
                      })}
                      onClick={() => {
                        toggle(item.TabId);
                      }}
                    >
                      {item.TabName}
                    </NavLink>
                  </NavItem>
                );
              })}
          </Nav>
        </FalconCardHeader>
        <CardBody>
          {TabPanelItem &&
            TabPanelItem.map((item, index) => {
              return (
                <TabContent activeTab={activeTab} key={index}>
                  <TabPane tabId={item.TabId}>
                    {item.TabOnDemand === true
                      ? activeTab === item.TabId && item.TabComponent
                      : item.TabComponent}
                  </TabPane>
                </TabContent>
              );
            })}
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default CustomTabPanel;
