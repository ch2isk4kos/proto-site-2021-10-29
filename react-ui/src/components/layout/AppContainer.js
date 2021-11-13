import React from "react";
import Home from "../pages/home/Home";
import { Layout } from "antd";

const { Content } = Layout;

const AppContainer = () => {
  return (
    <Content className="app-container" style={{ border: "3px solid green" }}>
      <div className="site-layout-background">
        <h1>Main</h1>
        <Home />
      </div>
    </Content>
  );
};

export default AppContainer;
