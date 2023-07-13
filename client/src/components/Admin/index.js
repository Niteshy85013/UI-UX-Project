import React from "react";
import { Tabs } from "antd";
import Products from "./Products";
import Users from "./Users";

import { useSelector } from "react-redux";

function Admin() {
  const { user } = useSelector((state) => state.users);

  return (
    <>
      <div className="flex justify-between items-center bg-black p-3  sticky-top">
        <h1 className="text-2xl  cursor-pointer text-white text-center">
          Welcome to admin Dashboard
        </h1>
      </div>

      <div className="container mt-5">
        <Tabs>
          <Tabs.TabPane tab="Products Request" key="1">
            <Products />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Users" key="2">
            <Users />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}

export default Admin;
