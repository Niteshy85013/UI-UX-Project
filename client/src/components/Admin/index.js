import React, { useEffect } from "react";
import { Tabs } from "antd";
import Products from "./Products";
import Users from "./Users";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminDashboard from "./adminDashboard";
import Advertisement from "./Advertisement";

function Admin() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/adminDashboard");
    }
  }, []);

  return (
    <div className="container">
      <h3 className="text-center text-success">Welcome to Admin Dashboard</h3>
      <Tabs>
        <Tabs.TabPane tab="Products" key="1">
          <AdminDashboard />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Products Request" key="2">
          <Products />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Users" key="3">
          <Users />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Advertisement" key="4">
          <Advertisement />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;
