import React, { useState } from "react";
import NavBar from "./NavBar";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <NavBar />
      <h1 className="layout">App Layout</h1>
    </div>
  );
};

export default AppLayout;
