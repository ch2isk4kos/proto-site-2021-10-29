import React, { useState } from "react";
import { Drawer, Button } from "antd";

const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => {
    setIsVisible(true);
  };

  const closeDrawer = () => {
    setIsVisible(false);
  };

  return (
    <div className="sidebar">
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={closeDrawer}
        visible={isVisible}
        height={90}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default SideBar;
