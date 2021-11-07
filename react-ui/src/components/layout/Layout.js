import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import { Layout } from "antd";

const { Content, Footer } = Layout;

const Layout1 = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBar />
      <Layout className="site-layout">
        <NavBar />
        <Content style={{ margin: "0 16px" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            Chris Kakos for President.
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          MSJ ©2021 Created by Chris Kakos
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Layout1;
