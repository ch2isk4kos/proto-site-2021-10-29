import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <NavBar />
      <h1 className="layout">App Layout</h1>
      <SideBar />
    </div>
  );
};

export default AppLayout;
