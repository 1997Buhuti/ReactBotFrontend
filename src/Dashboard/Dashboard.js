import React, { useState } from "react";
import "./Dashboard.css";
import Layout, { Content } from "antd/es/layout/layout";
import { Breadcrumb, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import * as PropTypes from "prop-types";
import {
  HomeOutlined,
  MessageOutlined,
  ReadOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, Outlet } from "react-router-dom";

const { SubMenu } = Menu;
// function SubMenu(props) {
//   return null;
// }

SubMenu.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.node,
};
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
            <Link to="/Dashboard" />
          </Menu.Item>
          <Menu.Item key="2" icon={<ReadOutlined />}>
            KnowledgeBase
            <Link to="KnowledgeBase" />
          </Menu.Item>
          <Menu.Item key="3" icon={<MessageOutlined />}>
            Intents
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="7">Team 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>KnowledgeBase</Breadcrumb.Item>
            <Breadcrumb.Item>Create KnowledgeBase</Breadcrumb.Item>
            <Breadcrumb.Item>Create KnowledgeBase</Breadcrumb.Item>
            <UserOutlined style={{ fontSize: "30px", marginLeft: "28em" }} />
            <h6 style={{ marginLeft: "73em" }}>Admin User</h6>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 660 }}
          >
            {/*<Routes>*/}
            {/*  <Route>*/}
            {/*    <Route*/}
            {/*      path="Dashboard/KnowledgeBase"*/}
            {/*      component={KnowledgeBase}*/}
            {/*    />*/}
            {/*  </Route>*/}
            {/*</Routes>*/}
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
