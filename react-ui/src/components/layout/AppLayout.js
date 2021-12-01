import React from "react";
import NavBar from "./NavBar";
import Ticker from "./Ticker";
import AppContainer from "./AppContainer";
import Footer from "./Footer";
import { Layout } from "antd";

const AppLayout = () => {
  return (
    <Layout className="app-layout" style={{ border: "3px solid blue" }}>
      <NavBar />
      <Ticker />
      <AppContainer />
      <Footer />
    </Layout>
  );
};

export default AppLayout;
