import React from "react";
import { Tabs } from "antd";
import Products from "./Products";

import UserBids from "./UserBids";

import NavSec from "../Partials/Header";
import ProfileInfo from "./ProfileInfo";

function Profile() {
  return (
    <>
      <NavSec />
      <div className="container  mt-5">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Products" key="1">
            <Products />
          </Tabs.TabPane>

          <Tabs.TabPane tab="My Bids" key="2">
            <UserBids />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Profile" key="3">
            <ProfileInfo />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Profile;
