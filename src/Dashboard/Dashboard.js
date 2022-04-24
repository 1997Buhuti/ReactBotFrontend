import React, { useEffect, useState } from "react";
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
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
// import {  } from "react-router-dom";
import { getallKB } from "../API/api";
import axios from "axios";

const { SubMenu } = Menu;
// function SubMenu(props) {
//   return null;
// }

SubMenu.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  children: PropTypes.node,
};

function HeaderView() {
  const location = useLocation();
  console.log(location.pathname);
  return location.pathname;
}
//
// const items = [
//   { key: "1", label: "Home", path: "/Dashboard", icon: <HomeOutlined /> },
//   {
//     key: "2",
//     label: "KnowledgeBase",
//     path: "KnowledgeBase",
//     icon: <ReadOutlined />,
//   },
//   // {
//   //   key: "3",
//   //   label: "Service Contract Details",
//   //   path: "/admin/service-contract-details",
//   // },
//   // { key: "4", label: "Cost Centers", path: "/admin/cost-centers" },
//   // { key: "5", label: "Clients", path: "/admin/clients" },
//   // { key: "6", label: "Vendors", path: "/admin/vendors" },
// ];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("");
  // const [items, setItems] = useState([
  //   { key: "1", label: "Home", path: "/Dashboard", icon: <HomeOutlined /> },
  //   {
  //     key: "2",
  //     label: "KnowledgeBase",
  //     path: "KnowledgeBase",
  //     icon: <ReadOutlined />,
  //   },
  // ]);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  //
  // const location = useLocation();
  // const navigate = useNavigate();
  //
  // const [selectedKey, setSelectedKey] = useState(
  //   items.find((_item) => location.pathname.startsWith(_item.path)).key
  // );
  //
  // const onClickMenu = (item) => {
  //   const clicked = items.find((_item) => _item.key === item.key);
  //   navigate(clicked.path);
  // };

  // useEffect(() => {
  //   setSelectedKey(
  //     items.find((_item) => location.pathname.startsWith(_item.path)).key
  //   );
  // }, [location]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
        <div className="logo" />
        <Menu theme="dark" selectedKeys={selectedKey} mode="inline">
          {/*/!*{items.map((item) => (*!/*/}
          {/*/!*  <Menu.Item key={item.key} icon={item.icon} onClick={onClickMenu}>*!/*/}
          {/*/!*    {item.label}*!/*/}
          {/*/!*  </Menu.Item>*!/*/}
          {/*))}*/}
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
          {/*<Menu.Item key="3" icon={<MessageOutlined />}>*/}
          {/*  Intents*/}
          {/*</Menu.Item>*/}
          {/*<SubMenu key="sub1" icon={<UserOutlined />} title="User">*/}
          {/*  <Menu.Item key="4">Bill</Menu.Item>*/}
          {/*  <Menu.Item key="5">Alex</Menu.Item>*/}
          {/*</SubMenu>*/}
          {/*<SubMenu key="sub2" icon={<TeamOutlined />} title="Team">*/}
          {/*  <Menu.Item key="6">Team 1</Menu.Item>*/}
          {/*  <Menu.Item key="7">Team 2</Menu.Item>*/}
          {/*</SubMenu>*/}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>{HeaderView()}</Breadcrumb.Item>
            {/*<UserOutlined style={{ fontSize: "30px", marginLeft: "28em" }} />*/}
            {/*<h6 style={{ marginLeft: "73em" }}>Admin User</h6>*/}
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
