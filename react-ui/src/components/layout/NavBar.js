import React, { useState } from "react";
import { Menu } from "antd";
import {
  FireOutlined,
  LoginOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu, Item, ItemGroup } = Menu;

const NavBar = () => {
  const [current, setCurrent] = useState("");

  const handleOnNavLink = (e) => {
    setCurrent(e.key);
  };

  return (
    <Menu
      className="navbar"
      mode="horizontal"
      onClick={handleOnNavLink}
      selectedKeys={[current]}
    >
      {/* Brand */}
      {/* <div id="brand">
        <Item key="thunderbolt" icon={<FireOutlined />}>
          Brand
        </Item>
      </div> */}
      <Item id="brand" key="brand" icon={<FireOutlined />}>
        Brand
      </Item>

      <Item className="nav-item" key="signin" icon={<LoginOutlined />}>
        Sign In
      </Item>
      <Item className="nav-item" key="signup" icon={<UserAddOutlined />}>
        Sign Up
      </Item>
      <Item className="nav-item" key="???">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          ???
        </a>
      </Item>
      <SubMenu
        className="nav-item"
        key="SubMenu"
        icon={<UserOutlined />}
        title="User Profile"
      >
        <ItemGroup title="Item 1">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
        </ItemGroup>
        <ItemGroup title="Item 2">
          <Item key="setting:3">Option 3</Item>
          <Item key="setting:4">Option 4</Item>
        </ItemGroup>
      </SubMenu>
    </Menu>
    // <Menu
    //   className="navbar"
    //   // mode="horizontal"
    //   onClick={handleOnNavLink}
    //   selectedKeys={[current]}
    // >
    //   {/* Brand */}
    //   <div id="brand">
    //     <Item key="thunderbolt" icon={<FireOutlined />}>
    //       Brand
    //     </Item>
    //   </div>
    //   <div id="nav-items">
    //     <Item key="signin" icon={<LoginOutlined />}>
    //       Sign In
    //     </Item>
    //     <Item key="signup" icon={<UserAddOutlined />}>
    //       Sign Up
    //     </Item>
    //     <Item key="???">
    //       <a
    //         href="https://ant.design"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         ???
    //       </a>
    //     </Item>
    //     <SubMenu key="SubMenu" icon={<UserOutlined />} title="User Profile">
    //       <ItemGroup title="Item 1">
    //         <Item key="setting:1">Option 1</Item>
    //         <Item key="setting:2">Option 2</Item>
    //       </ItemGroup>
    //       <ItemGroup title="Item 2">
    //         <Item key="setting:3">Option 3</Item>
    //         <Item key="setting:4">Option 4</Item>
    //       </ItemGroup>
    //     </SubMenu>
    //   </div>
    // </Menu>
  );
};

export default NavBar;
