import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import SideBar from "./SideBar";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import { signOutUser } from "../../api/firebase/helpers";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  FireOutlined,
  LoginOutlined,
  LogoutOutlined,
  ReadOutlined,
  ShoppingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { SubMenu, Item, ItemGroup } = Menu;

const NavBar = () => {
  const [current, setCurrent] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnNavLink = (e) => {
    setCurrent({ current: e.key });
  };

  const handleOnSignOut = () => {
    console.log("signing out...");
    signOutUser();
    dispatch({
      type: "SIGN_OUT",
      payload: null,
    });
    navigate("/signin");
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
      {/* Articles */}
      <Item className="navbar-item" key="articles" icon={<ReadOutlined />}>
        <Link to="articles" element={<SignUp />}>
          Articles
        </Link>
      </Item>
      {/* Shop */}
      <Item className="navbar-item" key="shop" icon={<ShoppingOutlined />}>
        <Link to="/" element={<Home />}>
          Shop
        </Link>
      </Item>
      {/* Sign Up */}
      {!user && (
        <Item className="navbar-item" key="signup" icon={<UserAddOutlined />}>
          <Link to="signup" element={<SignUp />}>
            Sign Up
          </Link>
        </Item>
      )}
      {/* Sign In */}
      {!user && (
        <Item className="navbar-item" key="signin" icon={<LoginOutlined />}>
          <Link to="signin" element={<SignIn />}>
            Sign In
          </Link>
        </Item>
      )}
      {/* Dashboard */}
      {user && (
        <Item className="navbar-item" key="???" icon={<UserOutlined />}>
          <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dashboard
          </a>
        </Item>
      )}
      {/* User Options */}
      {user && (
        <SubMenu
          className="navbar-item"
          key="SubMenu"
          icon={<UserOutlined />}
          // title="Options"
          title={user.email.split("@")[0]}
        >
          <ItemGroup title="Dashboard">
            <Item className="navbar-sub-item" key="setting:1">
              Profile
            </Item>
            <Item className="navbar-sub-item" key="setting:2">
              Cart
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
              onClick={handleOnSignOut}
            >
              Sign Out
            </Item>
          </ItemGroup>
        </SubMenu>
      )}
      {/* User SideBar */}
      <Item className="navbar-item" key="sidebar">
        <SideBar />
      </Item>
    </Menu>
  );
};

export default NavBar;
