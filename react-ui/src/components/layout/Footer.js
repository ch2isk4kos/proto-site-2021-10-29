import React from "react";
import BottomBar from "./BottomBar";
import { Menu } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";

const { Item } = Menu;

const Footer = () => {
  return (
    <Menu
      className="footer"
      mode="horizontal"
      //   style={{ border: "3px solid red" }}
    >
      <Item className="footer-item" key="name">
        {" "}
        <p>
          Created by{" "}
          <span>
            Chris Kakos <CopyrightOutlined />{" "}
          </span>{" "}
        </p>
      </Item>
      <Item className="footer-item" key="x">
        {" "}
        <p>X</p>
      </Item>
      <Item className="footer-item" key="y">
        {" "}
        <p>Y</p>
      </Item>
      <Item className="footer-item" key="z">
        {" "}
        <p>Z</p>
      </Item>
      <Item id="name" className="footer-item footer-btn" key="bottom">
        <BottomBar />
      </Item>
    </Menu>
  );
};

export default Footer;
