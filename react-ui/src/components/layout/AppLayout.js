import React from "react";
import NavBar from "./NavBar";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <NavBar />
      <h1 className="layout" style={{ border: "2px solid blue" }}>
        App Layout
      </h1>
    </div>
  );
};

export default AppLayout;
