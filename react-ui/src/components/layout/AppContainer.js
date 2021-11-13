import React from "react";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;

const AppContainer = () => {
  return (
    <Content className="app-container" style={{ border: "3px solid green" }}>
      <div className="site-layout-background">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Content>
  );
};

export default AppContainer;
