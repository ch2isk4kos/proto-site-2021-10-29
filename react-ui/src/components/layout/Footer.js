import React from "react";
import { Menu } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";

const { Item } = Menu;

const Footer = () => {
  return (
    <Menu
      className="footer"
      mode="horizontal"
      style={{ border: "3px solid red" }}
    >
      <Item id="brand" key="brand">
        {" "}
        <p>
          Created by{" "}
          <span>
            Chris Kakos <CopyrightOutlined />{" "}
          </span>{" "}
        </p>
      </Item>
    </Menu>
  );
};

export default Footer;
