import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const AppContainer = () => {
  return (
    <Content className="app-container" style={{ border: "3px solid green" }}>
      <div className="site-layout-background">
        <h1>Main</h1>
      </div>
    </Content>
  );
};

export default AppContainer;
