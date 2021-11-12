import React from "react";
// import Footer from "./Footer";
import { Layout } from "antd";

const { Content } = Layout;

const AppContainer = () => {
  return (
    // <div className="app-container" style={{ border: "3px solid green" }}>
    //   <h1>Container</h1>
    // </div>
    <Content className="app-container" style={{ border: "3px solid green" }}>
      <div
        className="site-layout-background"
        // style={{ padding: 24, minHeight: 360 }}
      >
        content
      </div>
    </Content>
  );
};

export default AppContainer;
