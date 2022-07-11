import { Layout, Menu, Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import MiniLogo from "@components/MiniLogo";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const { Header, Content, Sider } = Layout;
export default function DeFaultFrameSet(props) {
  function getItem(label, key, icon, children, onClick) {
    return {
      key,
      icon,
      children,
      label,
      onClick,
    };
  }
  // function menuOnClick
  const items = [
    getItem("Option 1", "1", <MenuOutlined />),
    getItem("Option 2", "2", <MenuOutlined />),
    getItem("Team", "sub mod 1", <MenuOutlined />, [
      getItem("Team 1", "3"),
      getItem("Team 2", "4"),
    ]),
  ];
  const [collapsed, setCollapse] = useState(false);
  const navigate = useNavigate();
  // const redirect = useEffect((link) => {
  //   navigate(link);
  // }, []);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        theme="light"
        onCollapse={setCollapse}
      >
        <MiniLogo style={{ minHeight: 50 }}></MiniLogo>
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item
            key="1"
            onClick={() => {
              navigate("");
            }}
          >
            <MenuOutlined />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              navigate("option-2");
            }}
          >
            <MenuOutlined />
            <span>nav 2</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: "0 15px",
            height: 50,
            background: "white",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>
              <Link to="/home-page">HomePage</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>{props.module.shortName}</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        <Content
          style={{
            padding: 15,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
}
