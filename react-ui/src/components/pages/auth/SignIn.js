import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { signInLocally, signInWithGoogle } from "../../../api/firebase/helpers";
import SignUp from "./SignUp";
import Home from "../home/Home";

const { Item } = Form;

const SignIn = () => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
    remember: true,
    isLoading: false,
  });
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    forceUpdate({});
  }, []);

  const openNotification = (user) => {
    notification.info({
      message: `Welcome back ${user}!`,
      description: "Get caught up on everything you've missed.",
      placement: "topRight",
    });
  };

  const openNotificationError = (error) => {
    console.log(error);
    notification.info({
      message: `Sign In Error!`,
      description: error.message,
      placement: "topRight",
    });
  };

  const handleOnChange = (value) => {
    let input = form.getFieldsValue(value);
    setSignInData(input);
  };

  const handleOnSubmit = async (values) => {
    setSignInData({ isLoading: true, ...values });

    try {
      const signin = await signInLocally(signInData.email, signInData.password);
      const { user } = signin;
      dispatch({
        type: "SIGN_IN",
        payload: {
          email: user.email,
          token: user.accessToken,
        },
      });
      // clear user input fields
      form.resetFields();
      // redirect home
      navigate("/");
      // welcome message
      openNotification(`${user.email.split("@")[0]}`);
    } catch (err) {
      console.log("ERROR:", err);
      setSignInData({ isLoading: false, ...values });
      openNotificationError(err);
    }
  };

  const handleOnGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signInWithGoogle().then(async (res) => {
        const { user } = res;
        dispatch({
          type: "SIGN_IN",
          payload: {
            email: user.email,
            token: user.accessToken,
          },
        });
        // redirect home
        navigate("/");
        // welcome message
        openNotification(user.displayName);
      });
    } catch (err) {
      console.log("Error:", err);
      openNotificationError(err);
    }
  };

  const handleOnSubmitError = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="signin">
      {!!signInData.isLoading ? <h1>Signing In...</h1> : <h1>Sign In.</h1>}
      <Form
        className="signin-form"
        name="normal_login"
        form={form}
        initialValues={{
          email: "",
          password: "",
          remember: true,
          isLoading: false,
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
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Please enter your email address!",
              warningOnly: true,
              type: "string",
              min: 6,
            },
          ]}
          hasFeedback
        >
          <Input
            className="signin-form-item-input"
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
        {/* Local Signin Button */}
        <Item className="signin-form-item" shouldUpdate>
          <Button
            className="signin-form-button"
            type="primary"
            htmlType="submit"
            disabled={
              !(signInData.email && signInData.password) ||
              signInData.password.length < 6 ||
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
      {/* Google Signin Button */}
      <div className="google-signin-button-container">
        <Button
          className="google-signin-button"
          type="primary"
          htmlType="submit"
          onClick={handleOnGoogleSignIn}
        >
          Sign In With Google
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
