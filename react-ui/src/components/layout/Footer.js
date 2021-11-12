import React from "react";
import { Layout, Menu } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";

const { Item } = Menu;

const Footer = () => {
  return (
    // <div
    //   className="footer"
    //   style={{
    //     border: "3px solid red",
    //     textAlign: "center",
    //   }}
    // >
    //   <p>
    //     {/* Created by <span>Chris Kakos&#8482</span> */}
    //     Created by{" "}
    //     <span>
    //       Chris Kakos <CopyrightOutlined />
    //     </span>
    //   </p>
    // </div>

    <Menu
      className="footer"
      mode="horizontal"
      style={{ border: "3px solid red" }}
    >
      <Item id="brand" key="brand">
        {" "}
        <p>
          {/* Created by <span>Chris Kakos&#8482</span> */}
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
