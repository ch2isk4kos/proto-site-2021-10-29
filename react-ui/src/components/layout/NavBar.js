import React, { useState } from "react";
import SideBar from "./SideBar";
import { Menu } from "antd";
import {
  FireOutlined,
  LoginOutlined,
  LogoutOutlined,
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
      <Item id="brand" key="brand" icon={<FireOutlined />}>
        Brand
      </Item>
      <Item className="nav-item" key="sidebar">
        <SideBar />
      </Item>
      <Item className="nav-item" key="signin" icon={<LoginOutlined />}>
        Sign In
      </Item>
      <Item className="nav-item" key="signup" icon={<UserAddOutlined />}>
        Sign Up
      </Item>
      <Item className="nav-item" key="???" icon={<UserOutlined />}>
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Dashboard
        </a>
      </Item>
      <SubMenu
        className="nav-item"
        key="SubMenu"
        icon={<UserOutlined />}
        title="Options"
      >
        <ItemGroup title="Item 1">
          <Item className="nav-sub-item" key="setting:1">
            Option 1
          </Item>
          <Item className="nav-sub-item" key="setting:2">
            Option 2
          </Item>
        </ItemGroup>
        <ItemGroup title="Item 2">
          <Item className="nav-sub-item" key="setting:3">
            Option 3
          </Item>
          <Item className="nav-sub-item" key="setting:4">
            Option 4
          </Item>
        </ItemGroup>
        <ItemGroup title="Item 3">
          <Item
            className="nav-sub-item"
            key="signout"
            icon={<LogoutOutlined />}
          >
            Sign Out
          </Item>
        </ItemGroup>
      </SubMenu>
    </Menu>
  );
};

export default NavBar;
