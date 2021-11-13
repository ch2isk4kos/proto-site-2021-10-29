import React, { useState } from "react";
import { Drawer, Button } from "antd";
import { UpOutlined } from "@ant-design/icons";

const BottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const showDrawer = () => {
    setIsVisible(true);
  };

  const closeDrawer = () => {
    setIsVisible(false);
  };

  return (
    <div className="bottombar">
      <Button
        style={{ width: "2.5em", borderRadius: ".25em" }}
        type="primary"
        icon={<UpOutlined />}
        onClick={showDrawer}
      ></Button>
      <Drawer
        title="Bottombar"
        placement="bottom"
        height={350}
        onClose={closeDrawer}
        visible={isVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default BottomBar;
