import React from "react";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import SignUpForm from "../pages/auth/SignUpForm";
import PasswordReset from "../pages/auth/PasswordReset";
import Articles from "../pages/articles/Articles";
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
          <Route path="/signin/forgot-password" element={<PasswordReset />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/verified" element={<SignUpForm />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </div>
    </Content>
  );
};

export default AppContainer;
