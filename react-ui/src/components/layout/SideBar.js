import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";

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
      <Button
        style={{ width: "2.5em", borderRadius: ".25em" }}
        type="primary"
        icon={<MenuFoldOutlined />}
        onClick={showDrawer}
      ></Button>
      <Drawer
        title="Sidebar"
        placement="right"
        width={532}
        onClose={closeDrawer}
        visible={isVisible}
        footer={<h3>Footer</h3>}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default SideBar;
