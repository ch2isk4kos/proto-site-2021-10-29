import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import SignUp from "./SignUp";

const { Item } = Form;

const SignIn = () => {
  // const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const handleOnSubmit = (values) => {
    console.log("Finish:", values);
  };

  const handleOnSubmitError = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="signin">
      <h1>Sign In.</h1>
      <Form
        className="signin-form"
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={handleOnSubmit}
        onFinishFailed={handleOnSubmitError}
      >
        <Item
          className="signin-form-item"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="email@address.com"
            autoFocus
          />
        </Item>
        <Item
          className="signin-form-item"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Item>
        <Item className="signin-form-item">
          <Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="signin-form-remember">Remember me</Checkbox>
          </Item>

          <a className="signin-form-forgot" href="">
            Forgot password
          </a>
        </Item>

        <Item className="signin-form-item">
          <Button
            className="signin-form-button"
            type="primary"
            htmlType="submit"
          >
            Log in
          </Button>
          <span className="signin-form-register">
            Or{" "}
            <Link to="/signup" element={<SignUp />}>
              register now
            </Link>
          </span>
        </Item>
      </Form>
    </div>
  );
};

export default SignIn;
