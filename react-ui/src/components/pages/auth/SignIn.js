import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import SignUp from "./SignUp";
import Home from "../home/Home";

const { Item } = Form;

const SignIn = () => {
  const [form] = Form.useForm();
  console.log("Sign In -> form:", form);
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
    remember: true,
  });
  let navigate = useNavigate();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const handleOnChange = (value) => {
    console.log("value:", value);
    let input = form.getFieldsValue(value);
    console.log("input:", input);
    setSignInData(input);
    console.log("signInData:", signInData);
  };

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
        form={form}
        initialValues={{
          email: "",
          password: "",
          remember: true,
        }}
        onValuesChange={handleOnChange}
        onFinish={handleOnSubmit}
        onFinishFailed={handleOnSubmitError}
        autoComplete="off"
      >
        {/* Email */}
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
        {/* Password */}
        <Item
          className="signin-form-item"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            {
              validator: async (_, value) => {
                if (!value || value.length < 6) {
                  return Promise.reject(
                    new Error("Password must be at least 6 characters")
                  );
                }
              },
            },
          ]}
          hasFeedback
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            // type="password"
            placeholder="Password"
          />
        </Item>
        {/* Remember Me */}
        <Item className="signin-form-item">
          <Item name="remember" valuePropName="checked" noStyle>
            <Checkbox className="signin-form-remember">Remember me</Checkbox>
          </Item>
          {/* Forgot Password */}
          <Link className="signin-form-forgot" to="/" element={<Home />}>
            Forgot password
          </Link>
        </Item>
        {/* Signin Button */}
        <Item className="signin-form-item" shouldUpdate>
          <Button
            className="signin-form-button"
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(false) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
          >
            Sign In
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
