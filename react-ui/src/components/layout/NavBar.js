import React, { useState } from "react";
import SideBar from "./SideBar";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import { Link } from "react-router-dom";
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
      selectedKeys={[current]}
      onClick={handleOnNavLink}
    >
      <Item id="brand" key="brand" icon={<FireOutlined />}>
        <Link to="/" element={<Home />}>
          Brand
        </Link>
      </Item>
      <Item className="navbar-item" key="sidebar">
        <SideBar />
      </Item>
      <Item className="navbar-item" key="signin" icon={<LoginOutlined />}>
        <Link to="signin" element={<SignIn />}>
          Sign In
        </Link>
      </Item>
      <Item className="navbar-item" key="signup" icon={<UserAddOutlined />}>
        <Link to="signup" element={<SignUp />}>
          Sign Up
        </Link>
      </Item>
      <Item className="navbar-item" key="???" icon={<UserOutlined />}>
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Dashboard
        </a>
      </Item>
      <SubMenu
        className="navbar-item"
        key="SubMenu"
        icon={<UserOutlined />}
        title="Options"
      >
        <ItemGroup title="Item 1">
          <Item className="navbar-sub-item" key="setting:1">
            Option 1
          </Item>
          <Item className="navbar-sub-item" key="setting:2">
            Option 2
          </Item>
        </ItemGroup>
        <ItemGroup title="Item 2">
          <Item className="navbar-sub-item" key="setting:3">
            Option 3
          </Item>
          <Item className="navbar-sub-item" key="setting:4">
            Option 4
          </Item>
        </ItemGroup>
        <ItemGroup title="Item 3">
          <Item
            className="navbar-sub-item"
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
