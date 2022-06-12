import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Layout, { Content } from "antd/es/layout/layout";
import { Breadcrumb, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import * as PropTypes from "prop-types";
import {
  BackwardOutlined,
  ExperimentOutlined,
  HomeOutlined,
  MessageOutlined,
  ReadOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";

import { getallKB } from "../API/api";
import axios from "axios";

const { SubMenu } = Menu;
SubMenu.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.node,
};

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");

  function HeaderView() {
    const location = useLocation();
    console.log(location.pathname);
    return location.pathname;
  }
  useEffect(() => {
    const path = window.location.pathname;
    const buttonIndex = highlightbtton(path);
    return () => {
      changeSelectedKey(buttonIndex);
    };
  }, []);

  const changeSelectedKey = (key) => {
    setSelectedKey(key);
  };

  let highlightbtton = (path) => {
    const pathname = path.split("/");
    const realPath = pathname[pathname.length - 1];
    switch (realPath) {
      case "Dashboard":
        return "1";
        break;
      case "Dashboard":
        return "1";
        break;
    }
    return "";
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="logo" />
        <Menu theme="dark" selectedKeys={selectedKey} mode="inline">
          <Menu.Item
            key="1"
            icon={<HomeOutlined />}
            onClick={() => setSelectedKey("1")}
          >
            Home
            <Link to="/Dashboard" />
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<ReadOutlined />}
            onClick={() => setSelectedKey("2")}
          >
            KnowledgeBase
            <Link to="KnowledgeBase" />
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<ExperimentOutlined />}
            onClick={() => setSelectedKey("3")}
          >
            PDF Based KB
            <Link to="/PdfBasedKnowledgeBase" />
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<BackwardOutlined />}
            onClick={() => setSelectedKey("4")}
          >
            Back To Home Page
            <Link to="/" />
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{HeaderView()}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 660 }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
